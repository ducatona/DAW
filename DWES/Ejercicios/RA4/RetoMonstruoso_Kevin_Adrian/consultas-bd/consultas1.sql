USE  monstruosa;
-- 1
select nombre from monstruos ;
-- 2
select nombre, primera_aparicion from monstruos;
-- 3
select titulo from peliculas where director = 'James Whale';

-- 4
select titulo from libros  inner join monstruos on libros.id_monstruo = monstruos.id_monstruo where monstruos.nombre = 'Drácula';
-- 5
select nombre from monstruos where fecha_muerte is null;

-- 6
select titulo from series_tv inner join monstruos on series_tv.id_monstruo = monstruos.id_monstruo where monstruos.nombre = 'Chucky';

-- 7
select titulo from peliculas where actor_principal = 'Boris Karloff';

-- 8 

select fecha_muerte from monstruos where nombre = 'Frankenstein';

-- 9

select titulo from libros;

-- 10

 select primera_aparicion from monstruos where nombre = 'Hombre Lobo';


