<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'min:4', 'max:255', 'regex:/^[a-zA-Z\s]*$/'],
            'username' => ['string', 'min:4', 'max:255', 'regex:/^[a-zA-Z0-9\-\.]+$/i', Rule::unique(User::class)->ignore($this->user()->id)],
            'email' => ['string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }

    public function messages(): array
    {
        return [
            'name.regex' => 'Name can only contain letters',
            'username.regex' => 'Username can only contain alphanumeric characters, dash(-) and dot(.)'
        ];
    }
}
