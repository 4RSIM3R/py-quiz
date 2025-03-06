<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassHasModule extends Model
{
    /** @use HasFactory<\Database\Factories\ClassHasModuleFactory> */
    use HasFactory;

    protected $guarded = [];

    public function class()
    {
        return $this->belongsTo(ClassRoom::class);
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
