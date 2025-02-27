<?php

use App\Models\ClassRoom;
use App\Models\Student;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('class_has_students', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(ClassRoom::class)->constrained();
            $table->foreignIdFor(Student::class)->constrained();
            $table->baseFields();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_has_students');
    }
};
