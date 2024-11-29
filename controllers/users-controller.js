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

const addUser = async(req, res) => {
    res.send(`This is the add User route!`)
};

export { users, userByID, addUser };