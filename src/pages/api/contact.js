import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input!" });
      return;
    }

    const incomingMessage = { email, name, message };

    let client;

    try {
      client = await MongoClient.connect(
        ""
      );
    } catch (error) {
      res
        .status(500)
        .json({ message: "something went wrong with db connection" });
    }

    const db = client.db("myBlog");

    try {
      const result = db.collection("messages").insertOne(incomingMessage);
      incomingMessage.id = (await result).insertedId;
    } catch (error) {
      res.status(500).json({ message: "storing message failed!" });
      return;
    }

    client.close();

    return res.status(201).json({
      message: "Successfully stored message!",
      message: incomingMessage,
    });
  }
}
