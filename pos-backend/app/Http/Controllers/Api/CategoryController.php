<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * ================================
     * MENAMPILKAN SEMUA KATEGORI
     * ================================
     * - Mengambil semua data kategori dari database
     * - Mengembalikan dalam bentuk JSON
     */
    public function index()
    {
        // Ambil semua data dari tabel categories
        $categories = Category::all();

        // Kirim sebagai JSON
        return response()->json($categories);
    }

    /**
     * ================================
     * MENYIMPAN KATEGORI BARU
     * ================================
     * - Menerima data dari request
     * - Validasi
     * - Simpan ke database
     */
    public function store(Request $request)
    {
        // Validasi input
        $data = $request->validate([
            'name' => 'required|string'
        ]);

        // Generate slug dari name
        $data['slug'] = Str::slug($data['name']);

        // Simpan ke database
        $category = Category::create($data);

        // Kembalikan hasil
        return response()->json([
            'message' => 'Kategori berhasil ditambahkan',
            'data'    => $category
        ]);
    }
}
