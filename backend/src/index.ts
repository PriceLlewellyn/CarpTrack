import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors());

//endpoint
app.get("/api/carp/search", async (req, res) => {
    res.json({message: 'Success!'});
});

app.get("/", async (req, res) => {
    res.json({message: 'Success!'});
});

app.listen(5000, () => {
    console.log("Server running on localhost:5000");
});