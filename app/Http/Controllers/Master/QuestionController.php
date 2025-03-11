<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\QuestionContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionRequest;
use App\Utils\WebResponse;
use Inertia\Inertia;

class QuestionController extends Controller
{
    protected QuestionContract $service;

    public function __construct(QuestionContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/question/index');
    }

    public function fetch()
    {
        $data = $this->service->all(['name', 'province.name'], ['name', 'province_id', 'created_at'], true);
        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/question/form');
    }

    public function store(QuestionRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->create($payload);
        return WebResponse::response($data, 'backoffice.master.module.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/question/detail', ["payload" => $data]);
    }

    public function update($id, QuestionRequest $request)
    {
        $payload = $request->validated();
        $data = $this->service->update($id, $payload);
        return WebResponse::response($data, 'backoffice.master.module.index');
    }

    public function destroy($id)
    {
        $data = $this->service->destroy($id);
        return WebResponse::response($data, 'backoffice.master.module.index');
    }
}
