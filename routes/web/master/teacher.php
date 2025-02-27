<?php

use App\Http\Controllers\Master\TeacherController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/teacher',
        'as' => 'backoffice.master.teacher.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [TeacherController::class, 'index'])->name('index');
        Route::get('fetch', [TeacherController::class, 'fetch'])->name('fetch');
        Route::get('create', [TeacherController::class, 'create'])->name('create');
        Route::get('{id}', [TeacherController::class, 'show'])->name('show');
        Route::post('store', [TeacherController::class, 'store'])->name('store');
        Route::put('{id}', [TeacherController::class, 'update'])->name('update');
        Route::delete('{id}', [TeacherController::class, 'destroy'])->name('destroy');
    }
);