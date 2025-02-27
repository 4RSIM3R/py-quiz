<?php

use App\Http\Controllers\BackofficeController;
use Illuminate\Support\Facades\Route;

Route::prefix('backoffice')->as('backoffice.')->middleware(['auth'])->group(function () {
    Route::get('', [BackofficeController::class, 'index'])->name('index');
});
