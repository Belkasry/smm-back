<?php

namespace Database\Seeders;

use App\Models\GravitePersistance;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GravitePersistanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gravites = [
            [
                'value' => 1,
                'description'=>'Moyenne de 2 ans'
            ],
            [
                'value' => 2,
                'description'=>'2 a 5 ans'
            ],
            [
                'value' => 3,
                'description'=>'Plus de  5 ans et cumulatif'
            ],

        ];

        foreach ($gravites as $gravite) {
            GravitePersistance::create($gravite);
        }
    }
}
