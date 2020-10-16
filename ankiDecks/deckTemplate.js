const deckTemplate = {
  "__type__": "Deck",
  "children": [],
  "crowdanki_uuid": "INSERT_UUID",
  "deck_config_uuid": "INSERT_UUID",
  "deck_configurations": [
    {
      "__type__": "DeckConfig",
      "autoplay": true,
      "crowdanki_uuid": "INSERT_UUID",
      "dyn": false,
      "lapse": {
        "delays": [10],
        "leechAction": 0,
        "leechFails": 8,
        "minInt": 1,
        "mult": 0
      },
      "maxTaken": 60,
      "name": "Default",
      "new": {
        "bury": true,
        "delays": [1, 10],
        "initialFactor": 2500,
        "ints": [1, 4, 7],
        "order": 0,
        "perDay": 10,
        "separate": true
      },
      "replayq": true,
      "rev": {
        "bury": true,
        "ease4": 1.3,
        "fuzz": 0.05,
        "ivlFct": 1,
        "maxIvl": 36500,
        "minSpace": 1,
        "perDay": 100
      },
      "timer": 0
    }
  ],
  "desc": "",
  "dyn": 0,
  "extendNew": 10,
  "extendRev": 50,
  "media_files": [],
  "mid": 1366716141610,
  "name": "gujarati letters",
  "note_models": [],
  "notes": []
};

export default deckTemplate;
