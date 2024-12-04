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
    res.send("This is the journal by ID route");
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