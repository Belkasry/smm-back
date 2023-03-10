<?php

namespace Database\Seeders;

use App\Models\GraviteEtendu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GraviteEtenduSeeder extends Seeder
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
                'description'=>'A l’intérieur de l’entreprise'
            ],
            [
                'value' => 2,
                'description'=>'Voisinage de l’entreprise (niveau prefectoral)'
            ],
            [
                'value' => 3,
                'description'=>'Régional et national'
            ],

        ];

        foreach ($gravites as $gravite) {
            GraviteEtendu::create($gravite);
        }
    }
}
