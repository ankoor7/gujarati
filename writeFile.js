import http from 'http';
import fs from 'fs';

export default function writeFileFromWeb(url, filePath, doNotReplace = true) {
  if (doNotReplace && fs.existsSync(filePath)) {
    return;
  }

  const file = fs.createWriteStream(filePath);
  http
    .get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();
      });
    })
    .on('error', function(err) {
      fs.unlink(filePath);
      console.log(err.message);
      console.log(`${filePath} was not written`);
    });
}
