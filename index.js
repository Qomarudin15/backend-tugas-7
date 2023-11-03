const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
  const { name, address, job } = req.body;
  const data = { name, address, job };
  const jsonData = JSON.stringify(data);

  fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error boosss');
    } else {
      console.log('data masuk');
      res.send(`Data masuk: ${jsonData}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
