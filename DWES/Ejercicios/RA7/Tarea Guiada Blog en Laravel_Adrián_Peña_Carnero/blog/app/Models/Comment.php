<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model



{
    
    use HasFactory;

    protected $fillable = ['autor','contenido', 'post_id'];



    public function post(){

        return $this->hasMany(Post::class);
    }









}
