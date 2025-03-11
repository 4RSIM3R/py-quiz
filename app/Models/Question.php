<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Question extends Model 
{
    /** @use HasFactory<\Database\Factories\QuestionFactory> */
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];


}
