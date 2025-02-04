<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    

    protected $fillable = ['titulo','sinopsis','anio','director_id'];
    public function director() {
        return $this->belongsTo(Director::class);
    }

}
