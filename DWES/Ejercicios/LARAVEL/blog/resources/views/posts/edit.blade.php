@extends('layout')


@section('title','Editar Post')


@section('content')

<h1>Editar Post</h1>

<form action="{{route('posts.update',$post)}}" method="POST"> <!--Obetenemos el id del post pasandole como parametroa  la ruta-->
@csrf
@method('PUT')
<label for="titulo">Titulo:</label>
<input type="text" name="titulo" id="titulo" value="{{$post->titulo}}" required>
<label for="contenido">Contenido:</label>
<textarea name="contenido" id="contenido" required>{{$post->contenido}}</textarea>
<button type="submit">Actualizar</button>

</form>

@endsection

