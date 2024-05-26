const express = require('express');
const urlRoute = require("./routes/url");
const { connectToMongoDB  } = require('./connect');
const URL = require('./models/url');
const app = express();

connectToMongoDB('mongodb+srv://admin:KUOMZ3v7gfyPGlVA@cluster0.dikomqc.mongodb.net/short-url')
.then(() => 
    console.log('MongoDB connected')
);

app.use(express.json());

app.use("/url", urlRoute);

// get redirect URL
app.get('/:shortID', async(req, res) => {
    shortID = req.params.shortID;
    console.log(shortID);

    // find and also update the no.of clicks
    const entry = await URL.findOneAndUpdate({ 
        shortId: shortID
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        },
    });

    if(!entry)
        res.status(400).json({ "msg": "can't create shortURL" })

    res.redirect(entry.redirectURL);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});