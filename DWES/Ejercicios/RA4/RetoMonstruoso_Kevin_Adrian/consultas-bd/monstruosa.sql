CREATE DATABASE IF NOT EXISTS Monstruosa;
USE Monstruosa;

-- Crear tabla Monstruos
CREATE TABLE IF NOT EXISTS Monstruos (
  id_monstruo INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  primera_aparicion INT NOT NULL,
  fecha_muerte DATE DEFAULT NULL
);

-- Crear tabla Libros
CREATE TABLE IF NOT EXISTS Libros (
  id_libro INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  id_monstruo INT,
  FOREIGN KEY (id_monstruo) REFERENCES Monstruos(id_monstruo) ON DELETE SET NULL
);

-- Crear tabla Peliculas
CREATE TABLE IF NOT EXISTS Peliculas (
  id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  director VARCHAR(100) NOT NULL,
  actor_principal VARCHAR(100) NOT NULL,
  id_monstruo INT,
  FOREIGN KEY (id_monstruo) REFERENCES Monstruos(id_monstruo) ON DELETE SET NULL
);

-- Crear tabla Series_TV
CREATE TABLE IF NOT EXISTS Series_TV (
  id_serie INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  id_monstruo INT,
  FOREIGN KEY (id_monstruo) REFERENCES Monstruos(id_monstruo) ON DELETE SET NULL
);

-- Insertar registros en la tabla Monstruos
INSERT INTO Monstruos (nombre, primera_aparicion, fecha_muerte) VALUES
  ('Drácula', 1897, '1897-11-15'),
  ('Frankenstein', 1818, '1831-05-21'),
  ('Hombre Lobo', 1935, NULL),
  ('Momia', 1932, NULL),
  ('Chucky', 1988, NULL);

-- Insertar registros en la tabla Libros
INSERT INTO Libros (titulo, id_monstruo) VALUES
  ('Drácula', 1),
  ('Frankenstein o el Moderno Prometeo', 2),
  ('El misterio de la momia', 4),
  ('Chucky: La novela', 5),
  ('La maldición del Hombre Lobo', 3);

-- Insertar registros en la tabla Peliculas
INSERT INTO Peliculas (titulo, director, actor_principal, id_monstruo) VALUES
  ('Drácula', 'Tod Browning', 'Bela Lugosi', 1),
  ('Frankenstein', 'James Whale', 'Boris Karloff', 2),
  ('El Hombre Lobo', 'George Waggner', 'Lon Chaney Jr.', 3),
  ('La Momia', 'Karl Freund', 'Boris Karloff', 4),
  ('Child\'s Play', 'Tom Holland', 'Brad Dourif', 5);

-- Insertar registros en la tabla Series_TV
INSERT INTO Series_TV (titulo, id_monstruo) VALUES
  ('Penny Dreadful', 1),
  ('The Frankenstein Chronicles', 2),
  ('Teen Wolf', 3),
  ('The Mummy: The Animated Series', 4),
  ('Chucky: La serie', 5);
