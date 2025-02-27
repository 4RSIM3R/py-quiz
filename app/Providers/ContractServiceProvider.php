<?php

namespace App\Providers;

use App\Contract\AuthContract;
use App\Contract\BaseContract;
use App\Contract\Master\ClassRoomContract;
use App\Contract\Master\CourseContract;
use App\Contract\Master\ModuleContract;
use App\Contract\Master\StudentContract;
use App\Contract\Master\TeacherContract;
use App\Service\Master\ClassRoomService;
use App\Service\Master\CourseService;
use App\Service\Master\ModuleService;
use App\Service\Master\StudentService;
use App\Service\Master\TeacherService;
use App\Service\AuthService;
use App\Service\BaseService;
use Illuminate\Support\ServiceProvider;

class ContractServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        /**
         * Base Service Contract.
         */
        $this->app->bind(BaseContract::class, BaseService::class);
        $this->app->bind(AuthContract::class, AuthService::class);


        /**
         * Master
         */
        $this->app->bind(ClassRoomContract::class, ClassRoomService::class);
        $this->app->bind(CourseContract::class, CourseService::class);
        $this->app->bind(ModuleContract::class, ModuleService::class);
        $this->app->bind(StudentContract::class, StudentService::class);
        $this->app->bind(TeacherContract::class, TeacherService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
