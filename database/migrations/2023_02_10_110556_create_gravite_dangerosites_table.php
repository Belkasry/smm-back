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
        Schema::create('gravite_dangerosites', function (Blueprint $table) {
            $table->id();
            $table->integer('value');
            $table->text('description');
            $table->unsignedBigInteger('theme_id')->nullable();
            $table->foreign('theme_id')
                ->references('id')->on('themes');
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
        Schema::dropIfExists('gravite_dangerosites');
    }
};
