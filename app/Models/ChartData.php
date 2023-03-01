<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChartData extends Model
{
    use HasFactory;
    use HasFactory;

    protected $fillable = [
        'theme',
        'chartName',
        'barColor',
    ]; // Set the fillable fields

    public function monthValues()
    {
        return $this->hasMany(MonthValue::class);
    }

    public $timestamps = false; // Disable timestamps
}
