<?php

namespace App\Http\Controllers;

use App\Models\NiveauMaitrise;
use App\Models\NiveauPriorite;
use Illuminate\Http\Request;

class NiveauMaitriseController extends Controller
{
    public function index()
    {
        return NiveauMaitrise::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NiveauMaitrise  $niveauMaitrise
     * @return \Illuminate\Http\Response
     */
    public function show(NiveauMaitrise $niveauMaitrise)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NiveauMaitrise  $niveauMaitrise
     * @return \Illuminate\Http\Response
     */
    public function edit(NiveauMaitrise $niveauMaitrise)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NiveauMaitrise  $niveauMaitrise
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NiveauMaitrise $niveauMaitrise)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NiveauMaitrise  $niveauMaitrise
     * @return \Illuminate\Http\Response
     */
    public function destroy(NiveauMaitrise $niveauMaitrise)
    {
        //
    }
}
