import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

//Need to remove below comment
//const useGenres = () => useData<Genre>('/genres');

//Need to Remove below code later
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}



const useGenres = () => {
    const [data, setGenres] = useState<Genre[]>([]);
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
            ...data,
            { id: 1, name: 'Action', image_background:'https://source.unsplash.com/collection/190727/600x400?1'},
            { id: 2, name: 'Adventure',image_background:'https://source.unsplash.com/collection/190727/600x400?2' },
            { id: 3, name: 'Role-Playing', image_background:'https://source.unsplash.com/collection/190727/600x400?3' },
            { id: 4, name: 'Shooter', image_background:'https://source.unsplash.com/collection/190727/600x400?4' },
            { id: 5, name: 'Strategy', image_background:'https://source.unsplash.com/collection/190727/600x400?5' },
            { id: 6, name: 'Simulation' , image_background:'https://source.unsplash.com/collection/190727/600x400?6' },
          ]);
        });
  
      return () => controller.abort();
    }, []);
  
    return { data, error, isLoading };
};

//need to remove above code

export default useGenres;