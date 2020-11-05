const fs = require("fs");
const router = require("express").Router();
// Requiers a package 'uuid' which creates uinversally unique identifiers to be used for each note
const { v1: uuidv1 } = require("uuid");

// GET ROUTE
router.get("/notes", (req, res) => {
    // Reads the data json file, parses it, and send response with data
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        let notesData = JSON.parse(data);
        res.json(notesData);
    });
});


// POST ROUTE
router.post("/notes", (req, res) => {
    // Reads the data from the json file, parses it, sets values based on the inputs from the user and pushed it to the data array
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        let notesData = JSON.parse(data);
        let note = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv1()
        };
        notesData.push(note);

        // Writes to the data json file with the newly updated data, new post, and redirects the user to the /notes route
        fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
            if(err) throw err;
            res.redirect("/notes");
        });
    });
});


// DELETE ROUTE
router.delete("/notes/:id", (req, res) => {
    // Set param id that is to be deleted equal to variavle 'id'
    let id = req.params.id;
    // Reads the data from the json file and parses the data
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        let notesData = JSON.parse(data);

        // Loops through the array from the json file and compares every id in the array with the id passed in
        for(let i = 0; i < notesData.length; i++) {
            if(id === notesData[i].id) {
                notesData.splice(i, 1);
            }
        }

        // Writes to the data json file with the newly updated data, with the deletion
        fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
            if(err) throw err;
        });
    });
});


module.exports = router;