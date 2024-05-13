import { gql } from '@apollo/client';
import { CharacterApiModel } from './character.api-model';
import client from 'core/graphql/client';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  try {
    const GET_CHARACTER_QUERY = gql`
      query GetCharacter($id: ID!) {
        character(id: $id) {
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
    `;

    const { data } = await client.query({
      query: GET_CHARACTER_QUERY,
      variables: { id },
    });

    if (!data.character) {
      throw new Error('Character not found');
    }

    return data.character;
  } catch (err) {
    throw new Error('Error when obtaining the character');
  }
};
