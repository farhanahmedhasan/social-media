<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class ProfileImageUpdateRequest extends FormRequest
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
            'cover' => ['image', 'mimes:jpg,jpeg,png', File::image()->min('1kb')->max('10mb')],
            'avatar' => ['image', 'mimes:jpg,jpeg,png', File::image()->min('1kb')->max('5mb')]
        ];
    }
}
