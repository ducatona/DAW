<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    
    use HasFactory;

    protected $fillable = ['autor','contenido','post_id'];



    public function peliculas() {
        return $this->hasMany(Pelicula::class);
    }


    

}
