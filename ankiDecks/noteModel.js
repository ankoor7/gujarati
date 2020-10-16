// name:
// 'Letter, sound, example'

// fields:
// Front, Picture, Sound, Examples, Structure,

const noteModel = {
  __type__: 'NoteModel',
  crowdanki_uuid: 'fee9a048-5673-11ea-bf49-dca9047b7182',
  css: `
  div {
    margin: 15px;
  }
  .card {
    font-family: arial;
    font-size: 25px;
    text-align: center;
    color: black;
    background-color: white;
  }
  .front {
    font-family: Rasa;
    font-size: 55px;
  }
  .sound {
    color: blue;
  }
  .examples {
    color: grey;
  }`,
  flds: [
    {
      font: 'Rasa',
      media: [],
      name: 'Front',
      ord: 0,
      rtl: false,
      size: 20,
      sticky: false,
    },
    {
      font: 'Arial',
      media: [],
      name: 'Sound',
      ord: 1,
      rtl: false,
      size: 20,
      sticky: false,
    },
    {
      font: 'Arial',
      media: [],
      name: 'Examples',
      ord: 2,
      rtl: false,
      size: 20,
      sticky: false,
    },
    {
      font: 'Arial',
      media: [],
      name: 'Structure',
      ord: 3,
      rtl: false,
      size: 20,
      sticky: false,
    },
    {
      font: 'Arial',
      media: [],
      name: 'Picture',
      ord: 4,
      rtl: false,
      size: 20,
      sticky: false,
    },
    {
      font: 'Arial',
      media: [],
      name: 'Audio recording',
      ord: 5,
      rtl: false,
      size: 20,
      sticky: false,
    },
  ],
  latexPost: '\\end{document}',
  latexPre:
    '\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
  latexsvg: false,
  name: 'Letter, sound, example',
  req: [
    [0, 'any', [0]],
    [1, 'any', [1, 5]],
  ],
  sortf: 0,
  tags: [],
  tmpls: [
    {
      afmt:
        '{{FrontSide}}\n\n<hr id=answer>\n<div class=picture>{{Picture}}</div>\n<div class=sound>{{Sound}}</div>\n<div class=examples>{{Examples}}</div>\n<div class=structure>{{Structure}}</div>\n<div class=sound>{{Audio recording}}</div>',
      bafmt: '',
      bqfmt: '',
      did: null,
      name: 'Card 1',
      ord: 0,
      qfmt: '<div class=front>{{Front}}</div>\n',
    },
    {
      afmt:
        '{{FrontSide}}\n\n<hr id=answer>\n\n<div class=front>{{Front}}</div>\n<div class=examples>{{Examples}}</div>\n<div class=structure>{{Structure}}</div>',
      bafmt: '',
      bqfmt: '',
      did: null,
      name: 'Card 2',
      ord: 1,
      qfmt:
        'What letter is this?\n\n<div class=sound>{{Sound}}</div>\n\n<div class=sound>{{Audio recording}}</div>',
    },
  ],
  type: 0,
  vers: [],
};

export const letterSoundExampleTemplate = {
  __type__: 'Note',
  data: '',
  fields: ['ક', 'Ka', 'scold, sky', '', '', ''],
  flags: 0,
  guid: 'INSERT_10_CHAR_UUID',
  newlyAdded: false,
  note_model_uuid: 'INSERT_NOTE_MODEL_UUID',
  tags: [],
};

export default noteModel;
