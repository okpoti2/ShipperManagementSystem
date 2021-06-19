<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consignment extends Model
{
    use HasFactory;

     /**
     * Get the shipper associated with the consignment.
     */
    public function shipper()
    {
        return $this->hasOne(Shipper::class);
    }

     /**
     * Get the line associated with the consignment.
     */
    public function line()
    {
        return $this->hasOne(Line::class);
    }

     /**
     * Get the vessel associated with the consignment.
     */
    public function vessel()
    {
        return $this->hasOne(Vessel::class);
    }
}
