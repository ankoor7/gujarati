import fs from 'fs';
import generateDeck from './ankiDecks/generateDeck';
import generateLetterSoundExampleNote from './ankiDecks/generateNote';
import generateNoteModel from './ankiDecks/generateNoteModel';
import consonants from './consonants';

const newDeck = generateDeck('gujarati consonants');

const noteModel = generateNoteModel();
newDeck.note_models = [noteModel];

const { crowdanki_uuid: noteModelUid } = noteModel;

for (let consonant of consonants) {
  // [standard, gujarati, notes]
  const [sound, front, examples] = consonant;
  newDeck.notes.push(generateLetterSoundExampleNote(noteModelUid, front, sound, examples))
}

fs.writeFileSync('gujarati_consonants.json', JSON.stringify(newDeck, null, 2), 'utf8');



