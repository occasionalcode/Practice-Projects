import { useFetchAnime } from "@/api/anime-fetch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselFeatured";
import AnimeCards from "./components/-AnimeCards";
import { useDashboardStore } from "@/stores/dashboardStore";
import { AnimeLists } from "@/types/anime-types";

type FeaturedCarouselProps = {
  animelist: AnimeLists;
};

export default function FeaturedCarousel({ animelist }: FeaturedCarouselProps) {
  //   const { selectedItemID, setSelectedItemID } = useDashboardStore();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-2/3   z-40 "
    >
      <div className="flex flex-col ">
        <div className="flex flex-row justify-left gap-5 items-end">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <p className="my-4">Trending now</p>
        <CarouselContent className="-ml-7">
          {animelist.results.map((anime) => {
            return (
              <CarouselItem key={anime.id} className="pl-7 basis-1/6">
                <AnimeCards anime={anime} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
