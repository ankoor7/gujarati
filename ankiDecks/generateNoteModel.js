import { v4 as uuidV4 } from 'uuid';
import noteModel from './noteModel';

const generateNoteModel = () => {
  const newNoteModel = {
    ...noteModel,
  };

  // newNoteModel.crowdanki_uuid = uuidV4();

  return newNoteModel;
};
export default generateNoteModel;
