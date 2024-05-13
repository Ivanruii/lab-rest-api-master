import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApiModel
): viewModel.CharacterViewModel => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterViewModel
): apiModel.CharacterApiModel =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
  } as unknown as apiModel.CharacterApiModel);
