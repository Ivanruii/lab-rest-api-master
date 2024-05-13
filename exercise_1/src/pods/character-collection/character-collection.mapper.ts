import * as apiModel from './api/character-collection-api.model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterApiModel
): viewModel.CharcterCollectionViewModel => ({
  id: character.id.toString(),
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  gender: character.gender,
});
