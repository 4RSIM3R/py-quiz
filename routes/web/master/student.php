<?php

use App\Http\Controllers\Master\StudentController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/student',
        'as' => 'backoffice.master.student.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [StudentController::class, 'index'])->name('index');
        Route::get('fetch', [StudentController::class, 'fetch'])->name('fetch');
        Route::get('create', [StudentController::class, 'create'])->name('create');
        Route::get('{id}', [StudentController::class, 'show'])->name('show');
        Route::post('store', [StudentController::class, 'store'])->name('store');
        Route::put('{id}', [StudentController::class, 'update'])->name('update');
        Route::delete('{id}', [StudentController::class, 'destroy'])->name('destroy');
    }
);