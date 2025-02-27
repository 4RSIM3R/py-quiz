<?php

namespace App\Http\Controllers;

use App\Contract\AuthContract;
use App\Http\Requests\LoginRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{

    protected AuthContract $service;

    public function __construct(AuthContract $service)
    {
        $this->service = $service;
    }

    public function login()
    {
        if (Auth::guard()->check()) return redirect(route('backoffice.index'));
        return Inertia::render('auth/login');
    }

    public function store(LoginRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->login($payload);
        return WebResponse::response($result, 'backoffice.index');
    }

    public function logout()
    {
        $result = $this->service->logout();
        return WebResponse::response($result, 'auth.login');
    }
}
