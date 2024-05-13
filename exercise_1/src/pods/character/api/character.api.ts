import { CharacterApiModel } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  try {
    const response = await fetch(
      `${process.env.RICK_AND_MORTY_API}/character/${id}`
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
