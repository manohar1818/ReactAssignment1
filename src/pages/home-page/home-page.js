import React from "react";
import HomeTemplate from "../../components/templates/t_home/t_home";
import Header from "../../components/organisms/o_header/o_header";
import MainComponentRouter from "../../components/organisms/o_router/o_router";

const HomePage = () => {
  return (
   
      <HomeTemplate
        header={<Header></Header>}
        mainContent={<MainComponentRouter></MainComponentRouter>}
      ></HomeTemplate>
    
  );
};

export default HomePage;
