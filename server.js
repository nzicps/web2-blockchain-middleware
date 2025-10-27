const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: '✅ Web2 Blockchain Middleware running successfully!' });
});

app.listen(PORT, () => console.log(\🚀 Server running on port \\));
