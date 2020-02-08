import React from "react";
import { useHelloQuery } from "./generated/graphql";

const App = () => {
  const { data, loading } = useHelloQuery();
  if (loading || !data) return <h1>Loading...</h1>;
  return <h1>{data.hello}</h1>;
};

export default App;
