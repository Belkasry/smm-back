<?php

namespace App\Http\Controllers;

use App\Models\ChartData;
use App\Models\MonthValue;
use App\Models\PlanAction;
use Illuminate\Http\Request;

class ChartDataController extends Controller
{
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ChartData::with("MonthValues")->get();
    }

    public function show($id)
    {
        $chart = ChartData::with([
//            "responsables",
            "monthValues"])->findOrFail($id);
        return response()->json($chart, 200);
    }


    public  function create(Request $request)
    {
        // Get the current year
        $currentYear = date('Y');

        // Create a new ChartData object
        $chartData = new ChartData();
        $chartData->theme = $request->input('theme');
        $chartData->chartName = $request->input('chartName');
        $chartData->barColor = $request->input('barColor');

        // Save the ChartData object to the database
        $chartData->save();

        // Create an array of default MonthValue objects
        $defaultMonthValues = [];

        // Loop through the 12 months and create a new MonthValue object for each
        for ($month = 1; $month <= 12; $month++) {
            $defaultMonthValue = new MonthValue();
            $defaultMonthValue->month = date('M', mktime(0, 0, 0, $month, 1));
            $defaultMonthValue->value = 0;
            $defaultMonthValue->year = $currentYear;

            // Add the MonthValue object to the array
            $defaultMonthValues[] = $defaultMonthValue;
        }

        // Save the default MonthValue objects to the database
        $chartData->monthValues()->saveMany($defaultMonthValues);

        // Return the newly created ChartData object with its default MonthValue objects
        return response()->json($chartData->load('monthValues'), 201);
    }

    /**
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function fillmonth(Request $request, $id)
    {
        $chartData = ChartData::findOrFail($id);

        $monthValues = $request->all();
        $year = $monthValues[0]['year'];

        MonthValue::where('chart_data_id', $chartData->id)
            ->where('year', $year)
            ->delete();
        $monthValues = $request->all();

        foreach ($monthValues as $monthValue) {
            $monthValueModel = new MonthValue($monthValue);
            $monthValueModel->chart_data_id = $chartData->id;
            $monthValueModel->save();
        }

        return response()->json(['message' => 'Month values updated successfully.']);
    }

}
