<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class AnalyseEnv extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'processus_id', // Add service_id to the array
        'service_id', // Add service_id to the array
        'activite_id',
        'zone_id',
        'poste_travail_id',
        'aspect_id',
        'impact_id',
        'theme_id',
        'situation_id',
        'frequence_id',
        'gravite_etendu_id',
        'gravite_dangerosite_id',
        'gravite_persistance_id',
        'frequence_ir_id',
        'gravite_etendu_ir_id',
        'gravite_dangerosite_ir_id',
        'gravite_persistance_ir_id',
        's_ns',
        'niveau_maitrise_id',
        'delai',
    ];
    protected $appends = ['F_G'];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($analyse) {

            $f = $analyse->frequence_ir ? $analyse->frequence_ir->value : 0;
            $g_e = $analyse->gravite_etendu_ir ? $analyse->gravite_etendu_ir->value : 0;
            $g_d = $analyse->gravite_dangerosite_ir ? $analyse->gravite_dangerosite_ir->value : 0;
            $g_p = $analyse->gravite_persistance_ir ? $analyse->gravite_persistance_ir->value : 0;

            $impact = $f * ($g_e + $g_p + $g_d);

            if($analyse->f_g>20){
                $analyse->s_ns=1;
            }else{
                $analyse->s_ns=0;
            }

            $analyse->impact_residuel = $impact;

            if ($impact >= 0 && $impact <= 10) {
                $analyse->niveau_priorite_id = NiveauPriorite::where('name', 'P3')->first()->id;
            } elseif ($impact > 10 && $impact <= 20) {
                $analyse->niveau_priorite_id = NiveauPriorite::where('name', 'P2')->first()->id;
            } elseif ($impact > 20) {
                $analyse->niveau_priorite_id = NiveauPriorite::where('name', 'P1')->first()->id;
            }

        });
    }

    public function getFGAttribute()
    {
        if ($this->frequence && $this->gravite_etendu) {
            return $this->frequence->value *
                ($this->gravite_etendu->value
                    + $this->gravite_dangerosite->value
                    + $this->gravite_persistance->value);
        }
        return null;
    }


    public function processus()
    {
        return $this->belongsTo(Processus::class, 'processus_id');
    }

     public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function activite()
    {
        return $this->belongsTo(Activite::class, 'activite_id');
    }

    public function zone()
    {
        return $this->belongsTo(Zone::class, 'zone_id');
    }

    public function posteTravail()
    {
        return $this->belongsTo(PosteTravail::class, 'poste_travail_id');
    }

    public function getSNsAttribute($value)
    {
        return $value == 1;
    }

    public function aspect()
    {
        return $this->belongsTo(Aspect::class, 'aspect_id');
    }

    public function impact()
    {
        return $this->belongsTo(Impact::class, 'impact_id');
    }

    public function theme()
    {
        return $this->belongsTo(Theme::class, 'theme_id');
    }

    public function situation()
    {
        return $this->belongsTo(Situation::class, 'situation_id');
    }


    public function moyenMaitriseOrganisations()
    {
        return $this->belongsToMany(MoyenMaitriseOrganisation::class, "analyse_env_moyen_maitrise_organisations");
    }

    public function moyenMaitriseTechniques()
    {
        return $this->belongsToMany(MoyenMaitriseTechnique::class, "analyse_env_moyen_maitrise_techniques");
    }

    public function moyenMaitriseHumains()
    {
        return $this->belongsToMany(MoyenMaitriseHumain::class, "analyse_env_moyen_maitrise_humains");
    }

    public function niveauMaitrise()
    {
        return $this->belongsTo(NiveauMaitrise::class);
    }

    public function frequence()
    {
        return $this->belongsTo(Frequence::class);
    }

    public function gravite_etendu()
    {
        return $this->belongsTo(GraviteEtendu::class);
    }

    public function gravite_persistance()
    {
        return $this->belongsTo(GravitePersistance::class);
    }

    public function gravite_dangerosite()
    {
        return $this->belongsTo(GraviteDangerosite::class);
    }

    public function frequence_ir()
    {
        return $this->belongsTo(Frequence::class);
    }

    public function gravite_etendu_ir()
    {
        return $this->belongsTo(GraviteEtendu::class, "gravite_etendu_ir_id");
    }

    public function gravite_persistance_ir()
    {
        return $this->belongsTo(GravitePersistance::class, "gravite_persistance_ir_id");
    }

    public function gravite_dangerosite_ir()
    {
        return $this->belongsTo(GraviteDangerosite::class, "gravite_dangerosite_ir_id");
    }

    public function planActions()
    {
        return $this->hasMany(PlanAction::class);
    }

    public function niveauPriorite()
    {
        return $this->belongsTo(NiveauPriorite::class, 'niveau_priorite_id');
    }

}
