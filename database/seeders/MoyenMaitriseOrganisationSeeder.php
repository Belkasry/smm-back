<?php

namespace Database\Seeders;

use App\Models\Impact;
use App\Models\MoyenMaitriseOrganisation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoyenMaitriseOrganisationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $moyens = [
            "PR Gestion des sous traitante",
            "PR Gestion qualité de l'air",
            "PR gestion des produits chimique",
            "Autorisation de travailleur au magasin",
            "Mode opératoire",
            "Audit ES chez Acti Forage",
            "Fiche de Non-conformité",
            "PR Qualité de l'air",
            "Audit ES chez Aggriko",
            "PR Gestion des produits chimique",
            "Autorisation de travailleur au CIL",
            "Détoxification du CN",
            "Instruction sur le mode opératoire",
            "Contrôle quotidien des échantillons au laboratoire chimique SMM",
            "Plan de circulation de l'usine"
        ];

        foreach ($moyens as $moyen) {
            MoyenMaitriseOrganisation::create([
                'name' => $moyen
            ]);
        }
    }
}
