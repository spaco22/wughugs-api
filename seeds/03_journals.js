/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('journals').del();
    await knex('journals').insert([
      {
        journal_id: 1,
        wug_id: 1,
        user_id: 1,
        title: "Zuko's First Meal",
        text: "Zuko finally ate his first cricket in his new home! It was such a relief to see him settling in.",
        date_created: "2024-11-01 08:30:00",
        img: "zuko-eating.jpg"
      },
      {
        journal_id: 2,
        wug_id: 1,
        user_id: 1,
        title: "Exploring His Terrarium",
        text: "Zuko spent the day exploring every corner of his terrarium. He seems to enjoy the moss I added!",
        date_created: "2024-11-02 10:00:00",
        img: "zuko-exploring.jpg"
      },
      {
        journal_id: 3,
        wug_id: 12,
        user_id: 1,
        title: "Charlie’s New Hideout",
        text: "Charlie found a new hiding spot today under the bark. It’s his favorite place now!",
        date_created: "2024-12-01 15:20:00",
        img: "charlie-hideout.jpg"
      },
      {
        journal_id: 4,
        wug_id: 12,
        user_id: 1,
        title: "Feeding Day Success",
        text: "Charlie successfully ate a mealworm today. He’s growing so quickly!",
        date_created: "2024-12-03 12:45:00",
        img: "charlie-feeding.jpg"
      },
      {
        journal_id: 5,
        wug_id: 13,
        user_id: 1,
        title: "Charlotte’s Web",
        text: "Charlotte started spinning her first web in the corner of her terrarium. It’s beautiful!",
        date_created: "2024-12-02 09:00:00",
        img: "charlotte-web.jpg"
      },
      {
        journal_id: 6,
        wug_id: 13,
        user_id: 1,
        title: "Cleaning Her Web",
        text: "Charlotte was busy cleaning her web today. It’s fascinating to watch her work so carefully.",
        date_created: "2024-12-03 18:30:00",
        img: "charlotte-cleaning.jpg"
      },
      {
        journal_id: 7,
        wug_id: 14,
        user_id: 1,
        title: "Hornworm Feast",
        text: "MANduca devoured some tomato leaves today. She’s so lively and energetic!",
        date_created: "2024-12-01 14:00:00",
        img: "manduca-eating.jpg"
      },
      {
        journal_id: 8,
        wug_id: 14,
        user_id: 1,
        title: "Bright Green Beauty",
        text: "MANduca’s colors are becoming even more vibrant. She looks stunning under natural light!",
        date_created: "2024-12-02 13:15:00",
        img: "manduca-green.jpg"
      },
      {
        journal_id: 9,
        wug_id: 15,
        user_id: 1,
        title: "Wormies in Action",
        text: "The Meal Wormies were busy burrowing today. They’re so active and fun to watch.",
        date_created: "2024-12-01 11:45:00",
        img: "mealworm-burrowing.jpg"
      },
      {
        journal_id: 10,
        wug_id: 15,
        user_id: 1,
        title: "Feeding Day",
        text: "Fed the Meal Wormies some fresh oats today. They went straight for it!",
        date_created: "2024-12-03 10:30:00",
        img: "mealworm-feeding.jpg"
      },
      {
        journal_id: 11,
        wug_id: 16,
        user_id: 1,
        title: "Zophobas’s Growth",
        text: "Zophobas has grown noticeably bigger this week. Such a fascinating creature!",
        date_created: "2024-12-02 08:00:00",
        img: "zophobas-growth.jpg"
      },
      {
        journal_id: 12,
        wug_id: 16,
        user_id: 1,
        title: "Exploring the Enclosure",
        text: "Zophobas spent the day climbing around the enclosure. He’s very adventurous!",
        date_created: "2024-12-03 16:20:00",
        img: "zophobas-exploring.jpg"
      },
      {
        journal_id: 13,
        wug_id: 17,
        user_id: 1,
        title: "Orange Springtails",
        text: "The Mini Cheetos were scurrying around today. They’re so tiny yet full of energy!",
        date_created: "2024-12-01 10:10:00",
        img: "springtail-active.jpg"
      },
      {
        journal_id: 14,
        wug_id: 17,
        user_id: 1,
        title: "A Busy Day",
        text: "Mini Cheetos were busy cleaning their environment today. They’re such efficient workers!",
        date_created: "2024-12-02 11:45:00",
        img: "springtail-cleaning.jpg"
      }
    ]);
  };
  