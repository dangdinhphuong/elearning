<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'full_name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => bcrypt('password'),
            'gender' => 'Male',
            'birth_year' => 1990,
            'phone' => '123456789',
            'status' => 'Active',
            'profile' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]);
    }
}
