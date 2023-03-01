<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('month_values', function (Blueprint $table) {
            $table->id();
            $table->string('month');
            $table->float('value');
            $table->float('year');
            $table->unsignedBigInteger('chart_data_id');
            $table->foreign('chart_data_id')->references('id')->on('chart_data')->onDelete('cascade');
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
        Schema::dropIfExists('month_values');
    }
};
