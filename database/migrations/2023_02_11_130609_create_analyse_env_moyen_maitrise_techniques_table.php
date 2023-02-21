<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('analyse_env_moyen_maitrise_techniques', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('analyse_env_id');
            $table->unsignedBigInteger('moyen_maitrise_technique_id');

            $table->foreign('analyse_env_id','analyse_maitrise_technique')->references('id')->on('analyse_envs');
            $table->foreign('moyen_maitrise_technique_id','analyse_maitrise_technique_2')->references('id')->on('moyen_maitrise_techniques');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('analyse_env_moyen_maitrise_techniques');
    }
};
