import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const App = () => {
  const { data, loading } = useQuery(gql`
    {
      hello
    }
  `);
  if (loading) return <h1>Loading...</h1>;
  return <h1>{JSON.stringify(data)}</h1>;
};

export default App;
