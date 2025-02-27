<?php 

namespace App\Service\Master;

use App\Contract\Master\TeacherContract;
use App\Models\Teacher;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class TeacherService extends BaseService implements TeacherContract
{
    protected Model $model;
    protected array $relation = [];

    /**
     * Repositories constructor.
     *
     * @param Model $model
     */
    public function __construct(Teacher $model)
    {
        $this->model = $model;
    }
}