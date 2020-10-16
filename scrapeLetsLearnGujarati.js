import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';
import consonants from './consonants';
import writeFileFromWeb from './writeFile';

const siteUrl = 'http://www.letslearngujarati.com/consonants/learn/';

const getLetterUrl = (idx, letter) => `${siteUrl}/${idx}/${encodeURI(letter)}`;

const letterSelector = '.brk_div';
const charSelector = '.brk_1';
const audioSelector = '.brk_audio a.clicksound';
const audioDataAttr = 'sound';

const fetchLetterPageHtml = async url => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getMp3Urls = letterPageHtml => {
  const audioUrls = {};
  letterPageHtml(letterSelector).each(function(i, letterDiv) {
    const div = cheerio.load(letterDiv);
    audioUrls[div(charSelector).text()] = div(audioSelector).data(
      audioDataAttr,
    );
  });
  return audioUrls;
};

const getAudioUrls = url => fetchLetterPageHtml(url).then(getMp3Urls);

const flattenNestedObjects = dataPackets => {
  const urls = {};
  dataPackets.forEach(packet => {
    Object.entries(packet).forEach(([char, url]) => {
      urls[char] = url;
    });
  });
  return urls;
};

const audioDir = path.resolve(__dirname, './consonant_vowel_audio/');
const getAudio = urls => {
  Object.entries(urls).forEach(([char, url]) => {
    const filePath = `${audioDir}/audio-${char}.mp3`;
    writeFileFromWeb(url, filePath);
  });
};

const getAllLetterUrls = () => {
  const promises = [];
  for (const [idx, consonant] of consonants.entries()) {
    const character = consonant[1];
    promises.push(getAudioUrls(getLetterUrl(idx, character)));
  }
  Promise.all(promises)
    .then(flattenNestedObjects)
    .then(getAudio);
};

getAllLetterUrls();
