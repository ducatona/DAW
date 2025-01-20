<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;

Route::get('/', function () {
    return view('posts.index');
});


Route::resource('posts',PostController::class);



Route::post('posts/{post}/comments',[CommentController::class,'store'])->name('comments.store');

Route::get('/', [PostController::class, 'index'])->name('posts.index');

