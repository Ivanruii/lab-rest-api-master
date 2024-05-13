import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharcterCollectionViewModel } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharcterCollectionViewModel;
  onDetail: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '80.25%' }}
          />
        </div>
        <h3> Name: {character.name}</h3>
        <h4> Status: {character.status}</h4>
        <h4> Gender: {character.gender}</h4>
        <h4> Species: {character.species}</h4>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDetail(character.id)}>
          <InfoIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
