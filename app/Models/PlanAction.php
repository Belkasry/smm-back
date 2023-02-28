<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class PlanAction extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'analyse_env_id',
        'description',
        'progress',
        'delai',
        'ordre_priorite',
        'status',
        'notes',
        'documents',
        'cout'
    ];
    public function analyseEnv()
    {
        return $this->belongsTo(AnalyseEnv::class);
    }
    public function responsables()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
