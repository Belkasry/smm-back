<?php

namespace App\Http\Controllers;

use App\Models\AnalyseEnv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnalyseEnvController extends Controller
{
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
            "gravite_persistance",
            "moyenMaitriseHumains",
            "gravite_dangerosite",
            "theme",
            "frequence",
            "niveauMaitrise",
            "service",
            "aspect",
//            "moyenMaitriseOrganisation",
            "planActions",
            "activite",
            "situation",
            "gravite_etendu",
            "impact"])->get();
    }

    public function store(Request $request)
    {
        // Define the validation rules for the request data
        $rules = [
            'service_id' => 'required',
            'activite_id' => 'required',
            'aspect_id' => 'required',
            'impact_id' => 'required',
            'theme_id' => 'required',
            'situation_id' => 'required',
            'frequence_id' => 'required',
            'gravite_etendu_id' => 'required',
            'gravite_dangerosite_id' => 'required',
            'gravite_persistance_id' => 'required',
            's_ns' => 'required|boolean',
            'niveau_maitrise_id' => 'required',
            'niveau_priorite_id' => 'required',
        ];

        // Define custom error messages for the validation rules
        $messages = [
            'required' => 'The :attribute field is required.',
            'boolean' => 'The :attribute field must be true or false.',
            'date_format' => 'The :attribute field must be in the format Y-m-d.'
        ];

        // Validate the request data using the defined rules and error messages
        $validator = Validator::make($request->all(), $rules, $messages);

        // If the validator fails, return a response indicating the incorrect or missing fields
        if ($validator->fails()) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors()
            ], 422);
        }

        // If the validation succeeds, create a new AnalyseEnv instance with the validated data
        $analyseEnv = new AnalyseEnv();
        $analyseEnv->service_id = $request->input('service_id');
        $analyseEnv->activite_id = $request->input('activite_id');
        $analyseEnv->aspect_id = $request->input('aspect_id');
        $analyseEnv->impact_id = $request->input('impact_id');
        $analyseEnv->theme_id = $request->input('theme_id');
        $analyseEnv->situation_id = $request->input('situation_id');
        $analyseEnv->frequence_id = $request->input('frequence_id');
        $analyseEnv->gravite_etendu_id = $request->input('gravite_etendu_id');
        $analyseEnv->gravite_dangerosite_id = $request->input('gravite_dangerosite_id');
        $analyseEnv->gravite_persistance_id = $request->input('gravite_persistance_id');
        $analyseEnv->s_ns = $request->input('s_ns');
        $analyseEnv->niveau_maitrise_id = $request->input('niveau_maitrise_id');
        $analyseEnv->niveau_priorite_id = $request->input('niveau_priorite_id');
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

        if ($request->has('plan_actions')) {
            $_ids = $request->input('plan_actions');
            $analyseEnv->planActions()->attach($_ids);
        }

        // Return a response indicating that the new AnalyseEnv instance was successfully created
        return response()->json(['message' => 'AnalyseEnv instance created successfully'], 201);
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\AnalyseEnv $analyseEnv
     * @return \Illuminate\Http\Response
     */
    public function show(AnalyseEnv $analyseEnv)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\AnalyseEnv $analyseEnv
     * @return \Illuminate\Http\Response
     */
    public function edit(AnalyseEnv $analyseEnv)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\AnalyseEnv $analyseEnv
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AnalyseEnv $analyseEnv)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\AnalyseEnv $analyseEnv
     * @return \Illuminate\Http\Response
     */
    public function destroy(AnalyseEnv $analyseEnv)
    {
        //
    }
}
