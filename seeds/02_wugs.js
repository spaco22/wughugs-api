/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('wugs').del()
  await knex('wugs').insert([
    {
      wug_id: 1,
      user_id: 1,
      wug_name: "Zuko",
      wug_species: "Brachypelma emilia",
      wug_type: "Tarantula",
      wug_common_names: "Mexican redleg tarantula",
      wug_age: "3 months",
      wug_img: "",
      created_at: "2024-11-25 15:10:00",
      updated_at: "2024-11-25 15:10:00"
    },
    {
      wug_id: 2,
      user_id: 2,
      wug_name: "Rosie",
      wug_species: "Grammostola rosea",
      wug_type: "Tarantula",
      wug_common_names: "Chilean Rose Hair, Pink Toe",
      wug_age: "2 years",
      wug_img: "",
      created_at: "2024-11-25 15:11:00",
      updated_at: "2024-11-25 15:11:00"
    },
    {
      wug_id: 3,
      user_id: 2,
      wug_name: "Hercules",
      wug_species: "Dynastes hercules",
      wug_type: "Beetle",
      wug_common_names: "Hercules Beetle, Rhinoceros Beetle",
      wug_age: "5 months",
      wug_img: "",
      created_at: "2024-11-25 15:12:00",
      updated_at: "2024-11-25 15:12:00"
    },
    {
      wug_id: 4,
      user_id: 2,
      wug_name: "Luna",
      wug_species: "Actias luna",
      wug_type: "Moth",
      wug_common_names: "Luna Moth, Green Moth",
      wug_age: "1 month",
      wug_img: "",
      created_at: "2024-11-25 15:13:00",
      updated_at: "2024-11-25 15:13:00"
    },
    {
      wug_id: 5,
      user_id: 3,
      wug_name: "Jumper",
      wug_species: "Phidippus audax",
      wug_type: "Spider",
      wug_common_names: "Bold Jumping Spider, Daring Jumping Spider",
      wug_age: "6 months",
      wug_img: "",
      created_at: "2024-11-25 15:14:00",
      updated_at: "2024-11-25 15:14:00"
    },
    {
      wug_id: 6,
      user_id: 3,
      wug_name: "Praying",
      wug_species: "Mantis religiosa",
      wug_type: "Mantis",
      wug_common_names: "European Mantis, Praying Mantis",
      wug_age: "4 months",
      wug_img: "",
      created_at: "2024-11-25 15:15:00",
      updated_at: "2024-11-25 15:15:00"
    },
    {
      wug_id: 7,
      user_id: 4,
      wug_name: "Firefly",
      wug_species: "Photinus pyralis",
      wug_type: "Beetle",
      wug_common_names: "Lightning Bug, Blinking Beetle",
      wug_age: "2 months",
      wug_img: "",
      created_at: "2024-11-25 15:16:00",
      updated_at: "2024-11-25 15:16:00"
    },
    {
      wug_id: 8,
      user_id: 4,
      wug_name: "Orb",
      wug_species: "Argiope aurantia",
      wug_type: "Spider",
      wug_common_names: "Black and Yellow Garden Spider, Writing Spider",
      wug_age: "3 months",
      wug_img: "",
      created_at: "2024-11-25 15:17:00",
      updated_at: "2024-11-25 15:17:00"
    },
    {
      wug_id: 9,
      user_id: 5,
      wug_name: "Swallowtail",
      wug_species: "Papilio machaon",
      wug_type: "Butterfly",
      wug_common_names: "Old World Swallowtail, Yellow Butterfly",
      wug_age: "1 month",
      wug_img: "",
      created_at: "2024-11-25 15:18:00",
      updated_at: "2024-11-25 15:18:00"
    },
    {
      wug_id: 10,
      user_id: 5,
      wug_name: "Scorpion",
      wug_species: "Centruroides sculpturatus",
      wug_type: "Scorpion",
      wug_common_names: "Arizona Bark Scorpion, Bark Scorpion",
      wug_age: "6 months",
      wug_img: "",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 12,
      user_id: 1,
      wug_name: "Charlie",
      wug_species: "Brachypelma ???",
      wug_type: "Tarantula",
      wug_common_names: "Mexican redknee tarantula",
      wug_age: "1 year",
      wug_img: "b-smiithi.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 13,
      user_id: 1,
      wug_name: "Charlotte",
      wug_species: "Brachypelma auratum",
      wug_type: "Tarantula",
      wug_common_names: "Mexican flame knee tarantula",
      wug_age: "1 year",
      wug_img: "b-auratum.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 14,
      user_id: 1,
      wug_name: "MANduca",
      wug_species: "Manduca quinquemaculata",
      wug_type: "moth",
      wug_common_names: "Tomatoe hornworm",
      wug_age: "3 months",
      wug_img: "manduca-hornworm.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 15,
      user_id: 1,
      wug_name: "Meal wormies",
      wug_species: "Tenebrio molitor",
      wug_type: "beetle",
      wug_common_names: "Meal hornworm, yellow mealworm beetle, darkling beetle",
      wug_age: "7 months",
      wug_img: "mealworm.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 16,
      user_id: 1,
      wug_name: "Zophobas",
      wug_species: "Zophobas atratus",
      wug_type: "beetle",
      wug_common_names: "Super worm, king worm",
      wug_age: "1 months",
      wug_img: "superworm.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    },
    {
      wug_id: 17,
      user_id: 1,
      wug_name: "Mini cheetos",
      wug_species: "Yuukianura Aphoruroides ",
      wug_type: "springtail",
      wug_common_names: "Orange springtails",
      wug_age: "3 months",
      wug_img: "springtail.jpg",
      created_at: "2024-11-25 15:19:00",
      updated_at: "2024-11-25 15:19:00"
    }
  ]);
};
