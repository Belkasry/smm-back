<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AspectSeeder::class);
        $this->call(ImpactSeeder::class);
        $this->call(MoyenMaitriseHumainSeeder::class);
        $this->call(MoyenMaitriseOrganisationSeeder::class);
        $this->call(MoyenMaitriseTechniqueSeeder::class);
        $this->call(NiveauPrioriteSeeder::class);
        $this->call(NiveauMaitriseSeeder::class);
        $this->call(PlanActionSeeder::class);
        $this->call(ResponsableSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(ActiviteSeeder::class);
        $this->call(ZoneSeeder::class);
        $this->call(PosteTravailSeeder::class);
        $this->call(SituationSeeder::class);
        $this->call(ThemeSeeder::class);
        $this->call(FrequenceSeeder::class);
        $this->call(GraviteDangerositeSeeder::class);
        $this->call(GraviteEtenduSeeder::class);
        $this->call(GravitePersistanceSeeder::class);
        $this->call(GravitePersistanceSeeder::class);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
