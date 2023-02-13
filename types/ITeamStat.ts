import { ITeam } from "./ITeam";

export interface ITeamStat {
  readonly label: string;
  readonly name: keyof ITeam;
}
