const shortid = require('shortid')
const URL = require("../models/url");

async function generateShortURL(req, res) {
    const body = req.body;
    if(!body.url) 
        return res.status(400).json({ error: "URL is required!" });
    
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
} 

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortID;
    
    const result = await URL.findOne({ shortId });

    if(!result) {
        res.json({ msg: "short URL doesn't exist for this ID!"});
    }

    res.json({ noOfClicks: result.visitHistory.length, analytics: result.visitHistory });
}

module.exports = {
    generateShortURL,
    handleGetAnalytics
} 