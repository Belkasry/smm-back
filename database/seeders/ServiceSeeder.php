<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = [
            'Achat & Logistique',
            'Approvisionnement',
            'Environnement & Sociétal',
            'Exploration',
            'Géologie minière',
            'Labo Chimique',
            'Mine',
            'Service généraux',
            'Usine',
        ];
        $i = 1;
        foreach ($services as $service) {
            Service::create([
                'id' => $i++,
                'name' => $service,
            ]);
        }
    }

}
