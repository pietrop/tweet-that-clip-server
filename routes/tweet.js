const fs = require('fs');
const download = require('download');
const tweetThatClip = require('tweet-that-clip');

module.exports = (app) => {
  app.post('/tweet', (req, res) => {
    const startTime = req.query.start;
    const endTime = req.query.end;
    const url = req.query.video;

    download(url).then(data => {
      const inputFilePath = `dist/${url}`;
      fs.writeFileSync(inputFilePath, data);

      const opts = {
        inputFile: inputFilePath,
        outputFile: `${inputFilePath}_clipped`,
        inputSeconds: startTime,
        durationSeconds: (endTime - startTime),
        tweetText: 'bing bing'
      };

      tweetThatClip(opts, (err, response) => {
        if (err) {
          console.log(err.message);
          res.sendStatus(500);
        }

        console.log(response);
        res.sendStatus(204);
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
  });
};
