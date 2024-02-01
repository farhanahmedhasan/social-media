<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Spatie\Sluggable\SlugOptions;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Sluggable\HasSlug;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasSlug;

    protected $fillable = [
        'name',
        'username',
        'cover_path',
        'avatar_path',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('username')
            ->doNotGenerateSlugsOnUpdate();
    }

    public function coverPath(): Attribute
    {
        return Attribute::get(function ($value) {
            if (is_null($value) || $value === "") {
                return '/images/defaults/user-cover.jpg';
            }
            return Storage::url($value);
        });
    }

    public function avatarPath(): Attribute
    {
        return Attribute::get(function ($value) {
            if (is_null($value) || $value === "") {
                return '/images/defaults/user-profile.png';
            }

            return Storage::url($value);
        });
    }
}
