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


use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    return response()->json([
        'email' => ['The provided credentials are incorrect.'],
    ]);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users', function () {
    $users = \App\Models\User::with('service')->get();

    return response()->json($users);
});

Route::get('analyse', [\App\Http\Controllers\AnalyseEnvController::class, 'index']);
Route::post('analyse', [\App\Http\Controllers\AnalyseEnvController::class, 'store']);
Route::get('analyse/{id}', [\App\Http\Controllers\AnalyseEnvController::class, 'show']);
Route::put('analyse/{id}', [\App\Http\Controllers\AnalyseEnvController::class, 'edit']);
Route::delete('analyse/{id}', [\App\Http\Controllers\AnalyseEnvController::class, 'destroy']);


Route::get('action', [\App\Http\Controllers\PlanActionController::class, 'index']);
Route::get('analyse/{id}/action', [\App\Http\Controllers\PlanActionController::class, 'actionsByAnalyse']);
Route::post('action', [\App\Http\Controllers\PlanActionController::class, 'store']);
Route::get('action/{id}', [\App\Http\Controllers\PlanActionController::class, 'show']);
Route::put('action/{id}', [\App\Http\Controllers\PlanActionController::class, 'edit']);
Route::delete('action/{id}', [\App\Http\Controllers\PlanActionController::class, 'destroy']);


Route::get('valeur-ref', [\App\Http\Controllers\ValeurReferentielController::class, 'index']);

Route::get('chart-data/{id}', [\App\Http\Controllers\ChartDataController::class, 'show']);
Route::get('chart-data', [\App\Http\Controllers\ChartDataController::class, 'index']);
Route::post('chart-data', [\App\Http\Controllers\ChartDataController::class, 'create']);
Route::post('chart-data/{id}/month-values', [\App\Http\Controllers\ChartDataController::class, 'fillmonth']);
