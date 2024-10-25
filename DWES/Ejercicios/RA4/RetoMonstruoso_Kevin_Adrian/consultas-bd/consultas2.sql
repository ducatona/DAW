-- 1
select nombre,primera_aparicion from monstruos where primera_aparicion < 1900;

-- 2
select monstruos.nombre , peliculas.titulo from monstruos inner join peliculas
on monstruos.id_monstruo = peliculas.id_monstruo where peliculas.actor_principal = 'Boris Karloff';

-- 3
select peliculas.titulo, peliculas.director from monstruos inner join peliculas
on monstruos.id_monstruo = peliculas.id_monstruo where monstruos.fecha_muerte is not null;


-- 4

select count(*) from libros inner join monstruos on libros.id_monstruo = monstruos.id_monstruo where monstruos.nombre = 'Frankenstein';


-- 5

select monstruos.nombre from monstruos inner join peliculas
on monstruos.id_monstruo = peliculas.id_monstruo group by nombre having count(peliculas.id_pelicula) > 1; 

-- 6



 SELECT M.nombre, L.titulo FROM Monstruos M INNER JOIN Libros L ON M.id_monstruo = L.id_monstruo;
 
 
 -- 7
 select st.titulo, m.nombre from series_tv as st inner join monstruos as m on st.id_monstruo = m.id_monstruo where m.nombre = 'Drácula';
 
 -- 8
 select m.nombre,m.primera_aparicion from monstruos as m inner join series_tv as  
 st on st.id_monstruo = m.id_monstruo ;
 
 -- 9
 select titulo from peliculas where actor_principal != 'Lon Chaney Jr.';
 
 
 -- 10
 
 select m.nombre from libros l inner join monstruos m on m.id_monstruo = l.id_monstruo 
 inner join series_tv st on m.id_monstruo = st.id_monstruo GROUP BY m.nombre;
 
 

