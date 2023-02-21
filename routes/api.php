<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('analyse', [\App\Http\Controllers\AnalyseEnvController::class, 'index']);
Route::post('analyse', [\App\Http\Controllers\AnalyseEnvController::class, 'store']);
Route::get('analyse/{id}', [\App\Http\Controllers\AnalyseEnvController::class, 'show']);
Route::get('valeur-ref', [\App\Http\Controllers\ValeurReferentielController::class, 'index']);
