<?php

namespace App\Http\Controllers;

use App\Models\Pelicula;
use App\Models\Director;
use Illuminate\Http\Request;

class PeliculaController extends Controller
{
    /**
     * Devuelve una vista con el listado de películas y sus directores.
     */
    public function index()
    {
        $peliculas = Pelicula::with('director')->get();
        return view('peliculas.index', compact('peliculas'));
    }

    /**
     * Devuelve una vista con un formulario para crear una nueva película. 
     */
    public function create()
    {
        $directores = Director::all();
        return view('peliculas.create', compact('directores'));
    }

    /**
     * Almacena una nueva película en la base de datos.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|max:255',
            'anio' => 'required|integer|between:2000,2025',
            'director_id' => 'required|exists:directors,id',
        ]);

        Pelicula::create([
            'titulo' => $request->titulo,
            'sinopsis' => $request->sinopsis,
            'anio' => $request->anio,
            'director_id' => $request->director_id,
        ]);

        return redirect()->route('peliculas.index')->with('success', 'Película creada con éxito.');
    }

    /**
     *  Devuelve una vista con un formulario para editar una película existente. 
     */
    public function edit($id)
    {
        $pelicula = Pelicula::findOrFail($id);
        $directores = Director::all();
        return view('peliculas.edit', compact('pelicula', 'directores'));
    }

    /**
     * Actualiza los datos de una película en la base de datos.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'titulo' => 'required|max:255',
            'anio' => 'required|integer|between:2000,2025',
            'director_id' => 'required|exists:directors,id',
        ]);

        $pelicula = Pelicula::findOrFail($id);
        $pelicula->update([
            'titulo' => $request->titulo,
            'sinopsis' => $request->sinopsis,
            'anio' => $request->anio,
            'director_id' => $request->director_id,
        ]);

        return redirect()->route('peliculas.index')->with('success', 'Película actualizada con éxito.');
    }

    /**
     * Elimina una película de la base de datos.
     */
    public function destroy($id)
    {
        $pelicula = Pelicula::findOrFail($id);
        $pelicula->delete();

        return redirect()->route('peliculas.index')->with('success', 'Película eliminada con éxito.');
    }
}
