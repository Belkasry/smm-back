<?php

namespace Database\Seeders;

use App\Models\Responsable;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResponsableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $responsables = [
            "Achats & logistique",
            "Direction de production",
            "Direction d'exploitation",
            "Environnement",
            "Direction de l'exploitation",
            "Direction",
            "Maintenance",
            "Usine",
        ];

        foreach ($responsables as $responsable) {
            Responsable::create([
                'name' => $responsable
            ]);
        }
    }
}
