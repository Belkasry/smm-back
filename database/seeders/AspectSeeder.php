<?php

namespace Database\Seeders;

use App\Models\Aspect;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AspectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $aspects = [
            "Emanation des poussière & fumé des camion",
            "Rejet dans l'air",
            "Emission de la fumé",
            "Emanation des poussière & fumé des engins",
            "Emission de la chaleur",
            "Emanation des poussière",
            "Emission de la fumé du moteur",
            "Emission de la fumé du restaurant",
            "Emanation de poussière",
            "Émission des gaz HCN",
            "Émission des gaz nocif",
            "Emission de la fumé",
            "Emanation de poussière",
        ];

        foreach ($aspects as $aspect) {
            Aspect::create([
                'name' => $aspect
            ]);
        }

    }
}




