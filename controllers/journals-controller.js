import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const journals = async (req, res) => {
    // res.send("This is the journals route");
    try {
      const journalsData = await knex("journals");
      res.status(200).json(journalsData);
    } catch (error) {
      console.error("Error retrieving journals data", error);
      res.status(400).json({
        message: "Error retrieving journals data",
        status: 400,
      });
    }
  };

  const journalById = async (req, res) => {
    // res.send("This is the journal by ID route");
    try {
        const journalsFound = await knex("journals")
          .join("users", "journals.user_id", "=", "users.user_id")
          .where({ journal_id: req.params.id })
          .select(
            "users.user_username",
            "journals.wug_id",
            "journals.user_id",
            "journals.journal_id",
            "journals.title",
            "journals.text",
            "journals.date_created",
            "journals.img",
          );
    
        if (journalsFound.length === 0) {
          return res.status(404).json({
            message: `Journal with ID ${req.params.id} not found`,
            status: 404,
          });
        }
    
        const journalById = journalsFound[0];
    
        res.status(200).json(journalById);
      } catch (error) {
        console.error("Error retrieving journal data", error);
        res.status(400).json({
          message: "Error retrieving journal data",
          status: 400,
        });
      }
  };

  const addJournal = async (req, res) => {
    // try {
    //   const journalsData = await knex("journals");
    //   res.status(200).json(journalsData);
    // } catch (error) {
    //   console.error("Error retrieving journals data", error);
    //   res.status(400).json({
    //     message: "Error retrieving journals data",
    //     status: 400,
    //   });
    // }
  };

  const editJournal = async (req, res) => {
    // try {
    //   const journalsData = await knex("journals");
    //   res.status(200).json(journalsData);
    // } catch (error) {
    //   console.error("Error retrieving journals data", error);
    //   res.status(400).json({
    //     message: "Error retrieving journals data",
    //     status: 400,
    //   });
    // }
  };

  const delJournal = async (req, res) => {
    // try {
    //   const journalsData = await knex("journals");
    //   res.status(200).json(journalsData);
    // } catch (error) {
    //   console.error("Error retrieving journals data", error);
    //   res.status(400).json({
    //     message: "Error retrieving journals data",
    //     status: 400,
    //   });
    // }
  };

export { journals, journalById, addJournal, editJournal, delJournal };