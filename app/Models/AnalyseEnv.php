<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyseEnv extends Model
{
    use HasFactory;


    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function activite()
    {
        return $this->belongsTo(Activite::class, 'activite_id');
    }
    public function getSNsAttribute($value)
    {
        return $value==1;
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
        return $this->belongsToMany(MoyenMaitriseOrganisation::class,"analyse_env_moyen_maitrise_organisations");
    }

    public function moyenMaitriseTechniques()
    {
        return $this->belongsToMany(MoyenMaitriseTechnique::class,"analyse_env_moyen_maitrise_techniques");
    }

    public function moyenMaitriseHumains()
    {
        return $this->belongsToMany(MoyenMaitriseHumain::class,"analyse_env_moyen_maitrise_humains");
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

    public function planActions()
    {
        return $this->belongsToMany(PlanAction::class,'analyse_env_plan_actions');
    }

    public function niveauPriorite()
    {
        return $this->belongsTo(NiveauPriorite::class, 'niveau_priorite_id');
    }

    public function responsables()
    {
        return $this->belongsToMany(Responsable::class);
    }
}
