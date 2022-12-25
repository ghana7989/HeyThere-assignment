import express from 'express';
import cors from 'cors';
// @ts-expect-error
import rf from 'random-facts';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/message', (req, res) => {
  console.log('GET /message');

  console.log(
    '🚀 -------------------------------------------------------------------🚀',
  );
  console.log(
    '🚀 ~ file: index.ts:13 ~ app.get ~ rf.randomFact()',
    rf.randomFact(),
  );
  console.log(
    '🚀 -------------------------------------------------------------------🚀',
  );
  res.json(rf.randomFact());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
