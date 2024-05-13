import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import { CharacterViewModel } from './character.vm';

interface Props {
  character: CharacterViewModel;
  loading: boolean;
  error: string | null;
  reloadCharacter: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
  loading,
  error,
  reloadCharacter,
}) => {
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <Button variant="contained" onClick={reloadCharacter}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <>
      {character ? (
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Card sx={{ maxWidth: 280 }}>
            <CardMedia
              sx={{ height: 280 }}
              image={character.image}
              title={character.name}
              component="img"
            />
            <CardContent>
              <h3> Name: {character.name}</h3>
              <h4> Status: {character.status}</h4>
              <h4> Género: {character.gender}</h4>
              <h4> Especie: {character.species}</h4>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <div>No character found</div>
      )}

      <Button variant="contained" onClick={() => navigate(-1)}>
        Volver a la lista de personajes
      </Button>
    </>
  );
};
