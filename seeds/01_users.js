/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 1,
      user_firstname: "John",
      user_lastname: "Doe",
      user_username: "johndoe1",
      user_city: "Toronto",
      user_province: "ON",
      user_email: "john.doe@example.com",
      user_password: "password123",
      user_password_confirmation: "password123",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    },
    {
      user_id: 2,
      user_firstname: "Jane",
      user_lastname: "Smith",
      user_username: "janesmith2",
      user_city: "Vancouver",
      user_province: "BC",
      user_email: "jane.smith@example.com",
      user_password: "password456",
      user_password_confirmation: "password456",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    },
    {
      user_id: 3,
      user_firstname: "William",
      user_lastname: "Brown",
      user_username: "williambrown3",
      user_city: "Calgary",
      user_province: "AB",
      user_email: "william.brown@example.com",
      user_password: "secure789",
      user_password_confirmation: "secure789",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    },
    {
      user_id: 4,
      user_firstname: "Emily",
      user_lastname: "Taylor",
      user_username: "emilytaylor4",
      user_city: "Halifax",
      user_province: "NS",
      user_email: "emily.taylor@example.com",
      user_password: "password111",
      user_password_confirmation: "password111",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    },
    {
      user_id: 5,
      user_firstname: "Michael",
      user_lastname: "Wilson",
      user_username: "michaelwilson5",
      user_city: "Montreal",
      user_province: "QC",
      user_email: "michael.wilson@example.com",
      user_password: "pass567",
      user_password_confirmation: "pass567",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    }
  ]
  );
};
