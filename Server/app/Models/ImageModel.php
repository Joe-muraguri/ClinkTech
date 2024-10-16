<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageModel extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $fillable = [
        'product_id',
        'path'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
