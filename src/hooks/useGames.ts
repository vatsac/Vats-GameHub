import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    
     setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        setGames([
          ...games,
          {
            id: 1,
            name: 'Grand Theft Auto V',
            background_image: 'https://source.unsplash.com/collection/190727/800x600?1',
            parent_platforms: [
                { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
                { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
                { platform: { id: 3, name: 'PC', slug: 'pc' } }
            ],
            metacritic: 95
        },
        {
            id: 2,
            name: 'The Witcher 3: Wild Hunt',
            background_image: 'https://source.unsplash.com/collection/190727/800x600?2',
            parent_platforms: [
                { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
                { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
                { platform: { id: 3, name: 'PC', slug: 'pc' } }
            ],
            metacritic: 93
        },
        {
            id: 3,
            name: 'Portal 2',
            background_image: 'https://source.unsplash.com/collection/190727/800x600?3',
            parent_platforms: [
                { platform: { id: 3, name: 'PC', slug: 'pc' } }
            ],
            metacritic: 89
        },
        {
          id: 4,
          name: 'Red Dead Redemption 2',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?4',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
              { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
              { platform: { id: 3, name: 'PC', slug: 'pc' } }
          ],
          metacritic: 87
      },
      {
          id: 5,
          name: 'The Last of Us Part II',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?5',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } }
          ],
          metacritic: 69
      },
      {
          id: 6,
          name: 'God of War',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?6',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } }
          ],
          
            metacritic: 71
      },
      {
          id: 7,
          name: 'Horizon Zero Dawn',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?7',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } }
          ],
          
            metacritic: 95
      },
      {
          id: 8,
          name: 'Assassin\'s Creed Valhalla',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?8',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
              { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
              { platform: { id: 3, name: 'PC', slug: 'pc' } }
          ],
          
            metacritic: 95
      },
      {
          id: 9,
          name: 'Final Fantasy VII Remake',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?9',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } }
          ],
          
            metacritic: 95
      },
      {
          id: 10,
          name: 'Minecraft',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?10',
          parent_platforms: [
              { platform: { id: 3, name: 'PC', slug: 'pc' } },
              { platform: { id: 4, name: 'Nintendo', slug: 'nintendo' } },
              { platform: { id: 5, name: 'Xbox', slug: 'xbox' } },
              { platform: { id: 6, name: 'PlayStation', slug: 'playstation' } }
          ],
          
            metacritic: 95
      },
      {
          id: 11,
          name: 'Call of Duty: Modern Warfare',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?11',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
              { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
              { platform: { id: 3, name: 'PC', slug: 'pc' } }
          ],
          
            metacritic: 95
      },
      {
          id: 12,
          name: 'The Elder Scrolls V: Skyrim',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?12',
          parent_platforms: [
              { platform: { id: 3, name: 'PC', slug: 'pc' } },
              { platform: { id: 6, name: 'PlayStation', slug: 'playstation' } },
              { platform: { id: 5, name: 'Xbox', slug: 'xbox' } }
          ],
          
            metacritic: 95
      },
      {
          id: 13,
          name: 'Cyberpunk 2077',
          background_image: 'https://source.unsplash.com/collection/190727/800x600?13',
          parent_platforms: [
              { platform: { id: 1, name: 'PlayStation', slug: 'playstation' } },
              { platform: { id: 2, name: 'Xbox', slug: 'xbox' } },
              { platform: { id: 3, name: 'PC', slug: 'pc' } }
          ],
          
            metacritic: 95
      }
        ]);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
