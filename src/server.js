const app = require('./app');
const mongosse = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

const db = 'banco modo:';

mongosse
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wgwfn.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log(`${db} on`);
  })
  .catch(() => {
    console.log(`${db} off`);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
