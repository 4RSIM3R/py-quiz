<?php

use App\Http\Controllers\Master\ClassRoomController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/class',
        'as' => 'backoffice.master.class.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [ClassRoomController::class, 'index'])->name('index');
        Route::get('fetch', [ClassRoomController::class, 'fetch'])->name('fetch');
        Route::get('create', [ClassRoomController::class, 'create'])->name('create');
        Route::get('{id}/student', [ClassRoomController::class, 'fetchStudent'])->name('student');
        Route::get('{id}/module', [ClassRoomController::class, 'fetchModule'])->name('module');
        Route::get('{id}', [ClassRoomController::class, 'show'])->name('show');
        Route::post('store', [ClassRoomController::class, 'store'])->name('store');
        Route::put('{id}/student', [ClassRoomController::class, 'storeStudent'])->name('student');
        Route::put('{id}/module', [ClassRoomController::class, 'storeModule'])->name('module');
        Route::put('{id}', [ClassRoomController::class, 'update'])->name('update');
        Route::delete('{id}', [ClassRoomController::class, 'destroy'])->name('destroy');
    }
);
