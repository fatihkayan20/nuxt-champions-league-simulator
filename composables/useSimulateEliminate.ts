import { IPlayedMatch } from "~~/types/IPlayedMatch";
import { ITeam } from "~~/types/ITeam";

export const useSimulateEliminate = () => {
  const playedMatches = reactive<IPlayedMatch[]>([]);

  const simulateMatch = (firstTeam: ITeam, secondTeam: ITeam) => {
    const firstTeamScore = Math.floor(Math.random() * 5);
    const secondTeamScore = Math.floor(Math.random() * 5);

    if (firstTeamScore === secondTeamScore) {
      simulateMatch(firstTeam, secondTeam);
      return;
    }

    const playedMatch: IPlayedMatch = {
      id: `${firstTeam.id}-${secondTeam.id}`,
      firstTeam,
      secondTeam,
      firstTeamScore,
      secondTeamScore,
    };

    playedMatches.push(playedMatch);
  };

  return {
    playedMatches,
    simulateMatch,
  };
};
