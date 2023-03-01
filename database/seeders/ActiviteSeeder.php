<?php

namespace Database\Seeders;

use App\Models\Activite;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActiviteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activites = [
            'Transport par camion (Conakry - Loila)',
            'Magasin réactif',
            'Zone d\'enfouissement et de tri',
            'Forage',
            'Labo Mécanique (Four)',
            'Ouverture d\'accès',
            'Fusion & copulation',
            'Décapage de la terre végétale',
            'Excavation et chargement',
            'Foration et tir',
            'Rom pad',
            'Transport du minerai',
            'Camp Loila',
            'Restauration',
            'Transport personnel',
            'Broyage',
            'Centrale Electrique',
            'CIL',
            'Concassage',
            'Concassage  (Stock pile)',
            'Concassage (Convoyeur)',
            'Détox',
            'Élution',
            'Incinérateur',
            'Circulation des engin',
        ];


        foreach ($activites as $activite) {
            Activite::create([
                'name' => $activite ,
                'service_id'=> Service::first()->id
            ]);
        }
    }
}
