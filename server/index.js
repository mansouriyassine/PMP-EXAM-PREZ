const express = require('express');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/quiz', quizRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});