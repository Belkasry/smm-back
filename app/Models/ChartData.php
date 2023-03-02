<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChartData extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'theme',
        'chartName',
        'barColor',
    ];

    public function monthValues()
    {
        return $this->hasMany(MonthValue::class);
    }

}
