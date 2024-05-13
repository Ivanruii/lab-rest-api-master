import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterViewModel, createEmptyCharacter } from './character.vm';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<CharacterViewModel>(
    createEmptyCharacter()
  );
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const loadCharacter = async () => {
    try {
      setLoading(true);
      const apiCharacter = await api.getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
      setError(null);
    } catch (error) {
      setError('Error when obtaining the character');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) {
      loadCharacter();
    }
    return () => {
      setCharacter(createEmptyCharacter());
      setLoading(true);
      setError(null);
    };
  }, [id]);

  return (
    <CharacterComponent
      character={character}
      loading={loading}
      error={error}
      reloadCharacter={loadCharacter}
    />
  );
};
