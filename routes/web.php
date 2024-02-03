<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileImageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomePageController::class, 'index'])->middleware(['auth', 'verified'])->name("homepage");

Route::get('/u/{user:username}', [ProfileController::class, 'index'])->name('profile');

Route::middleware('auth')->group(function () {
    Route::patch('/profile/updateImage', [ProfileImageController::class, 'update'])->name('profileImage.update');
    Route::patch('/profile/update', [ProfileController::class, 'update'])->name('profile.update');

    Route::post('/post', [PostController::class, 'store'])->name('post.store');
});

require __DIR__ . '/auth.php';
