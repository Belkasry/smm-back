<?php

namespace Database\Seeders;

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
            ['name' => "Zone 1.1",
                'activite_id' => 1],
            ['name' => "Zone 1.2",
                'activite_id' => 1],
            ['name' => "Zone 2.1",
                'activite_id' => 2],
        ];

        foreach ($zones as $zone) {
            Zone::create($zone);
        }
    }
}
