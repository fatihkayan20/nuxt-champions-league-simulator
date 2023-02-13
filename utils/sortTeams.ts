import { ITeam } from "~~/types/ITeam";

export const sortTeams = (teams: ITeam[]) => {
  return teams.sort((a: ITeam, b: ITeam) => {
    if (a.points > b.points) {
      return -1;
    }

    if (a.points < b.points) {
      return 1;
    }

    if (a.goalFor - a.goalAgainst > b.goalFor - b.goalAgainst) {
      return -1;
    }

    if (a.goalFor - a.goalAgainst < b.goalFor - b.goalAgainst) {
      return 1;
    }

    if (a.goalFor > b.goalFor) {
      return -1;
    }

    if (a.goalFor < b.goalFor) {
      return 1;
    }

    return 0;
  });
};
