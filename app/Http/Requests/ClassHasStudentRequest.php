<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClassHasStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'class_room_id' => ['required', 'integer', 'exists:class_rooms,id'],
            'student_id' => ['required', 'integer', 'exists:students,id'],
        ];
    }
}
