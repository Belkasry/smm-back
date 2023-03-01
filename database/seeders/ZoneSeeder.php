<?php

namespace Database\Seeders;

use App\Models\Activite;
use App\Models\Zone;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $zones = [
            ['id'=>1,'name' => "Zone 1.1",
                'activite_id' => Activite::first()->id],
            ['id'=>2,'name' => "Zone 1.2",
                'activite_id' => Activite::first()->id],
            ['id'=>3,'name' => "Zone 2.1",
                'activite_id' => Activite::first()->id],
        ];

        foreach ($zones as $zone) {
            Zone::create($zone);
        }
    }
}
