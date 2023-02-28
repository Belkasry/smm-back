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
            "zone",
            "posteTravail",
            "moyenMaitriseHumains",
            "theme",
            "frequence",
            "frequence_ir",
            "niveauMaitrise",
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
            'frequence_ir_id' => 'required',
            'gravite_etendu_ir_id' => 'required',
            'gravite_dangerosite_ir_id' => 'required',
            'gravite_persistance_ir_id' => 'required',
            's_ns' => 'required|boolean',
            'niveau_maitrise_id' => 'required',
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
        $analyseEnv->s_ns = $request->input('s_ns');
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

        $rules = [
            'service_id' => 'sometimes|required',
            'activite_id' => 'sometimes|required',
            'aspect_id' => 'sometimes|required',
            'impact_id' => 'sometimes|required',
            'theme_id' => 'sometimes|required',
            'situation_id' => 'sometimes|required',
            'frequence_id' => 'sometimes|required',
            'gravite_etendu_id' => 'sometimes|required',
            'gravite_dangerosite_id' => 'sometimes|required',
            'gravite_persistance_id' => 'sometimes|required',
            'frequence_ir_id' => 'sometimes|required',
            'gravite_etendu_ir_id' => 'sometimes|required',
            'gravite_dangerosite_ir_id' => 'sometimes|required',
            'gravite_persistance_ir_id' => 'sometimes|required',
            's_ns' => 'sometimes|required|boolean',
            'niveau_maitrise_id' => 'sometimes|required',
        ];

        $messages = [
            'required' => 'The :attribute field is required.',
            'boolean' => 'The :attribute field must be true or false.',
            'date_format' => 'The :attribute field must be in the format Y-m-d.'
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors()
            ], 422);
        }

        $analyseEnv->fill($request->only([
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
            's_ns',
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
}
