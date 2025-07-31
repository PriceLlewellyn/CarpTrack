import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors());

type fish = {
    alt_label: string;
    species: string;
    label: string;
    notation: string
  };

async function getData() {
    const allFishURL =  "https://environment.data.gov.uk/ecology/api/v1/species?skip=0&take=250";
    try {
      const response = await fetch(allFishURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("success")
      return json

    } catch (error: any) {
      console.error(error.message);
    }
  }

//endpoint
app.get("/api/carp/search", async (req, res) => {
    const allFish = await getData()
    console.log(allFish)
    res.json({
        message: 'Success!',
        allFish: allFish
    });
});

app.get("/", async (req, res) => {
    res.json({message: 'Success!'});
});

app.listen(5000, () => {
    console.log("Server running on localhost:5000");
});