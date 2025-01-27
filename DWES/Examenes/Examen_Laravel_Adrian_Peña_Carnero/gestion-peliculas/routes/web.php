<?php

use App\Http\Controllers\PeliculaController;
use App\Models\Director;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('peliculas.index');
});
Route::resource('peliculas', PeliculaController::class);
Route::get('/', [PeliculaController::class, 'index'])->name('peliculas.index');



