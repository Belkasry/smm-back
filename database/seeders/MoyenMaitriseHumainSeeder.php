<?php

namespace Database\Seeders;

use App\Models\MoyenMaitriseHumain;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class MoyenMaitriseHumainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $moyens = [
            [
                'name' => 'Sensibilisation des conducteurs sur le port des EPI',
            ],
            [
                'name' => 'Formation sur le risque des produits chimiques des opérateurs de production',
            ],
            [
                'name' => 'Habilitation des conducteurs des engins de manutention',
            ],
            [
                'name' => 'Equipe EMS',
            ],
            [
                'name' => 'Sensibilisation du personnel',
            ],
            [
                'name' => 'Equipe Aggriko',
            ],
            [
                'name' => 'Formation & sensibilisation des opérateurs de production',
            ],
            [
                'name' => 'Sensibilisation des opérateurs de chargement sur le mode opératoire',
            ],
            [
                'name' => 'Sensibilisation des opérateurs sur le port des EPI',
            ],
            [
                'name' => 'Habilitations des conducteurs',
            ],
        ];

        foreach ($moyens as $moyen) {
            MoyenMaitriseHumain::create($moyen);
        }
    }
}
