import gracefulShutdown from 'http-graceful-shutdown';
import debug from 'debug';
import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8080;

const logger = debug('http:app');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({
    msg: "Hello, world. Changed!",
    env: process.env
  });
})


app.listen(port, () => {
  logger('The http server is listening on http://0.0.0.0:%s', port)
});


gracefulShutdown(app);
