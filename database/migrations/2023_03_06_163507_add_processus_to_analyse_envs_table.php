<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProcessusToAnalyseEnvsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('analyse_envs', function (Blueprint $table) {
            $table->bigInteger('processus_id')->nullable()->unsigned();
            $table->foreign('processus_id')->references('id')->on('processuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('analyse_envs', function (Blueprint $table) {
            $table->dropForeign(['processus_id']);
            $table->dropColumn('processus_id');
        });
    }
}
