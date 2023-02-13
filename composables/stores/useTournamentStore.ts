import { ITeam } from "~~/types/ITeam";
import { Stage } from "~~/types/Stage";

export const useTournamentStore = () => {
  const { hasEnoughTeams } = useTeamsStore();
  const activeStage = useState<Stage>("activeStage", () => Stage.TeamSelection);
  const canShowNextButton = useState("canShowNextButton", () => false);

  const quarterFinals = useState<ITeam[][]>("quarterFinals", () => [
    [],
    [],
    [],
    [],
  ]);
  const semiFinals = useState<ITeam[][]>("semiFinals", () => [[], []]);

  watch(hasEnoughTeams, (newValue) => {
    if (newValue) {
      canShowNextButton.value = true;
    }
  });

  return {
    activeStage,
    canShowNextButton,
    quarterFinals,
    semiFinals,
  };
};
