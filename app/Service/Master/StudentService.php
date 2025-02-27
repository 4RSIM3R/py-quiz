<?php 

namespace App\Service\Master;

use App\Contract\Master\StudentContract;
use App\Models\Student;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class StudentService extends BaseService implements StudentContract
{
    protected Model $model;
    protected array $relation = [];

    /**
     * Repositories constructor.
     *
     * @param Model $model
     */
    public function __construct(Student $model)
    {
        $this->model = $model;
    }
}