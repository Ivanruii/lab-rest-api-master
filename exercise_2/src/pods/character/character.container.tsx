import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterViewModel, createEmptyCharacter } from './character.vm';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<CharacterViewModel>(
    createEmptyCharacter()
  );
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  const onSave = async (character: CharacterViewModel) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(linkRoutes.characterDetail(character.id));
    } else {
      alert('Error on save character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      loading={loading}
      error={error}
      reloadCharacter={loadCharacter}
      onSave={onSave}
    />
  );
};
