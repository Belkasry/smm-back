<?php

use App\Models\AnalyseEnv;
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
        Schema::create('analyse_envs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('service_id')->nullable()->unsigned();
            $table->foreign('service_id')->references('id')->on('services');
            $table->bigInteger('activite_id')->nullable()->unsigned();
            $table->foreign('activite_id')->references('id')->on('activites');
            $table->bigInteger('zone_id')->nullable()->unsigned();
            $table->foreign('zone_id')->references('id')->on('zones');
            $table->bigInteger('poste_travail_id')->nullable()->unsigned();
            $table->foreign('poste_travail_id')->references('id')->on('poste_travails');
            $table->bigInteger('aspect_id')->nullable()->unsigned();
            $table->foreign('aspect_id')->references('id')->on('aspects');
            $table->bigInteger('impact_id')->nullable()->unsigned();
            $table->foreign('impact_id')->references('id')->on('impacts');
            $table->bigInteger('theme_id')->nullable()->unsigned();
            $table->foreign('theme_id')->references('id')->on('themes');
            $table->bigInteger('situation_id')->nullable()->unsigned();
            $table->foreign('situation_id')->references('id')->on('situations');

            $table->unsignedBigInteger('frequence_id')->nullable();
            $table->unsignedBigInteger('gravite_etendu_id')->nullable();
            $table->unsignedBigInteger('gravite_dangerosite_id')->nullable();
            $table->unsignedBigInteger('gravite_persistance_id')->nullable();
            $table->foreign('frequence_id')
                ->references('id')->on('frequences');
            $table->foreign('gravite_etendu_id')
                ->references('id')->on('gravite_etendus');
            $table->foreign('gravite_dangerosite_id')
                ->references('id')->on('gravite_dangerosites');
            $table->foreign('gravite_persistance_id')
                ->references('id')->on('gravite_persistances');


            $table->unsignedBigInteger('frequence_ir_id')->nullable();
            $table->unsignedBigInteger('gravite_etendu_ir_id')->nullable();
            $table->unsignedBigInteger('gravite_dangerosite_ir_id')->nullable();
            $table->unsignedBigInteger('gravite_persistance_ir_id')->nullable();

            $table->foreign('frequence_ir_id')
                ->references('id')->on('frequences');
            $table->foreign('gravite_etendu_ir_id')
                ->references('id')->on('gravite_etendus');
            $table->foreign('gravite_dangerosite_ir_id')
                ->references('id')->on('gravite_dangerosites');
            $table->foreign('gravite_persistance_ir_id')
                ->references('id')->on('gravite_persistances');

            $table->boolean("s_ns")->nullable();

            $table->unsignedBigInteger('niveau_maitrise_id')->nullable();
            $table->foreign('niveau_maitrise_id')
                ->references('id')->on('niveau_maitrises');

//            $table->float('frequence_ir');
            $table->float('impact_residuel')->nullable();
            $table->bigInteger('niveau_priorite_id')->nullable()->unsigned();
            $table->foreign('niveau_priorite_id')->references('id')->on('niveau_priorites');


            $table->date('delai');
            $table->softDeletes();
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
        Schema::dropIfExists('analyse_envs');
    }
};
