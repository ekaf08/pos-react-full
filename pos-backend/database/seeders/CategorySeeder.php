<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * ================================
     * SEEDER KATEGORI
     * ================================
     * - Mengisi tabel categories
     * - Data dummy untuk testing
     */
    public function run(): void
    {
        $categories = [
            // 'Makanan',
            'Minuman',
            'Snack',
            'Sembako'
        ];

        // Loop & simpan ke database
        foreach ($categories as $name) {
            Category::create([
                'name' => $name,
                'slug' => Str::slug($name)
            ]);
        }
    }
}
