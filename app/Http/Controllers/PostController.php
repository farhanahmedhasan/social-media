<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\PostStoreRequest;
use Illuminate\Http\RedirectResponse;
use App\Models\Post;

class PostController extends Controller
{
    public function store(PostStoreRequest $request): RedirectResponse
    {
        Post::create($request->all());

        return Redirect::back();
    }
}
