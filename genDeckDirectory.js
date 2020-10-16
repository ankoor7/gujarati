import fs from 'fs';

class DeckDirectory {
  constructor(name) {
    const deckPath = `./${name}`;
    const mediaPath = `${deckPath}/media`;
    if (!fs.existsSync(deckPath)) {
      fs.mkdirSync(deckPath);
      if (!fs.existsSync(mediaPath)) {
        fs.mkdirSync(mediaPath);
      }
    }

    this.deckPath = deckPath;
    this.mediaPath = mediaPath;
  }

  addDeckJson(jsonData) {
    fs.writeFileSync(
      `${this.deckPath}/deck.json`,
      JSON.stringify(jsonData, null, 2),
      'utf8',
    );
  }

  addMediaFile(fileName, srcPath, overwrite = false) {
    const destination = `${this.mediaPath}/${fileName}`;
    if (!overwrite && fs.existsSync(destination)) {
      return false;
    }

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destination);
    } else {
      console.log(`audio file ${srcPath} does not exist`);
    }
  }
}

export default DeckDirectory;
