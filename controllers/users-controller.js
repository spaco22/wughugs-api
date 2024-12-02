import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const users = async (req, res) => {
  // res.send("This is the users route");
  try {
    const usersData = await knex("users");
    res.status(200).json(usersData);
  } catch (error) {
    console.error("Error retrieving users data", error);
    res.status(400).json({
      message: "Error retrieving users data",
      status: 400,
    });
  }
};

const userByID = async (req, res) => {
  // res.send("This is the users route");
  try {
    const usersFound = await knex("users").where({ user_id: req.params.id });

    if (usersFound.length === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
        status: 404,
      });
    }

    const userByIdData = usersFound[0];

    res.status(200).json(userByIdData);
  } catch (error) {
    console.error(`Error retrieving user data with ID ${req.params.id}`, error);
    res.status(400).json({
      message: `Error retrieving user data with ID ${req.params.id}`,
      status: 400,
    });
  }
};

const userWugs = async (req, res) => {
  // res.send("This is the get user wugs route");
  try {
    const usersFound = await knex("users").where({ user_id: req.params.id });

    if (usersFound.length === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
        status: 404,
      });
    }

    const userWugs = await knex("users")
      .where({ "users.user_id": req.params.id })
      .join("wugs", "wugs.user_id", "=", "users.user_id")
      .select(
        "wugs.wug_id",
        "wugs.user_id",
        "users.user_username",
        "users.user_city",
        "users.user_province",
        "wugs.wug_name",
        "wugs.wug_species",
        "wugs.wug_type"
      );

    res.status(200).json(userWugs);
  } catch (error) {
    console.error(
      `Error retrieving wugs for user with ID ${req.params.id}`,
      error
    );
    res.status(400).json({
      message: `Error retrieving wugs for user with ID ${req.params.id}`,
      status: 400,
    });
  }
};

const addUser = async (req, res) => {
  // res.send(`This is the add User route!`);
  // console.log(req.body);

  //  if (!user_firstname || user_lastname || user_username  || user_city || user_province || user_email || user_pass   || user_pass_confirm){
  //     return;
  //  }

  try {
    console.log(req.file);
    req.body.user_img = req.file.filename;
    const usersData = await knex("users").insert(req.body);
    const newUserId = usersData[0];
    const newUser = await knex("users").where({ user_id: newUserId }).first();
    res.status(201).json({
      message: "New user succesfully added!",
      newUser,
    });
  } catch (error) {
    console.error("Error adding new user", error);
    res.status(500).json({
      message: "Error adding new user",
      status: 500,
    });
  }
};

const delUser = async (req, res) => {
  // res.send("This is the delete route");
  try {
    const selectedUser = await knex("users")
      .where({ user_id: req.params.id })
      .delete();

    if (selectedUser === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
        status: 404,
      });
    }
    res.json({
      message: `User with ID ${req.params.id} successfully deleted`,
      status: 204,
    });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({
      message: `Error deleting user`,
      status: 500,
    });
  }
};

export { users, userByID, userWugs, addUser, delUser };
