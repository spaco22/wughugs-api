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
            status: 400
        });
    }
}

const userByID = async (req, res) => {
    // res.send("This is the users route");
    try {
        const usersFound = await knex("users").where({user_id: req.params.id});

        if (userByID.length === 0) {
            return res.status(404).json({
                message: `User with ID ${req.params.id} not found`,
                status: 404
            });
        }

        const userByIdData = usersFound[0];

        res.status(200).json(userByIdData);

    } catch (error) {
        console.error(`Error retrieving user data with ID ${req.params.id}`, error);
        res.status(400).json({
            message: `Error retrieving user data with ID ${req.params.id}`,
            status: 400
        });
    }
}

const userWugs = async(req, res) => {
    res.send("This is the get user wugs route");
};

const addUser = async(req, res) => {
    // res.send(`This is the add User route!`);
    // console.log(req.body);

    //  if (!user_firstname || user_lastname || user_username  || user_city || user_province || user_email || user_pass   || user_pass_confirm){
    //     return;
    //  }

    try {
        const usersData = await knex("users").insert(req.body);
        const newUserId = usersData[0];
        const newUser = await knex("users").where({ user_id: newUserId }).first();
        res.status(201).json({
            message: "New user succesfully added!",
            newUser
        });


    } catch(error) {
        console.error("Error adding new user", error);
        res.status(500).json({
            message: "Error adding new user",
            status: 500
        })
    }
};

export { users, userByID, userWugs, addUser };