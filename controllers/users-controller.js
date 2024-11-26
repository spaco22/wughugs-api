import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const index = async (req, res) => {
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
        const usersData = await knex("users");
        res.status(200).json(usersData);
    } catch (error) {
        console.error("Error retrieving user data by ID", error);
        res.status(400).json({
            message: "Error retrieving user data by ID",
            status: 400
        });
    }
}

export { index, userByID };