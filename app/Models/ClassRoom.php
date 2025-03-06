<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    /** @use HasFactory<\Database\Factories\ClassRoomFactory> */
    use HasFactory;

    protected $guarded = [];

    public function students()
    {
        return $this->hasManyThrough(
            Student::class,
            ClassHasStudent::class,
            'class_room_id',
            'id',
            'id',
            'student_id'
        );
    }
}
