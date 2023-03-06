<?php

namespace Database\Seeders;

use App\Models\Processus;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProcessusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Processus::create([
            'name' => "Processus 1",
        ]);
        //
    }
}
