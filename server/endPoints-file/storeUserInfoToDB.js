const pool = require("../database/db");

app.post("/api/storeUser", async (req, res) => {
  try {
    const { name, email, picture, sub } = req.body;
    const existingUserQuery = "SELECT * FROM users WHERE email = $1";
    const existingUserResult = await pool.query(existingUserQuery, [email]);
    const existingUser = existingUserResult.rows[0];

        if (existingUser) {
            console.log(
                "User already exists. You might want to update the existing record."
            );
                return res.status(400).send("User already exists.");
        }

        if (!name || !email || !picture || !sub) {
            return res
                .status(400)
                .json({ error: "Invalid data format or user already exists." });
        }

    const insertQuery =
      "INSERT INTO users (name, email, picture, sub) VALUES ($1, $2, $3, $4) RETURNING *";

    const result = await pool.query(insertQuery, [name, email, picture, sub]);
    res.status(201).json(result.rows[0]);
        
    } catch (error) {
            console.log(error.detail);
            res.status(500).send("Internal Server Error");
    }
});