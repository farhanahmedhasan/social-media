<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use Inertia\Response;
use App\Models\Post;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index(): Response
    {
        $posts = Post::query()->latest()->paginate(20);
        return Inertia::render('HomePage', [
            'posts' => PostResource::collection($posts)
        ]);
    }
}
