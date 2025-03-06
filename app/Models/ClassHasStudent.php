<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassHasStudent extends Model
{
    /** @use HasFactory<\Database\Factories\ClassHasStudentFactory> */
    use HasFactory;

    protected $guarded = [];

    public function class()
    {
        return $this->belongsTo(ClassRoom::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
