const express = require('express');
const app = express();

const PORT = process.env.PORT || 3010;

// Define a simple GET route
app.get("/", (req, res) => {
    res.json({ message: "Hello, Jenkins!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

