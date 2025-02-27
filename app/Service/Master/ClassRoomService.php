<?php

namespace App\Service\Master;

use App\Contract\Master\ClassRoomContract;
use App\Models\ClassRoom;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class ClassRoomService extends BaseService implements ClassRoomContract
{
    protected Model $model;
    protected array $relation = [];

    /**
     * Repositories constructor.
     *
     * @param Model $model
     */
    public function __construct(ClassRoom $model)
    {
        $this->model = $model;
    }
}
