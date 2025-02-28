<?php 

namespace App\Service\Master;

use App\Contract\Master\CourseContract;
use App\Models\Course;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class CourseService extends BaseService implements CourseContract
{
    protected Model $model;
    protected array $relation = [];
    protected array $fileKeys = ['material']; 

    /**
     * Repositories constructor.
     *
     * @param Model $model
     */
    public function __construct(Course $model)
    {
        $this->model = $model;
    }
}