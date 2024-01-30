<?php

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomePageController::class, 'index'])->middleware(['auth', 'verified'])->name("homepage");

Route::get('/u/{user:username}', [ProfileController::class, 'index'])->name('profile');

Route::middleware('auth')->group(function () {
    Route::patch('/u/{user:username}', [ProfileController::class, 'updateImage'])->name('profile.updateImage');
    Route::patch('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
});

require __DIR__ . '/auth.php';
