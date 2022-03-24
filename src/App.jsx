import { useState } from "react";
import useChars from "./hooks/useChars";

import Card from "./components/Card";
import { Buttons, Cards, StyledApp } from "./GlobalStyle";

function App() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useChars(page);

  return (
    <StyledApp>
      <h1>Ricky and Morty</h1>
      {!isLoading && (
        <Cards>
          {data.results.map((character) => (
            <Card
              key={character.id}
              image={character.image}
              location={character.location.name}
              species={character.species}
              status={character.status}
              name={character.name}
            />
          ))}
        </Cards>
      )}
      {!isLoading && (
        <Buttons>
          <button
            disabled={page === 1}
            onClick={() => setPage((old) => old - 1)}
          >
            Previous
          </button>
          <button
            disabled={page === data.info.pages}
            onClick={() => setPage((old) => old + 1)}
          >
            Next
          </button>
        </Buttons>
      )}
    </StyledApp>
  );
}

export default App;
