<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = null;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => new UserResource($this->user),
            'group' => $this->group,
            'body' => $this->body,
            'attachments' => $this->attachments,
            'created_at' => [
                'raw' => $this->created_at,
                'diff_for_humans' => $this->created_at->diffForHumans()
            ],
            'updated_at' => [
                'raw' => $this->updated_at,
                'diff_for_humans' => $this->updated_at->diffForHumans()
            ],
        ];
    }
}
