<?php

namespace App\Service\Master;

use App\Contract\Master\ClassRoomContract;
use App\Models\ClassHasModule;
use App\Models\ClassHasStudent;
use App\Models\ClassRoom;
use App\Service\BaseService;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\QueryBuilder;

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

    public function getStudent($filters, $sorts, bool|null $paginate = null, array $relation = [])
    {
        try {
            $model = QueryBuilder::for(ClassHasStudent::class)
                ->allowedFilters($filters)
                ->allowedSorts($sorts)
                ->with(empty($relation) ? $this->relation : $relation)
                ->when(!is_null($this->guardForeignKey), function ($query) {
                    $query->where($this->guardForeignKey, $this->userID());
                })
                ->orderBy('id', 'asc')
                ->when(!is_null($this->guardForeignKey), function ($query) {
                    $query->paginate()->appends(request()->query());
                });

            if (is_null($paginate)) $paginate = config('service-contract.default_paginated');
            if (!$paginate) return $model->get();

            $result = $model
                ->paginate(config('service-contract.pagination_per_page'))
                ->appends(request()->query());

            return [
                'items' => $result->items(),
                'prev_page' => $result->currentPage() > 1 ? $result->currentPage() - 1 : null,
                'current_page' => $result->currentPage(),
                'next_page' => $result->hasMorePages() ? $result->currentPage() + 1 : null
            ];
        } catch (Exception $e) {
            return $e;
        }
    }

    public function storeStudent($payloads) {
        try {
            DB::beginTransaction();
            $model = ClassHasStudent::create($payloads);
            DB::commit();
            return $model->fresh();
        } catch (Exception $e) {
            DB::rollBack();
            return $e;
        }
    }

    public function getModule($filters, $sorts, bool|null $paginate = null, array $relation = [])
    {
        try {
            $model = QueryBuilder::for(ClassHasModule::class)
                ->allowedFilters($filters)
                ->allowedSorts($sorts)
                ->with(empty($relation) ? $this->relation : $relation)
                ->when(!is_null($this->guardForeignKey), function ($query) {
                    $query->where($this->guardForeignKey, $this->userID());
                })
                ->orderBy('id', 'asc')
                ->when(!is_null($this->guardForeignKey), function ($query) {
                    $query->paginate()->appends(request()->query());
                });

            if (is_null($paginate)) $paginate = config('service-contract.default_paginated');
            if (!$paginate) return $model->get();

            $result = $model
                ->paginate(config('service-contract.pagination_per_page'))
                ->appends(request()->query());

            return [
                'items' => $result->items(),
                'prev_page' => $result->currentPage() > 1 ? $result->currentPage() - 1 : null,
                'current_page' => $result->currentPage(),
                'next_page' => $result->hasMorePages() ? $result->currentPage() + 1 : null
            ];
        } catch (Exception $e) {
            return $e;
        }
    }

    public function storeModule($payloads)
    {
        try {
            DB::beginTransaction();
            $model = ClassHasModule::create($payloads);
            DB::commit();
            return $model->fresh();
        } catch (Exception $e) {
            DB::rollBack();
            return $e;
        }
    }
}
