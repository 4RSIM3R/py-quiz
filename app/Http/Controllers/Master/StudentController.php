<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\StudentContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\StudentRequest;
use App\Utils\WebResponse;
use Inertia\Inertia;

class StudentController extends Controller
{

    protected StudentContract $service;

    public function __construct(StudentContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/student/index');
    }

    public function fetch()
    {
        $data = $this->service->all(['name', 'province.name'], ['name', 'province_id', 'created_at'], true);
        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/student/form');
    }

    public function store(StudentRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->create($payload);
        return WebResponse::response($data, 'backoffice.master.student.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/student/form', ["payload" => $data]);
    }

    public function update(StudentRequest $request, $id)
    {
        $payload = $request->validated();
        $data = $this->service->update($id, $payload);
        return WebResponse::response($data, 'backoffice.master.student.index');
    }

    public function destroy($id)
    {
        $data = $this->service->destroy($id);
        return WebResponse::response($data, 'backoffice.master.student.index');
    }
}
