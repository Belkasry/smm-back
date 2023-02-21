<?php

namespace Database\Seeders;

use App\Models\Situation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SituationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $situations = [
            "N","D","U"
        ];

        foreach ($situations as $situation) {
            Situation::create([
                'name' => $situation
            ]);
        }
    }
}
