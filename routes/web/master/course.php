<?php

use App\Http\Controllers\Master\CourseController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/course',
        'as' => 'backoffice.master.course.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [CourseController::class, 'index'])->name('index');
        Route::get('fetch', [CourseController::class, 'fetch'])->name('fetch');
        Route::get('create', [CourseController::class, 'create'])->name('create');
        Route::get('{id}', [CourseController::class, 'show'])->name('show');
        Route::post('store', [CourseController::class, 'store'])->name('store');
        Route::put('{id}', [CourseController::class, 'update'])->name('update');
        Route::delete('{id}', [CourseController::class, 'destroy'])->name('destroy');
    }
);