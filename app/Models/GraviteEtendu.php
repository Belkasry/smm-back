<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GraviteEtendu extends Model
{
    use HasFactory;
    public function analyseEnvs()
    {
        return $this->hasMany(AnalyseEnv::class);
    }
}
