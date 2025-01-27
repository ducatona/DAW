@extends('layout')

@section('title', $post->titulo)

@section('content')

<h1>{{ $post->titulo }}</h1>
<p>{{ $post->contenido }}</p>

<h2>Comentarios</h2>

<ul>
@foreach ($post->comments as $comment)
    <li>
        {{$comment->autor}} dijo:
        <p>{{$comment->contenido}}</p>
        <small>Publicado el {{$comment->created_at->format('d/m/Y H:i')}}</small>
    </li>
@endforeach
</ul>

<h3>Añadir comentario</h3>

@if (session('success'))
    <p class="success">{{ session('success') }}</p>
@endif

<form action="{{ route('comments.store', $post) }}" method="POST">
    @csrf
    <label for="autor">Nombre:</label>
    <input type="text" name="autor" id="autor" required>
    <label for="contenido">Comentario:</label>
    <textarea name="contenido" id="contenido" required></textarea>
    <button type="submit">Añadir un comentario</button>
</form>

<a href="{{ route('posts.index') }}" class="button">Volver al listado</a>

@endsection
