export interface ITeam {
  readonly id: number;
  readonly name: string;
  readonly gamePlayed: number;
  readonly gameWon: number;
  readonly gameDrawn: number;
  readonly gameLost: number;
  readonly goalFor: number;
  readonly goalAgainst: number;
  readonly points: number;
  readonly group: "a" | "b" | "c" | "d";
}
