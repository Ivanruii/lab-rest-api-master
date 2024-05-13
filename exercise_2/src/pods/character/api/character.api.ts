import { CharacterApiModel } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  try {
    const response = await fetch(
      `${process.env.RICK_AND_MORTY_API}/characters/${id}`
    );
    if (!response.ok) {
      throw new Error('Error when obtaining the character');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Error when obtaining the character');
  }
};

export const saveCharacter = async (
  character: CharacterApiModel
): Promise<CharacterApiModel> => {
  const characterListUrl = `${process.env.RICK_AND_MORTY_API}/characters`;
  const requestOptions = {
    method: character.id ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  };

  try {
    const response = await fetch(
      character.id ? `${characterListUrl}/${character.id}` : characterListUrl,
      requestOptions
    );
    if (!response.ok) {
      throw new Error('Error when saving the character');
    }
    return character;
  } catch (err) {
    throw new Error('Error when saving the character');
  }
};
