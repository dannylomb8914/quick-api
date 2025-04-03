const express = require('express');
const app = express();

const PORT = process.env.PORT || 3011;

// Define a simple GET route
app.get("/", (req, res) => {
    res.json({ message: "Hello, Wesley v2!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

