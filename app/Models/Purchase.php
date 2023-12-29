<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongTo;

class Purchase extends Model
{
    protected $guarded = [];
    public $timestamps = FALSE;
    public function customers(): BelongTo
    {
      return $this->belongTo(Customer::class);
    }
}
