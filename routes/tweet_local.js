const fs = require('fs');
const path = require('path');
const download = require('download');
const tweetThatClip = require('tweet-that-clip');

module.exports = (app) => {
  app.post('/tweet', (req, res) => {
    const startTime = req.query.start;
    const endTime = req.query.end;
    const url = req.query.video;

    const inputFile = '/Users/doolej01/Development/tweet-that-clip-server/assets/pmqs-ts.mp4';
<<<<<<< HEAD
    const outputfile = '/Users/doolej01/Development/tweet-that-clip-server/assets/pmqs-ts_clipped.mp4';

    const opts = {
      inputFile: inputFile,
      outputFile: outputfile,
=======
    const outputFile = '/Users/doolej01/Development/tweet-that-clip-server/assets/pmqs-ts_clipped.mp4';

    const opts = {
      inputFile: inputFile,
      outputFile: outputFile,
>>>>>>> d5a1140563b5f20492b0e3e7e78eb54978437afa
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
  });
};
