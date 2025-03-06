<?php

namespace App\Contract\Master;

use App\Contract\BaseContract;

interface ClassRoomContract extends BaseContract
{
    public function getStudent($filters, $sorts, bool|null $paginate = null, array $relation = []);
    public function storeStudent($payloads);
    
    public function getModule($filters, $sorts, bool|null $paginate = null, array $relation = []);
    public function storeModule($payloads);
}
