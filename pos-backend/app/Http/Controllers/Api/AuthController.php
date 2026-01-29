<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * ================================
     * FUNGSI LOGIN
     * ================================
     * - Menerima email & password dari request
     * - Mengecek ke database apakah cocok
     * - Jika cocok → buat token Sanctum
     * - Kembalikan token ke client (React nanti)
     */
    public function login(Request $request)
    {
        // 1️⃣ Validasi input dari client
        // Kalau tidak sesuai → otomatis error 422
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        // 2️⃣ Cek apakah email & password cocok
        if (!Auth::attempt($credentials)) {
            // Jika gagal login
            return response()->json([
                'message' => 'Email atau password salah'
            ], 401);
        }

        // 3️⃣ Ambil data user yang berhasil login
        $user = $request->user();

        // 4️⃣ Buat token Sanctum
        // "pos-token" hanya nama token (bebas)
        $token = $user->createToken('pos-token')->plainTextToken;

        // 5️⃣ Kirim token & data user ke client
        return response()->json([
            'token' => $token,
            'user'  => $user
        ]);
    }

    /**
     * ================================
     * FUNGSI LOGOUT
     * ================================
     * - Menghapus token yang sedang dipakai
     * - User harus login (auth:sanctum)
     */
    public function logout(Request $request)
    {
        // 1️⃣ Hapus token yang sedang aktif
        $request->user()->currentAccessToken()->delete();

        // 2️⃣ Kirim respon ke client
        return response()->json([
            'message' => 'Logout berhasil'
        ]);
    }
}
