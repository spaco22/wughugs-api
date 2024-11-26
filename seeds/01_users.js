/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      user_name: "John Doe",
      user_location: "Ontario",
      user_email: "john.doe@example.com",
      user_password: "password123",
      user_password_confirmation: "password123",
      created_at: "2024-11-25T15:00:00Z",
      updated_at: "2024-11-25T15:00:00Z"
    },
    {
      id: 2,
      user_name: "Jane Smith", 
      user_location: "Quebec",
      user_email: "jane.smith@example.com",
      user_password: "securepass456",
      user_password_confirmation: "securepass456", 
      created_at: "2024-11-25T15:01:00Z",
      updated_at: "2024-11-25T15:01:00Z"
    },
    {
      id: 3,
      user_name: "Robert Brown",
      user_location: "British Columbia", 
      user_email: "robert.brown@example.com",
      user_password: "mypassword789",
      user_password_confirmation: "mypassword789",
      created_at: "2024-11-25T15:02:00Z", 
      updated_at: "2024-11-25T15:02:00Z"
    },
    {
      id: 4,
      user_name: "Emily Davis",
      user_location: "Alberta",
      user_email: "emily.davis@example.com", 
      user_password: "password321",
      user_password_confirmation: "password321",
      created_at: "2024-11-25T15:03:00Z",
      updated_at: "2024-11-25T15:03:00Z"
    },
    {
      id: 5,
      user_name: "Michael Wilson",
      user_location: "Manitoba",
      user_email: "michael.wilson@example.com",
      user_password: "pass456word", 
      user_password_confirmation: "pass456word",
      created_at: "2024-11-25T15:04:00Z",
      updated_at: "2024-11-25T15:04:00Z"
    },
    {
      id: 6,
      user_name: "Sarah Johnson",
      user_location: "Saskatchewan", 
      user_email: "sarah.johnson@example.com",
      user_password: "!password!",
      user_password_confirmation: "!password!",
      created_at: "2024-11-25T15:05:00Z",
      updated_at: "2024-11-25T15:05:00Z"
    },
    {
      id: 7,
      user_name: "David Thompson",
      user_location: "Nova Scotia",
      user_email: "david.thompson@example.com",
      user_password: "oceanview123",
      user_password_confirmation: "oceanview123",
      created_at: "2024-11-25T15:06:00Z",
      updated_at: "2024-11-25T15:06:00Z"
    },
    {
      id: 8,
      user_name: "Emma Martin",
      user_location: "New Brunswick",
      user_email: "emma.martin@example.com", 
      user_password: "maritime456",
      user_password_confirmation: "maritime456",
      created_at: "2024-11-25T15:07:00Z",
      updated_at: "2024-11-25T15:07:00Z"
    },
    {
      id: 9,
      user_name: "Ryan Campbell",
      user_location: "Prince Edward Island",
      user_email: "ryan.campbell@example.com",
      user_password: "pei789!",
      user_password_confirmation: "pei789!",
      created_at: "2024-11-25T15:08:00Z",
      updated_at: "2024-11-25T15:08:00Z"
    },
    {
      id: 10,
      user_name: "Laura Wilson",
      user_location: "Newfoundland and Labrador",
      user_email: "laura.wilson@example.com",
      user_password: "eastcoast321",
      user_password_confirmation: "eastcoast321",
      created_at: "2024-11-25T15:09:00Z",
      updated_at: "2024-11-25T15:09:00Z"
    }
  ]);
};
