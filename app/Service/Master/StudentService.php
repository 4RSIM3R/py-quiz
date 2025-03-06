<?php

namespace App\Service\Master;

use App\Contract\Master\StudentContract;
use App\Models\Student;
use App\Models\User;
use App\Service\BaseService;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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

    public function create($payloads)
    {
        $account = [
            "email" => $payloads["email"],
            "name" => $payloads["name"],
            "password" => Hash::make($payloads["password"])
        ];

        unset($payloads["password"]);
        unset($payloads["password_confirmation"]);

        try {

            DB::beginTransaction();
            $model = $this->model->create($payloads);
            $account = User::create($account);
            $account->assignRole(['student']);

            DB::commit();

            return $model->fresh();
        } catch (Exception $e) {
            DB::rollBack();
            return $e;
        }
    }
}
