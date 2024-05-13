import { CharacterApiModel } from './character-collection-api.model';

export const getCharacterCollection = async (): Promise<
  CharacterApiModel[]
> => {
  try {
    const response = await fetch(
      `${process.env.RICK_AND_MORTY_API}/characters`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch character collection');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error when obtaining the character');
  }
};

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
//   return true;
// };
