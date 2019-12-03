import { IMember } from './member';

export interface ITeam {
  name: string;
  project: string;
  projDesc: string;
  members: IMember[];
}
