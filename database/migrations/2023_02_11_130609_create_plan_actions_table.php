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
        Schema::create('plan_actions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('analyse_env_id');
            $table->string('name');
            $table->string('description');
            $table->integer('progress')->default(0);
            $table->date('delai')->nullable();
            $table->integer('ordre_priorite')->default(0);
            $table->text('notes')->nullable();
            $table->decimal('cout', 10, 2)->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('analyse_env_id')->references('id')->on('analyse_envs')->onDelete('cascade');
        });

        Schema::create('plan_action_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('plan_action_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('plan_action_id')->references('id')->on('plan_actions')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_actions');
    }
};
