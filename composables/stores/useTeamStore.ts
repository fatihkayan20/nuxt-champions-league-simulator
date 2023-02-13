import { ITeam } from "~~/types/ITeam";

export const useTeamsStore = () => {
  const allTeams = useState<Record<string, ITeam[]>>("teams", () => ({
    a: [],
    b: [],
    c: [],
    d: [],
  }));

  const totalTeams = computed(
    () => Object.values(allTeams.value).flat().length
  );
  const hasEnoughTeams = computed(() => totalTeams.value === 16);

  return {
    allTeams,
    totalTeams,
    hasEnoughTeams,
  };
};
