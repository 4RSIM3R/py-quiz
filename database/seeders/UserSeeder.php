<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin'),
        ]);

        $admin->assignRole(['admin']);

        $teacher = User::create([
            'name' => 'teacher',
            'email' => 'teacher@example.com',
            'password' => Hash::make('teacher'),
        ]);

        $teacher->assignRole(['teacher']);

        $student = User::create([
            'name' => 'student',
            'email' => 'student@example.com',
            'password' => Hash::make('student'),
        ]);

        $student->assignRole(['student']);
    }
}
