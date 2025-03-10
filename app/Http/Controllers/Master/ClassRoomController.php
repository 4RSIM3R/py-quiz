<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\ClassRoomContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClassHasModuleRequest;
use App\Http\Requests\ClassHasStudentRequest;
use App\Http\Requests\ClassRoomRequest;
use App\Utils\WebResponse;
use Inertia\Inertia;

class ClassRoomController extends Controller
{

    protected ClassRoomContract $service;

    public function __construct(ClassRoomContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/class/index');
    }

    public function fetch()
    {
        $data = $this->service->all(filters: ['name'], sorts: ['name'], paginate: true);
        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/class/form');
    }

    public function store(ClassRoomRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->create($payload);
        return WebResponse::response($data, 'backoffice.master.class.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/class/detail', ["payload" => $data]);
    }

    public function update(ClassRoomRequest $request, $id)
    {
        $payload = $request->validated();
        $data = $this->service->update($id, $payload);
        return WebResponse::response($data, 'backoffice.master.class.index');
    }

    public function destroy($id)
    {
        $data = $this->service->destroy($id);
        return WebResponse::response($data, 'backoffice.master.class.index');
    }

    public function fetchStudent()
    {
        $data = $this->service->getStudent(
            filters: ['class_room_id'],
            sorts: [],
            paginate: true,
            relation: ['student']
        );
        return response()->json($data);
    }

    public function storeStudent(ClassHasStudentRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->storeStudent($payload);
        return WebResponse::response($data, 'backoffice.master.class.index');
    }

    public function fetchModule()
    {
        $data = $this->service->getModule(
            filters: ['class_room_id'],
            sorts: [],
            paginate: true,
            relation: ['module']
        );
        return response()->json($data);
    }

    public function storeModule(ClassHasModuleRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->storeModule($payload);
        return WebResponse::response($data, 'backoffice.master.class.index');
    }
}
