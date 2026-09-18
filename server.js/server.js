const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🇦🇲 Հայաստանի պատմության սերվերը աշխատում է!"
  });
});

app.get("/api/history", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Հայաստանի պատմություն",
      text: "Այստեղ կավելացնենք Հայաստանի պատմական նյութերը։"
    }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
