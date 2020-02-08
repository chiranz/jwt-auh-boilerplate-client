import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./accessToken";

interface Props {}

export const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      credentials: "include",
      method: "post"
    }).then(async x => {
      const data = await x.json();
      setAccessToken(data.accessToken);
    });
    setLoading(false);
  }, []);

  if (loading) return <div>Loading....</div>;
  return <Routes />;
};
