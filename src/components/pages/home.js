import * as React from 'react';
import homePage from '../../assets/HomePage.jpg';

function Home(){
    return(
        <div style={{width:"100%",height:"91vh",backgroundImage:`url(${homePage})`,backgroundSize:'cover'}}></div>
  );
}
export default Home;