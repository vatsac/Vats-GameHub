import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setGames([
          ...games,
          {
            id: 1,
            name: "Grand Theft Auto V",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?1",
          },
          {
            id: 2,
            name: "The Witcher 3: Wild Hunt",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?2",
          },
          {
            id: 3,
            name: "Portal 2",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?3",
          },
          {
            id: 4,
            name: "Red Dead Redemption 2",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?4",
          },
          {
            id: 5,
            name: "The Last of Us Part II",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?5",
          },
          {
            id: 6,
            name: "God of War",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?6",
          },
          {
            id: 7,
            name: "Horizon Zero Dawn",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?7",
          },
          {
            id: 8,
            name: "Assassin's Creed Valhalla",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?8",
          },
          {
            id: 9,
            name: "Final Fantasy VII Remake",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?9",
          },
          {
            id: 10,
            name: "Minecraft",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?10",
          },
          {
            id: 11,
            name: "Call of Duty: Modern Warfare",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?11",
          },
          {
            id: 12,
            name: "The Elder Scrolls V: Skyrim",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?12",
          },
          {
            id: 13,
            name: "Cyberpunk 2077",
            background_image:
              "https://source.unsplash.com/collection/190727/800x600?13",
          },
        ]);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
