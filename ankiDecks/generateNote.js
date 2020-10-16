import {v4 as uuid} from 'uuid';
import {letterSoundExampleTemplate} from './noteModel';

const getNoteUuid = () => uuid().substring(0, 11);

const generateLetterSoundExampleNote = (
  noteModelUid = 'INSERT_UID_OF_NOTE_MODEL',
  front = '',
  sound = '',
  examples = '',
  structure = '',
  picture = '',
  audioFileName,
) => {
  const audioField =
    typeof audioFileName === 'string' && audioFileName.length > 0
      ? `[sound:${audioFileName}]<br>`
      : '';

  return {
    ...letterSoundExampleTemplate,
    guid: getNoteUuid(),
    note_model_uuid: noteModelUid,
    fields: [front, sound, examples, structure, picture, audioField],
  };
};

export default generateLetterSoundExampleNote;
