@extends('layout')

@section('title', 'Editar Película')

@section('content')
<div class="container">
    <h1>Editar Película</h1>
    <form action="{{ route('peliculas.update', $pelicula->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" class="form-control" value="{{ $pelicula->titulo }}" required>
        </div>
        <div class="form-group">
            <label for="sinopsis">Sinopsis</label>
            <textarea name="sinopsis" id="sinopsis" class="form-control">{{ $pelicula->sinopsis }}</textarea>
        </div>
        <div class="form-group">
            <label for="anio">Año</label>
            <input type="number" name="anio" id="anio" class="form-control" min="2000" max="2025" value="{{ $pelicula->anio }}" required>
        </div>
        <div class="form-group">
            <label for="director_id">Director</label>
            <select name="director_id" id="director_id" class="form-control" required>
                @foreach($directores as $director)
                <option value="{{ $director->id }}" {{ $pelicula->director_id == $director->id ? 'selected' : '' }}>{{ $director->nombre }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
</div>
@endsection
