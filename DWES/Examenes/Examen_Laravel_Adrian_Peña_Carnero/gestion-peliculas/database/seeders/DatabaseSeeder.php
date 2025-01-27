<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DirectorsTableSeeder::class);
        $this->call(PeliculasTableSeeder::class);
    }
}

class DirectorsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('directors')->insert([
            ['nombre' => 'Chris Columbus', 'fecha_nacimiento' => '1958-09-10', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['nombre' => 'Alfonso Cuarón', 'fecha_nacimiento' => '1961-11-28', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['nombre' => 'Mike Newell', 'fecha_nacimiento' => '1942-03-28', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['nombre' => 'David Yates', 'fecha_nacimiento' => '1963-10-08', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}

class PeliculasTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('peliculas')->insert([
            ['titulo' => 'Harry Potter y la piedra filosofal', 'sinopsis' => 'La primera aventura de Harry mientras descubre su magia.', 'anio' => 2001, 'director_id' => 1, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['titulo' => 'Harry Potter y la cámara secreta', 'sinopsis' => 'Harry enfrenta el misterio de una cámara secreta en Hogwarts.', 'anio' => 2002, 'director_id' => 1, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['titulo' => 'Harry Potter y el prisionero de Azkaban', 'sinopsis' => 'Harry descubre más sobre su pasado y a Sirius Black.', 'anio' => 2004, 'director_id' => 2, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['titulo' => 'Harry Potter y el cáliz de fuego', 'sinopsis' => 'El torneo de los tres magos lleva a Voldemort de regreso.', 'anio' => 2005, 'director_id' => 3, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
