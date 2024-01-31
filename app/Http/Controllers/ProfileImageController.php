<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rules\File;
use Illuminate\Http\Request;

class ProfileImageController extends Controller
{
    public function update(Request $request): void
    {
        $user = auth()->user();

        $attributes = $request->validate([
            'cover' => ['image', 'mimes:jpeg,png', File::image()->min('1kb')->max('5mb')]
        ]);

        $cover = $attributes['cover'] ?? null;

        if ($cover) {
            $path = $request->file('cover')->store('covers/' . $user->id . "/");
            $user->update(['cover_path' => $path]);
        }
    }
}
