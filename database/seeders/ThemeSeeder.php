<?php

namespace Database\Seeders;

use App\Models\Theme;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $themes = ["Sol", "Air", "Eau", "Bruit", "Déchets", "Social"];
        foreach ($themes as $theme) {
            Theme::create([
                'name' => $theme
            ]);
        }
    }
}
