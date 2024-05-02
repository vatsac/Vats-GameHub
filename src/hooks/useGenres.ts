import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      
       setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        })
        .finally(() => {
          setGenres([
            ...genres,
            { id: 1, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 3, name: 'Role-Playing' },
            { id: 4, name: 'Shooter' },
            { id: 5, name: 'Strategy' },
            { id: 6, name: 'Simulation' },
          ]);
        });
  
      return () => controller.abort();
    }, []);
  
    return { genres, error, isLoading };
};

export default useGenres;