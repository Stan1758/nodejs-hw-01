import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'hi',
  });
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Сонце';
  res.send(`Привіт, ${name}!`);
});

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('Це відповідь після затримки у 2 секунди');
  }, 2000);
});
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
