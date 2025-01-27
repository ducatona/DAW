@extends('layout')

@section('title', 'Crear Película')

@section('content')
<div class="container">
    <h1>Crear Película</h1>
    <form action="{{ route('peliculas.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="sinopsis">Sinopsis</label>
            <textarea name="sinopsis" id="sinopsis" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label for="anio">Año</label>
            <input type="number" name="anio" id="anio" class="form-control" min="2000" max="2025" required>
        </div>
        <div class="form-group">
            <label for="director_id">Director</label>
            <select name="director_id" id="director_id" class="form-control" required>
                @foreach($directores as $director)
                <option value="{{ $director->id }}">{{ $director->nombre }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</div>
@endsection
