<?php

namespace Database\Seeders;

use App\Models\Frequence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FrequenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $frequences = [
            [
                'value' => 1,
                'description'=>'Chaque semestre'
            ],
            [
                'value' => 2,
                'description'=>'Chaque mois'
            ],
            [
                'value' => 3,
                'description'=>'Chaque semaine'
            ],
            [
                'value' => 4,
                'description'=>'Chaque jour'
            ],

        ];

        foreach ($frequences as $frequence) {
            Frequence::create($frequence);
        }
    }
}
