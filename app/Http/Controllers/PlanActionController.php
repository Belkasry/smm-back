<?php

namespace App\Http\Controllers;

use App\Models\AnalyseEnv;
use App\Models\PlanAction;
use Illuminate\Http\Request;

class PlanActionController extends Controller
{
    public function index()
    {
        $planActions = PlanAction::with("analyseEnv")->get();
        return response()->json($planActions);
    }

    public function actionsByAnalyse($id)
    {
        $planActions = PlanAction::where('analyse_env_id', $id)->get();
        return response()->json($planActions);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'analyse_env_id' => 'required|exists:analyse_envs,id',
            'name' => 'required|string',
            'description' => 'required|string',
            'progress' => 'nullable|integer',
            'delai' => 'nullable',
            'ordre_priorite' => 'nullable|integer',
            'notes' => 'nullable|string',
            'cout' => 'nullable|numeric',
        ]);

        $analyseEnv = AnalyseEnv::find($validatedData['analyse_env_id']);
        if (!$analyseEnv) {
            return response()->json(['error' => 'AnalyseEnv not found'], 404);
        }

        $planAction = new PlanAction();
        $planAction->name = $validatedData['name'];
        $planAction->description = $validatedData['description'];
        $planAction->progress = $validatedData['progress'] ?? 0;
        $planAction->delai = $validatedData['delai'];
        $planAction->ordre_priorite = $validatedData['ordre_priorite'] ?? 0;
        $planAction->notes = $validatedData['notes'];
        $planAction->cout = $validatedData['cout'];

        $analyseEnv->planActions()->save($planAction);
        if ($request->has('responsables')) {
            $responsables = $request->input('responsables');
            $planAction->responsables()->sync($responsables);
        }

        return response()->json(['analyse' => $planAction, 'message' => 'Action created successfully'], 201);

    }


    public function show($id)
    {
        $plan = PlanAction::with([
            "responsables",
            "analyseEnv"])->findOrFail($id);
        return response()->json($plan, 200);
    }

    public function edit(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|string',
            'description' => 'sometimes|string',
            'progress' => 'sometimes|integer',
            'delai' => 'sometimes',
        ]);



        $planAction = PlanAction::find($id);
        if (!$planAction) {
            return response()->json(['error' => 'PlanAction not found'], 404);
        }

        $planAction->name = $validatedData['name'];
        $planAction->description = $validatedData['description'];
        $planAction->progress = $validatedData['progress'] ?? 0;
        $planAction->delai = $validatedData['delai'];
        $planAction->save();

        return response()->json(['analyse' => $planAction, 'message' => 'Action updated successfully'], 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\PlanAction $planAction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlanAction $planAction)
    {
        //
    }

    public function destroy($id)
    {
        $plan = PlanAction::find($id);

        if ($plan) {
            $plan->delete();
            return response()->json(['message' => 'AnalyseEnv has been soft-deleted.']);
        } else {
            return response()->json(['message' => 'AnalyseEnv not found.'], 404);
        }
    }
}
