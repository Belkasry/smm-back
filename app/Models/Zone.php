<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zone extends Model
{
    use HasFactory;
    public function activite()
    {
        return $this->belongsTo(Activite::class, 'activite_id');
    }

}
