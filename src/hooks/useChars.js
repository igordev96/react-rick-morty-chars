import axios from "axios";
import { useQuery } from "react-query";

export default function useChars(page) {
  const getCharacters = async ({ queryKey }) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return res.data;
  };

  return useQuery(["characters", page], getCharacters, {
    keepPreviousData: true,
  });
}
