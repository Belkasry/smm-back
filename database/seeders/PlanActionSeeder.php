<?php

namespace Database\Seeders;

use App\Models\PlanAction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plan_actions = [
            "Elaborer une procédure d'appel d'offre pour les fournisseurs incluant les aspects environnementaux",
            "Approuver la procédure de gestion de sous traitante",
            "Approuver les procédures de gestion de produit chimique et de qualité de l'air",
            "Construire une zone d'enfouissement et de tri",
            "Installation des équipement de contrôle de la qualité de l'air",
            "Approuver la procédure de sous traitante",
            "Approuver la procédure de la sous traitante",
            "Achat des équipements de contrôle de la qualité de l'air",
            "Information et sensibilisation de la communauté",
            "Faire un planning de contrôle et inspection du moteur",
            "Achats des équipements de suivi de qualité de l'air",
            "Pérenniser le système d'arrosage du minerai",
            "Approuver la procédure de gestion de la sous traitée",
            "Pérenniser le système de neutralisation du cyanure",
            "Mettre en place d'un système d'arrosage du minerai",
            "Faire un planning de contrôle et inspection des capotages",
            "Respecter les consignes sécuritaire (Exposition et port du masque anti gaz)",
            "Approuver la procédure de gestion de la qualité de l'air",
            "Arrosage des pistes",
            "Port les EPI"
        ];

        foreach ($plan_actions as $plan_action) {
            PlanAction::create([
                'name' => $plan_action
            ]);
        }
    }
}
