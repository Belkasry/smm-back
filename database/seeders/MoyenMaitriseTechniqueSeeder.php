<?php

namespace Database\Seeders;

use App\Models\MoyenMaitriseTechnique;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoyenMaitriseTechniqueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $moyens = [
            ['name' => 'Audit ES chez les transporteurs (Transco, SEB,,,,,)'],
            ['name' => 'Fiche de Non-conformité'],
            ['name' => 'Port des EPI (masque anti poussière)'],
            ['name' => 'Arrosage des pistes'],
            ['name' => 'Magasin de stockage avec normes SFI'],
            ['name' => 'Port des EPIs (Masque Anti gaz)'],
            ['name' => 'Installation d\'un centre de compostage'],
            ['name' => 'Maintenance des engins'],
            ['name' => 'Contrôle de la qualité de l\'air'],
            ['name' => 'Installation des buses pour arrosage'],
            ['name' => 'Analyseur automatique (Le ph, WAD)'],
            ['name' => 'Instrument d\'échantillonnage'],
            ['name' => 'Port des EPIs'],
            ['name' => 'Installations des buses anti poussières'],
            ['name' => 'Installation des capotages anti poussières'],
            ['name' => 'Contrôle qualité de l\'air'],
            ['name' => 'Limitation des vitesses'],
        ];

        foreach ($moyens as $moyen) {
            MoyenMaitriseTechnique::create($moyen);
        }
    }
}
