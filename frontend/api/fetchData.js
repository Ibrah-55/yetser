// api/fetchData.js
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://jarvis:jarvis1212@cluster0.3afvhft.mongodb.net/Yetser";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const database = client.db("Yetser");
    const collection = database.collection("foods"); // Change to your collection name

    const data = await collection.find({}).toArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  } finally {
    await client.close();
  }
}
