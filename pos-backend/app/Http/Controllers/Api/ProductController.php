<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * ================================
     * MENAMPILKAN SEMUA PRODUK
     * ================================
     * - Mengambil produk
     * - Sekaligus kategori (relasi)
     */
    public function index()
    {
        // with('category') = eager loading
        $products = Product::with('category')->get();

        return response()->json($products);
    }

    /**
     * ================================
     * MENYIMPAN PRODUK BARU
     * ================================
     */
    public function store(Request $request)
    {
        // Validasi data input
        $data = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string',
            'price'       => 'required|numeric',
            'stock'       => 'required|integer'
        ]);

        // Simpan produk ke database
        $product = Product::create($data);

        return response()->json([
            'message' => 'Produk berhasil ditambahkan',
            'data'    => $product
        ]);
    }

    /**
     * ================================
     * MENAMPILKAN DETAIL PRODUK
     * ================================
     */
    public function show($id)
    {
        // Cari produk berdasarkan ID
        $product = Product::with('category')->findOrFail($id);

        return response()->json($product);
    }

    /**
     * ================================
     * UPDATE PRODUK
     * ================================
     */
    public function update(Request $request, $id)
    {
        // Cari produk
        $product = Product::findOrFail($id);

        // Validasi input
        $data = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string',
            'price'       => 'required|numeric',
            'stock'       => 'required|integer'
        ]);

        // Update data
        $product->update($data);

        return response()->json([
            'message' => 'Produk berhasil diupdate',
            'data'    => $product
        ]);
    }

    /**
     * ================================
     * HAPUS PRODUK
     * ================================
     */
    public function destroy($id)
    {
        // Cari produk
        $product = Product::findOrFail($id);

        // Hapus produk
        $product->delete();

        return response()->json([
            'message' => 'Produk berhasil dihapus'
        ]);
    }
}
