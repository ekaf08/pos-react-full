<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;

/**
 * ================================
 * ROUTE PUBLIC (TIDAK PERLU LOGIN)
 * ================================
 */
Route::post('/login', [AuthController::class, 'login']);

/**
 * ================================
 * ROUTE YANG BUTUH LOGIN
 * ================================
 * auth:sanctum → hanya bisa diakses
 * jika token dikirim di header
 */
Route::middleware('auth:sanctum')->group(function () {

    // Logout user
    Route::post('/logout', [AuthController::class, 'logout']);

    // API kategori
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/categories', [CategoryController::class, 'store']);

    // Api Produk
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
});
