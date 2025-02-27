<?php

namespace App\Contract;

interface BaseContract
{
    public function all($filters, $sorts, bool|null $paginate = null, array $relation = []);
    public function find($id, array $relation = []);
    public function create($payloads);
    public function update($id, $payloads);
    public function destroy($id);
    public function getWithCondition($conditions, $filters, $sorts, bool|null $paginate = null, $relation = []);
    public function updateWithCondition($conditions, $payloads);
}
