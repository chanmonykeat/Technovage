<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Purchase extends Model
{
    protected $guarded = [];
    public $timestamps = FALSE;
    public function customer(): BelongsTo
    {
      return $this->belongsTo(Customer::class);
    }
}
