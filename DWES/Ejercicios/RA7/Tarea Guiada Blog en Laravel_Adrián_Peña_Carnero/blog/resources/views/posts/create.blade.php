@extends('layout') <!--Extendemos de una vista padre-->


@section('title', 'Crear Post') <!--En la sección titulo el contenido se va a llamar Crear Post-->

@section('content') <!---Le indicamos que en la seccion content se va a inyectar este codigo-->

<h1>Crear Post</h1> 

<form action="{{route('posts.store')}}" method="POST">

    @csrf
    <label for="titulo">Titulo:</label>
    <input type="text" name="titulo" id="titulo" required>
    <label for="contenido">Contenido:</label>
    <textarea name="contenido" id="contenido" required></textarea>
    <button type="submit">Guardar</button>

</form>

@endsection