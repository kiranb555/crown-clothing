import React from "react";
import Directory from "../../components/directory/directory.component.jsx";

import HomePageContainer from './homepage.styles.jsx';

const HomePage = props => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
