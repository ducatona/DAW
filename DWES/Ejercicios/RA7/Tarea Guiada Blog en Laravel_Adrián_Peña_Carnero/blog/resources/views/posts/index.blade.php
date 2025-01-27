@extends('layout')

@section('title','Listado de Posts')

@section('content')

<h1>Listado de Posts</h1>
<a href="{{ route('posts.create') }}" class="button">Crear nuevo post</a>
<ul>

@foreach ($posts as $post)
    <li>
        <a href="{{ route('posts.show', $post) }}">{{ $post->titulo }}</a>
        <a href="{{ route('posts.edit', $post) }}">Editar</a>

        <form action="{{ route('posts.destroy', $post) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit">Eliminar</button>
        </form>
    </li>
@endforeach

</ul>

<div class="pagination">
    {{ $posts->links() }}
</div>

@endsection
