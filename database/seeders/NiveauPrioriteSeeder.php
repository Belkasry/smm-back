<?php

namespace Database\Seeders;

use App\Models\NiveauPriorite;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NiveauPrioriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $niveau_priorites = [


            ['name' => 'P1', 'ies' => 'IES>20', 'action' => "Des actions doivent être prises immédiatement ou planifier dans les mois suivant"],
            ['name' => 'P2', 'ies' => '10 à 20', 'action' => "Des mesures sont à planifier dans l’année en cours pour améliorer la situation environnementale liée à cet impact/Aspect"],
            ['name' => 'P3', 'ies' => '1 à 10', 'action' => "Si pertinent et économiquement acceptable, des mesures peuvent être proposées à la direction pour améliorer la situation environnementale liée à cet Aspect/impact avec une surveillance"]
        ];

        foreach ($niveau_priorites as $niveau_priorite) {
            NiveauPriorite::create($niveau_priorite);
        }
    }
}
