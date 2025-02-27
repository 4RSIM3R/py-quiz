<?php 

namespace App\Service\Master;

use App\Contract\Master\ModuleContract;
use App\Models\Module;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class ModuleService extends BaseService implements ModuleContract
{
    protected Model $model;
    protected array $relation = [];

    /**
     * Repositories constructor.
     *
     * @param Model $model
     */
    public function __construct(Module $model)
    {
        $this->model = $model;
    }
}