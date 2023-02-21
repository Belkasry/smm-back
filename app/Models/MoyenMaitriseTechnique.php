<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoyenMaitriseTechnique extends Model
{
    use HasFactory;
    public function analyseEnvs()
    {
        return $this->belongsToMany(AnalyseEnv::class,"analyse_env_moyen_maitrise_techniques");
    }
}
