<?php

namespace App\Http\Controllers;

use App\Models\Activite;
use App\Models\Aspect;
use App\Models\Frequence;
use App\Models\GraviteDangerosite;
use App\Models\GraviteEtendu;
use App\Models\GravitePersistance;
use App\Models\Impact;
use App\Models\MoyenMaitriseHumain;
use App\Models\MoyenMaitriseOrganisation;
use App\Models\MoyenMaitriseTechnique;
use App\Models\NiveauMaitrise;
use App\Models\NiveauPriorite;
use App\Models\PlanAction;
use App\Models\PosteTravail;
use App\Models\Processus;
use App\Models\Service;
use App\Models\Situation;
use App\Models\Theme;
use App\Models\Zone;
use Illuminate\Http\Request;

class ValeurReferentielController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processuses = Processus::all();
        $activites = Activite::all();
        $services = Service::all();
        $aspects = Aspect::all();
        $impacts = Impact::all();
        $themes = Theme::all();
        $situations = Situation::all();
        $moyen_maitrise_humains = MoyenMaitriseHumain::all();
        $moyen_maitrise_organisations = MoyenMaitriseOrganisation::all();
        $moyen_maitrise_techniques = MoyenMaitriseTechnique::all();
        $zones = Zone::all();
        $poste_travails = PosteTravail::all();
        $niveau_priorites = NiveauPriorite::all();
        $niveau_maitrises = NiveauMaitrise::all();
        $frequences = Frequence::all();
        $gravite_etendus = GraviteEtendu::all();
        $gravite_persistances = GravitePersistance::all();
        $gravite_dangerosites = GraviteDangerosite::all();
        $plan_actions = PlanAction::all();

        return [
            "processuses" => $processuses,
            "activites" => $activites,
            "services" => $services,
            "aspects" => $aspects,
            "impacts" => $impacts,
            "themes" => $themes,
            "situations" => $situations,
            "moyen_maitrise_humains" => $moyen_maitrise_humains,
            "moyen_maitrise_organisations" => $moyen_maitrise_organisations,
            "moyen_maitrise_techniques" => $moyen_maitrise_techniques,
            "niveau_priorites" => $niveau_priorites,
            "niveau_maitrises" => $niveau_maitrises,
            "zones" => $zones,
            "frequences" => $frequences,
            "gravite_etendus" => $gravite_etendus,
            "gravite_persistances" => $gravite_persistances,
            "gravite_dangerosites" => $gravite_dangerosites,
            "poste_travails" => $poste_travails,
            "plan_actions" => $plan_actions,
        ];
        //
    }
}
