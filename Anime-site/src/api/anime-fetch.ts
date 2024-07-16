import { AnimeLists } from "@/types/anime-types";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["animelist"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: animelist } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["TRENDING_DESC"]&perPage=10`
      );
      return animelist as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
