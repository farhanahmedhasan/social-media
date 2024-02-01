<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileImageUpdateRequest;

class ProfileImageController extends Controller
{
    public function update(ProfileImageUpdateRequest $request): void
    {
        $user = auth()->user();

        $cover = $request['cover'] ?? null;
        $avatar = $request['avatar'] ?? null;

        if ($cover) {
            $path = $request->file('cover')->store('covers/' . $user->id . '/');
            $user->update(['cover_path' => $path]);
        }

        if ($avatar) {
            $path = $request->file('avatar')->store('avatars/' . $user->id . '/');
            $user->update(['avatar_path' => $path]);
        }
    }
}
