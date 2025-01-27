@extends('layout')

@section('title', 'Listado de Películas')

@section('content')
<div class="container">
    <h1>Listado de Películas</h1>
    <a href="{{ route('peliculas.create') }}" class="btn btn-primary">Crear nueva película</a>
    <table class="table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Sinopsis</th>
                <th>Año</th>
                <th>Director</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @foreach($peliculas as $pelicula)
            <tr>
                <td>{{ $pelicula->titulo }}</td>
                <td>{{ $pelicula->sinopsis }}</td>
                <td>{{ $pelicula->anio }}</td>
                <td>{{ $pelicula->director->nombre }}</td>
                <td>
                    <a href="{{ route('peliculas.edit', $pelicula->id) }}" class="btn btn-warning">Editar</a>
                    <form action="{{ route('peliculas.destroy', $pelicula->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Eliminar</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
