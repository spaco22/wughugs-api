import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const wugs = async (req, res) => {
  // res.send("This is the wugs route");
  try {
    const wugsData = await knex("wugs");
    res.json(wugsData);
  } catch (error) {
    console.error("Error retrieving wugs data", error);
    res.status(400).json({
      message: "Error retrieving wugs data",
      status: 400,
    });
  }
};

const wugById = async (req, res) => {
  // res.send("This is the wugs route");
  try {
    const wugsFound = await knex("wugs")
      .join("users", "wugs.user_id", "=", "users.user_id")
      .where({ wug_id: req.params.id })
      .select(
        "wugs.wug_id",
        "wugs.user_id",
        "users.user_username",
        "users.user_city",
        "users.user_province",
        "wugs.wug_name",
        "wugs.wug_species",
        "wugs.wug_type",
        "wugs.wug_common_names ",
        "wugs.wug_age "
      );

    if (wugsFound.length === 0) {
      return res.status(404).json({
        message: `Wug with ID ${req.params.id} not found`,
        status: 404,
      });
    }

    const wugById = wugsFound[0];

    res.status(200).json(wugById);
  } catch (error) {
    console.error("Error retrieving wugs data", error);
    res.status(400).json({
      message: "Error retrieving wugs data",
      status: 400,
    });
  }
};

const addWug = async (req, res) => {
  // res.send("This is the add wug route");

  // console.log(req.file);

  try {
    const wugsData = await knex("wugs").insert(req.body);
    const newWugId = wugsData[0];
    const newWug = await knex("wugs").where({ wug_id: newWugId }).first();
    res.status(201).json({
      message: "New wug succesfully added!",
      newWug,
    });
  } catch (error) {
    console.error("Error adding new wug", error);
    res.status(500).json({
      message: "Error adding new wug",
      status: 500,
    });
  }
};

const editWug = async (req, res) => {
  // res.send("This is the put route");

  try {
    const editWug = await knex("wugs")
      .where({ wug_id: req.params.id })
      .update(req.body);

    const editedWug = await knex("wugs")
      .where({ wug_id: req.params.id })
      .first();

    res.status(200).json({
      message: "Wug succesfully updated",
      status: 200,
      updated_wug: editedWug,
    });
  } catch (error) {
    console.error(`Error updating wug with id: ${req.params.id}`, error);
    res.status(500).json({
      message: `Error updating wug with id: ${req.params.id}`,
    });
  }
};

const delWug = async (req, res) => {
  // res.send("This is the delete route");
  try {
    const selectedWug = await knex("wugs")
      .where({ wug_id: req.params.id })
      .delete();

    if (selectedWug === 0) {
      return res.status(404).json({
        message: `Wug with ID ${req.params.id} not found`,
        status: 404,
      });
    }
    res.json({
      message: `Wug with ID ${req.params.id} successfully deleted`,
      status: 204,
    });
  } catch (error) {
    console.error("Error deleting wug", error);
    res.status(500).json({
      message: `Error deleting wug`,
      status: 500,
    });
  }
};

export { wugs, wugById, addWug, editWug, delWug };
