<?php

namespace App\Http\Controllers;

use App\Models\AnalyseEnv;
use App\Models\NiveauPriorite;
use Illuminate\Http\Request;

class NiveauPrioriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return NiveauPriorite::all();
    }



}
