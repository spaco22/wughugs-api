import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const wugs = async (req, res) => {
    // res.send("This is the wugs route");
    try {
        const wugsData = await knex("wugs")
        res.json(wugsData);
    
    } catch(error) {
        console.error("Error retrieving wugs data", error);
        res.status(400).json({
            message: "Error retrieving wugs data",
            status: 400
        });
    }
}

const wugById = async (req, res) => {
    // res.send("This is the wugs route");
    try {
        const wugsFound = await knex("wugs").join("users", "wugs.user_id", "=", "users.user_id").where({wug_id: req.params.id}).select("wugs.wug_id", "wugs.user_id", "users.user_username", "users.user_city","users.user_province", "wugs.wug_name", "wugs.wug_species", "wugs.wug_type", "wugs.wug_common_names ", "wugs.wug_age ");

        if(wugsFound.length === 0) {
            return res.status(404).json({
                message: `Wug with ID ${req.params.id} not found`,
                status: 404
            });
        }

        const wugById = wugsFound[0];

        res.status(200).json(wugById);
    
    } catch(error) {
        console.error("Error retrieving wugs data", error);
        res.status(400).json({
            message: "Error retrieving wugs data",
            status: 400
        });
    }
}

export { wugs, wugById };