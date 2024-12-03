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
      user_firstname: "Sofia",
      user_lastname: "Paco",
      user_username: "sofia22",
      user_city: "Hornby Island",
      user_province: "BC",
      user_email: "paco.sofia22@gmail.com",
      user_pass: "password123",
      user_pass_confirm: "password123",
      user_img: "sofia.jpeg",
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
      user_pass: "password456",
      user_pass_confirm: "password456",
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
      user_pass: "secure789",
      user_pass_confirm: "secure789",
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
      user_pass: "password111",
      user_pass_confirm: "password111",
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
      user_pass: "pass567",
      user_pass_confirm: "pass567",
      user_img: "",
      created_at: "2024-11-25 15:00:00",
      updated_at: "2024-11-25 15:00:00"
    }
  ]
  );
};
