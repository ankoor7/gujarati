import deckTemplate from './deckTemplate';
import { v4 as genUuid } from 'uuid';

const generateDeck = (name) => {
  const uuid = genUuid();

  const deck = {
    ...deckTemplate,
    crowdanki_uuid: uuid,
    deck_config_uuid: uuid,
    name,
  };

  deck.deck_configurations[0].crowdanki_uuid = uuid;

  return deck;
};

export default generateDeck;
