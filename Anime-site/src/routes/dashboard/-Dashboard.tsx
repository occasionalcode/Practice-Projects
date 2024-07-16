import { useFetchAnime } from "@/api/anime-fetch";
import FeaturedCarousel from "./-FeaturedCarousel";
import { useDashboardStore } from "@/stores/dashboardStore";
import FeaturedHero from "./-FeaturedHero";
import { useEffect } from "react";
import AnimeDisplayType from "./-AnimeDisplayType";

export default function Dashboard() {
  const { data: animelists, error, isLoading } = useFetchAnime();
  console.log("testing");
  console.log(animelists);
  const { selectedAnime, setSelectedAnime } = useDashboardStore();

  // useEffect(() => {
  //   if (!selectedAnime && animelists) {
  //     console.log("selected anime set to results[0]");
  //     setSelectedAnime(animelists.results[0]);
  //   }
  // }, []);

  useEffect(() => {
    if (animelists) {
      setSelectedAnime(animelists.results[0]);
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>error</p>
      </div>
    );
  }

  if (animelists) {
    console.log("SELECTED ANIME: ", selectedAnime);
    return (
      <div className=" overflow-x-hidden">
        <div className="relative h-screen w-screen justify-end items-end z-0">
          <FeaturedHero
            animelist={animelists}
            anime={selectedAnime ?? animelists.results[0]}
          />
        </div>
        <AnimeDisplayType />
      </div>
    );
  }
}
