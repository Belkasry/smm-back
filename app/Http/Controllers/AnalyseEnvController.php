<?php

namespace App\Http\Controllers;

use App\Models\AnalyseEnv;
use App\Models\NiveauMaitrise;
use App\Models\NiveauPriorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnalyseEnvController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {

        return AnalyseEnv::all()->pluck("niveau_priorite_id", "id");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return AnalyseEnv::with([
//            "responsables",
            "moyenMaitriseTechniques",
            "niveauPriorite",
            "zone",
            "posteTravail",
            "moyenMaitriseHumains",
            "theme",
            "frequence",
            "frequence_ir",
            "niveauMaitrise",
            "processus",
            "service",
            "aspect",
            "moyenMaitriseOrganisations",
            "planActions",
            "activite",
            "situation",
            "gravite_dangerosite",
            "gravite_persistance",
            "gravite_etendu",
            "gravite_dangerosite_ir",
            "gravite_persistance_ir",
            "gravite_etendu_ir",
            "impact"])->get();
    }

    public function store(Request $request)
    {


        // If the validation succeeds, create a new AnalyseEnv instance with the validated data
        $analyseEnv = new AnalyseEnv();
        $analyseEnv->processus_id = $request->input('processus_id');
        $analyseEnv->service_id = $request->input('service_id');
        $analyseEnv->activite_id = $request->input('activite_id');
        $analyseEnv->zone_id = $request->input('zone_id');
        $analyseEnv->poste_travail_id = $request->input('poste_travail_id');
        $analyseEnv->aspect_id = $request->input('aspect_id');
        $analyseEnv->impact_id = $request->input('impact_id');
        $analyseEnv->theme_id = $request->input('theme_id');
        $analyseEnv->situation_id = $request->input('situation_id');
        $analyseEnv->frequence_id = $request->input('frequence_id');
        $analyseEnv->gravite_etendu_id = $request->input('gravite_etendu_id');
        $analyseEnv->gravite_dangerosite_id = $request->input('gravite_dangerosite_id');
        $analyseEnv->gravite_persistance_id = $request->input('gravite_persistance_id');
        $analyseEnv->frequence_ir_id = $request->input('frequence_ir_id');
        $analyseEnv->gravite_etendu_ir_id = $request->input('gravite_etendu_ir_id');
        $analyseEnv->gravite_dangerosite_ir_id = $request->input('gravite_dangerosite_ir_id');
        $analyseEnv->gravite_persistance_ir_id = $request->input('gravite_persistance_ir_id');
        $analyseEnv->niveau_maitrise_id = $request->input('niveau_maitrise_id');
        $analyseEnv->delai = $request->input('delai');

        // Save the new AnalyseEnv instance to the database
        $analyseEnv->save();

        if ($request->has('moyen_maitrise_techniques')) {
            $moyen_maitrise_techniques_ids = $request->input('moyen_maitrise_techniques');
            $analyseEnv->moyenMaitriseTechniques()->attach($moyen_maitrise_techniques_ids);

        }

        if ($request->has('moyen_maitrise_organisations')) {
            $moyen_ids = $request->input('moyen_maitrise_organisations');
            $analyseEnv->moyenMaitriseOrganisations()->attach($moyen_ids);
        }

        if ($request->has('moyen_maitrise_humains')) {
            $moyen_ids = $request->input('moyen_maitrise_humains');
            $analyseEnv->moyenMaitriseHumains()->attach($moyen_ids);
        }
        // Return a response indicating that the new AnalyseEnv instance was successfully created
        return response()->json(['analyse' => $analyseEnv, 'message' => 'AnalyseEnv instance created successfully'], 201);
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $analyse = AnalyseEnv::with([
//            "responsables",
            "moyenMaitriseTechniques",
            "niveauPriorite",
            "zone",
            "posteTravail",
            "frequence",
            "gravite_etendu",
            "gravite_persistance",
            "gravite_dangerosite",
            "frequence_ir",
            "gravite_etendu_ir",
            "gravite_persistance_ir",
            "gravite_dangerosite_ir",
            "moyenMaitriseHumains",
            "theme",
            "niveauMaitrise",
            "processus",
            "service",
            "aspect",
            "moyenMaitriseOrganisations",
            "planActions",
            "activite",
            "situation",
            "impact"])->findOrFail($id);
        return response()->json($analyse, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\AnalyseEnv $analyseEnv
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request, $id)
    {
        $analyseEnv = AnalyseEnv::findOrFail($id);



        $analyseEnv->fill($request->only([
            'processus_id',
            'service_id',
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
            'niveau_maitrise_id',
            'delai',
        ]));

        $analyseEnv->save();

        if ($request->has('moyen_maitrise_techniques')) {
            $moyen_maitrise_techniques_ids = $request->input('moyen_maitrise_techniques');
            $analyseEnv->moyenMaitriseTechniques()->sync($moyen_maitrise_techniques_ids);
        }

        if ($request->has('moyen_maitrise_organisations')) {
            $moyen_ids = $request->input('moyen_maitrise_organisations');
            $analyseEnv->moyenMaitriseOrganisations()->sync($moyen_ids);
        }

        if ($request->has('moyen_maitrise_humains')) {
            $moyen_ids = $request->input('moyen_maitrise_humains');
            $analyseEnv->moyenMaitriseHumains()->sync($moyen_ids);
        }

        return response()->json(['message' => 'AnalyseEnv instance updated successfully']);
        //
    }


    public function destroy($id)
    {
        $analyseEnv = AnalyseEnv::find($id);

        if ($analyseEnv) {
            $analyseEnv->delete();
            return response()->json(['message' => 'AnalyseEnv has been soft-deleted.']);
        } else {
            return response()->json(['message' => 'AnalyseEnv not found.'], 404);
        }
    }


    function analyse_par_niveau_priorite()
    {
        $analyseCounts = AnalyseEnv::query()
            ->selectRaw('niveau_priorite_id, count(*) as count')
            ->groupBy('niveau_priorite_id')
            ->pluck('count', 'niveau_priorite_id')
            ->toArray();

        $priorites = NiveauPriorite::all()->toArray();

        $result = [];

        foreach ($priorites as $priorite) {
            $result[] = [
                'icon' => $priorite['name'] == "P1" ? 'skull-scan' : ($priorite['name'] == "P2" ? 'alert' : 'exclamation-thick'),
                'title' => $priorite['name'],
                'description' => $priorite['ies'],
                'stats' => $analyseCounts[$priorite['id']] ?? 0,
                'color' => $priorite['name'] == "P1" ? 'red' : ($priorite['name'] == "P2" ? 'warning' : 'info'),
            ];
        }

        return $result;
    }

    function analyse_par_s_ns()
    {
        $analyseCounts = AnalyseEnv::query()
            ->selectRaw('s_ns, count(*) as count')
            ->groupBy('s_ns')
            ->pluck('count', 's_ns')
            ->toArray();

        $result = [];

        $result[] = [
            'title' => 'S',
            'description' => 'Significatif',
            'stats' => $analyseCounts[1] ?? 0,
            'color' => 'danger',
            'icon' => 'alert'
        ];

        $result[] = [
            'title' => 'NS',
            'description' => 'Non Significatif',
            'stats' => $analyseCounts[0] ?? 0,
            'color' => 'blue',
            'icon' => 'equal'
        ];

        return $result;
    }

    function analyse_par_niveau_maitrise()
    {
        $analyseCounts = AnalyseEnv::query()
            ->selectRaw('niveau_maitrise_id, count(*) as count')
            ->groupBy('niveau_maitrise_id')
            ->pluck('count', 'niveau_maitrise_id')
            ->toArray();

        $result = [];

        $niveauxMaitrise = NiveauMaitrise::all();

        foreach ($niveauxMaitrise as $niveauMaitrise) {
            $result[] = [
                'title' => 'OTH présents',
                'description' => $niveauMaitrise->name,
                'stats' => $analyseCounts[$niveauMaitrise->id] ?? 0,
                'color' => 'blue',
            ];
        }

        return $result;
    }

}
