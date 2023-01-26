import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  //   useSelector has no idea what type of data is inside the store
  const { data, error, loading } = useSelector((state) => state.reducer);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="term"
          placeholder="type in term"
        />
        <button type="submit">go!</button>
      </form>
      {loading && <span>loading...</span>}
      <h5>The data are as follows:</h5>
      <ul>{data && data.map((pack) => <li key={pack}>{pack}</li>)}</ul>
      {error && <span>Sorry, there was an error {error}</span>}
    </div>
  );
};

export default RepositoriesList;
