<?php

namespace Database\Seeders;

use App\Models\GraviteDangerosite;
use App\Models\Theme;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GraviteDangerositeSeeder extends Seeder
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
                'description' => 'Substances non dangereuses (vapeurs d’eau, poussières non dangereuse)',
                'theme_id' => Theme::where('name', 'like', '%ir%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Substances moyennement dangereuses (gaz effet de serre,…)',
                'theme_id' => Theme::where('name', 'like', '%ir%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Substances dangereuses (CFC, HCFC, toxiques, cancérogènes, COV)',
                'theme_id' => Theme::where('name', 'like', '%ir%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Sanitaires',
                'theme_id' => Theme::where('name', 'like', '%nsommation%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Sanitaires',
                'theme_id' => Theme::where('name', 'like', '%nsommation%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Process sans recyclage',
                'theme_id' => Theme::where('name', 'like', '%nsommation%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Substances non dangereuses',
                'theme_id' => Theme::where('name', 'like', '%ejet%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Substances moyennement dangereuses (qui modifient la température et le Ph)',
                'theme_id' => Theme::where('name', 'like', '%ejet%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Substances dangereuses (métaux lourds…)',
                'theme_id' => Theme::where('name', 'like', '%ejet%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Substances non dangereuses pour l’environnement (Pas d’impact)',
                'theme_id' => Theme::where('name', 'like', '%ol%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Substances moyennement dangereuses (ayant un impact sur l’environnement et n’est pas soumis à la règlementation)',
                'theme_id' => Theme::where('name', 'like', '%ol%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Substances dangereuses (ayant un impact sur l’environnement et soumis à la règlementation)',
                'theme_id' => Theme::where('name', 'like', '%ol%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Niveau acceptable très inférieur aux exigences légales',
                'theme_id' => Theme::where('name', 'like', '%ruit%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Niveau supportable proches des limites tolérées',
                'theme_id' => Theme::where('name', 'like', '%ruit%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Niveau insupportable hors des limites légales entraînant des litiges juridiques',
                'theme_id' => Theme::where('name', 'like', '%ruit%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Déchet Industriel Banal Déchets ménagers',
                'theme_id' => Theme::where('name', 'like', '%chet%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Déchet avec risque de contamination (organique)',
                'theme_id' => Theme::where('name', 'like', '%chet%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Déchet Industriel Dangereux, Déchet Toxique en Quantité Dispersée, Déchet d’Equipements Electriques Electroniques',
                'theme_id' => Theme::where('name', 'like', '%chet%')->first()->id,
            ],
            [
                'value' => 1,
                'description' => 'Pas de conséquence',
                'theme_id' => Theme::where('name', 'like', '%cial%')->first()->id,
            ],
            [
                'value' => 4,
                'description' => 'Plainte individuel',
                'theme_id' => Theme::where('name', 'like', '%cial%')->first()->id,
            ],
            [
                'value' => 8,
                'description' => 'Manifestation Expropriation Déplacement ',
                'theme_id' => Theme::where('name', 'like', '%cial%')->first()->id,
            ]

        ];

        foreach ($gravites as $gravite) {
            GraviteDangerosite::create($gravite);
        }
    }
}
