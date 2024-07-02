<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Lấy user admin và role admin (ví dụ)
        $user = User::where('email', 'admin@example.com')->first();
        $role = Role::where('name', 'Admin')->first();

        // Gắn role admin cho user admin
        if ($user && $role) {
            $user->roles()->attach($role);
        }

        // Cấp thêm các role và permission khác nếu cần
    }
}
