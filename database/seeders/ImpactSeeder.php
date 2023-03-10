<?php

namespace Database\Seeders;

use App\Models\Impact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImpactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $impacts = [

            "Pollution de l'air",
            "Pollution sonore",
        ];

        foreach ($impacts as $impact) {
            Impact::create([
                'name' => $impact
            ]);
        }
    }
}
