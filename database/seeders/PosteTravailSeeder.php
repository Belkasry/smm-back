<?php

namespace Database\Seeders;

use App\Models\PosteTravail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PosteTravailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $poste_travails = [
            ['name' => "Poste_travail 1.1",
                'zone_id' => 1],
            ['name' => "Poste_travail 1.2",
                'zone_id' => 1],
            ['name' => "Poste_travail 1.3",
                'zone_id' => 1],
        ];

        foreach ($poste_travails as $poste_travail) {
            PosteTravail::create($poste_travail);
        }
    }
}
