<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\User;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(User $user, Request $request): Response
    {
        return Inertia::render('Profile/Index', [
            'user' => new UserResource($user),
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Index', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function updateImage(User $user, Request $request): void
    {
//        dd($request->all());
        $attributes = $request->validate([
            'avatar' => ['image'],
            'cover' => ['image']
        ]);

        $avatar = $attributes['avatar'] ?? null;
        $cover = $attributes['cover'] ?? null;

        if ($avatar) {
            $path = $request->file('avatar')->storeAs('avatars', auth()->user()->id);
            $user->update(['avatar_path' => $avatar]);
        }

        if ($cover) {
            $path = $request->file('cover')->store('covers/' . $user->username . "/");
            $user->update(['cover_path' => $path]);
        }
//        dd($avatar, $cover);
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route("profile", [$request->user()->username]);

    }
}
