import React from "react";
import ArticleList from "../components/ArticleList";

import Filters from "../components/Filters";

const Home = () => {
  return (
    <div>
      <Filters />
      <ArticleList />
    </div>
  );
};

export default Home;
