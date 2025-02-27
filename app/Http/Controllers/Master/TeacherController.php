<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\TeacherContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\TeacherRequest;
use App\Utils\WebResponse;
use Inertia\Inertia;

class TeacherController extends Controller
{

    protected TeacherContract $service;

    public function __construct(TeacherContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/teacher/index');
    }

    public function fetch()
    {
        $data = $this->service->all(['name', 'province.name'], ['name', 'province_id', 'created_at'], true);
        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/teacher/form');
    }

    public function store(TeacherRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->create($payload);
        return WebResponse::response($data, 'backoffice.master.teacher.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/teacher/form', ["payload" => $data]);
    }

    public function update(TeacherRequest $request, $id)
    {
        $payload = $request->validated();
        $data = $this->service->update($id, $payload);
        return WebResponse::response($data, 'backoffice.master.teacher.index');
    }

    public function destroy($id)
    {
        $data = $this->service->destroy($id);
        return WebResponse::response($data, 'backoffice.master.teacher.index');
    }
}
