<?php

use App\Http\Controllers\Master\ModuleController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/module',
        'as' => 'backoffice.master.module.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [ModuleController::class, 'index'])->name('index');
        Route::get('fetch', [ModuleController::class, 'fetch'])->name('fetch');
        Route::get('create', [ModuleController::class, 'create'])->name('create');
        Route::get('{id}', [ModuleController::class, 'show'])->name('show');
        Route::post('store', [ModuleController::class, 'store'])->name('store');
        Route::put('{id}', [ModuleController::class, 'update'])->name('update');
        Route::delete('{id}', [ModuleController::class, 'destroy'])->name('destroy');
    }
);