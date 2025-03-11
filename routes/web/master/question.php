<?php

use App\Http\Controllers\Master\QuestionController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix' => 'backoffice/master/question',
        'as' => 'backoffice.master.question.',
        'middleware' => ['auth']
    ],
    function () {
        Route::get('', [QuestionController::class, 'index'])->name('index');
        Route::get('fetch', [QuestionController::class, 'fetch'])->name('fetch');
        Route::get('create', [QuestionController::class, 'create'])->name('create');
        Route::get('{id}', [QuestionController::class, 'show'])->name('show');
        Route::post('store', [QuestionController::class, 'store'])->name('store');
        Route::put('{id}', [QuestionController::class, 'update'])->name('update');
        Route::delete('{id}', [QuestionController::class, 'destroy'])->name('destroy');
    }
);