const fs = require("fs");
const router = require("express").Router();
const { v1: uuidv1 } = require("uuid");


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        let notesData = JSON.parse(data);
        res.json(notesData);
    });
});


router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        let notesData = JSON.parse(data);
        let note = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv1()
        };
        notesData.push(note);


        fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
            if(err) throw err;
            res.json(notesData);
        })
    });
});


module.exports = router;