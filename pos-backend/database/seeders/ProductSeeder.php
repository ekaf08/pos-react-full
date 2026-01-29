<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * ================================
     * SEEDER PRODUK
     * ================================
     * - Mengisi tabel products
     * - Produk contoh POS
     */
    public function run(): void
    {
        // Ambil ID kategori
        $makanan = Category::where('name', 'Makanan')->first();
        $minuman = Category::where('name', 'Minuman')->first();

        $products = [
            [
                'category_id' => $makanan->id,
                'name'  => 'Indomie Goreng',
                'price' => 3500,
                'stock' => 100
            ],
            [
                'category_id' => $makanan->id,
                'name'  => 'Nasi Instan',
                'price' => 5000,
                'stock' => 50
            ],
            [
                'category_id' => $minuman->id,
                'name'  => 'Teh Botol',
                'price' => 4000,
                'stock' => 80
            ]
        ];

        // Simpan produk
        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
