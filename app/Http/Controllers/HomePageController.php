<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomePageController extends Controller
{
    public function index(Request $request): Response
    {
//        dd(Post::query()->paginate(20));
        return Inertia::render('HomePage', [
            'posts' => Post::query()->paginate(20)
        ]);
    }
}
