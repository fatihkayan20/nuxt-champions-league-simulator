import { ITeam } from "./ITeam";

export interface IPlayedMatch {
  readonly id: string;
  readonly firstTeam: ITeam;
  readonly secondTeam: ITeam;
  readonly firstTeamScore: number;
  readonly secondTeamScore: number;
}
