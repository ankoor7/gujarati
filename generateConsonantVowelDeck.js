import fs from 'fs';
import generateDeck from './ankiDecks/generateDeck';
import generateLetterSoundExampleNote from './ankiDecks/generateNote';
import generateNoteModel from './ankiDecks/generateNoteModel';
import consonants from './consonants';
import vowelCharacters from './vowelCharacters';
import DeckDirectory from './genDeckDirectory';

const newDeck = generateDeck('gujarati consonants-vowel combinations');

const noteModel = generateNoteModel();
newDeck.note_models = [noteModel];

const {crowdanki_uuid: noteModelUid} = noteModel;

const mediaSrc = './consonant_vowel_audio';
const deckDirectory = new DeckDirectory(
  'gujarati_consonants-vowel_combinations',
);
// [standard, gujarati, notes]

for (let consonant of consonants) {
  const [consSound, consChar] = consonant;

  for (let vowelCharacter of vowelCharacters) {
    const [vowelSound, vowelChar, ,] = vowelCharacter;

    const consonantVowel = `${consChar}${vowelChar}`;
    const sound = `${consSound.slice(0, -1)}${vowelSound}`;
    const audioFile = `audio-${consonantVowel}.mp3`;
    const audioSrc = `${mediaSrc}/${audioFile}`;
    if (fs.existsSync(audioSrc)) {
      newDeck.notes.push(
        generateLetterSoundExampleNote(
          noteModelUid,
          consonantVowel,
          sound,
          '',
          '',
          '',
          audioFile,
        ),
      );
      deckDirectory.addMediaFile(audioFile, audioSrc);
    }
  }
}

deckDirectory.addDeckJson(newDeck);
