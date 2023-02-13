import { ITeam } from "~~/types/ITeam";

export const useTeamsStore = () => {
  const allTeams = useState<Record<string, ITeam[]>>("teams", () => ({
    a: [],
    b: [],
    c: [],
    d: [],
  }));

  return {
    allTeams,
  };
};
