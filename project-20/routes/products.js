const fs = require("fs");
const path = require("path");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    const pathJSON = path.resolve(__dirname, "../data.json");
    fs.readFile(pathJSON, (err, data) => {
        res.json(JSON.parse(data));
    });
});

module.exports = router;
