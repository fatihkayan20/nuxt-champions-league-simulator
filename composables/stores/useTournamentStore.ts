import { Stage } from "~~/types/Stage";

export const useTournamentStore = () => {
  const { hasEnoughTeams } = useTeamsStore();
  const activeStage = useState<Stage | null>("activeStage", () => null);

  const canShowNextButton = useState("canShowNextButton", () => false);

  watch(hasEnoughTeams, (newValue) => {
    if (newValue) {
      console.log("changed");
      canShowNextButton.value = true;
    }
  });

  return {
    activeStage,
    canShowNextButton,
  };
};
