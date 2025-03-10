<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Question extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\QuestionFactory> */
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('material');
    }

    public function getMaterialAttribute(): string|null
    {
        return $this->getFirstMediaUrl('material');
    }
}
