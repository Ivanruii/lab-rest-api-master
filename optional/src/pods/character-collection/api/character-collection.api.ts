import { gql } from '@apollo/client';
import { CharacterApiModel } from './character-collection-api.model';
import client from 'core/graphql/client';

export const getCharacterCollection = async (): Promise<
  CharacterApiModel[]
> => {
  try {
    const GET_CHARACTER_COLLECTION_QUERY = gql`
      query GetCharacterCollection {
        characters {
          results {
            id
            name
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            image
            episode {
              name
            }
          }
        }
      }
    `;

    const { data } = await client.query({
      query: GET_CHARACTER_COLLECTION_QUERY,
    });

    if (!data.characters) {
      throw new Error('Failed to fetch character collection');
    }

    return data.characters.results;
  } catch (error) {
    throw new Error('Error when obtaining the character collection');
  }
};
