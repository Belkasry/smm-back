<?php

namespace Database\Seeders;

use App\Models\NiveauMaitrise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NiveauMaitriseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $maitrises = [
            ['name' => '3 OTH présents', 'niveau' => 1],
            ['name' => '2 OTH présents', 'niveau' => 2],
            ['name' => '1 OTH présents', 'niveau' => 3],
            ['name' => 'Absence de maitrise : Aucun  des OTH n’est présents', 'niveau' => 4],
        ];

        foreach ($maitrises as $maitrise) {
            NiveauMaitrise::create($maitrise);
        }
    }
}
