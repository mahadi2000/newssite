import { useState } from 'react'

import NewsCategory from "./components/NewsCategory";
import NewsSection from "./components/NewsSection";
import TopNews from "./components/TopNews";
import TrendingStories from "./components/TrendingStories";
import Navbar from "./components/navBar";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

import ns1 from './img/ns1.jpg'
import ns2 from './img/ns2.jpg'
import ns3 from './img/ns3.jpg'
import ns4 from './img/ns4.jpg'
import ns5 from './img/ns5.jpg'
import ns6 from './img/ns6.jpg'

function App() {
  const [DrawerOpened, setdrawerOpened] = useState(false);

  const drawerOpenedHandler = () => {
    setdrawerOpened(true);
    console.log("drawer opened");
  }

  const drawerClosedHandler = () => {
    setdrawerOpened(false);
    console.log("drawer closed");
  }


  return (
    <>
      <Navbar onDrawerOpen={drawerOpenedHandler} onDrawerClose={drawerClosedHandler} isDrawerOpen={DrawerOpened}></Navbar>
      {DrawerOpened ? <Drawer /> : <>
        <TopNews></TopNews>
        <TrendingStories></TrendingStories>
        <NewsSection></NewsSection>

        <div className="m-12 mx-auto w-[80vw] left-[5%] right-[5%] justify-center max-md:w-full">
          {/*First Row*/}
          <div className="flex max-md:block">
            <NewsCategory category="HEALTH" img={ns1} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
            <NewsCategory category="CLIMATE" img={ns2} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
            <NewsCategory category="BUSINESS" img={ns3} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
          </div>
          {/*Second Row*/}
          <div className="flex max-md:block">
            <NewsCategory category="SCIENCE" img={ns4} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
            <NewsCategory category="GLOBAL" img={ns5} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
            <NewsCategory category="TECHNOLOGY" img={ns6} news1="Researchers Discover New Species of Bioluminescent Deep-Sea Creatures" news2="Study Finds Link Between Gut Microbiome and Mental Health" news3="First-Ever Direct Image of an Exoplanet Reveals Alien World's Unique Features"></NewsCategory>
          </div>
        </div>

        <div className="bg-[url('./img/bgart.jpg')] bg-cover p-8 font-serif flex items-center justify-center">
          <div className="bg-white p-6 py-20 flex gap-18 w-3/6 rounded-lg max-md:w-full max-md:block">
            <div className="">
              <h2 className="font-extrabold text-3xl">Sign Up For Our Daily Newsletter</h2>
              <p className="text-xs pt-1"> See our top stories before anyone else for free.</p>
            </div>
            <div className="max-md:mt-6">
              <div className="flex">
                <input type="email" placeholder="Your Email Address..." className="border-[1px] border-zinc-400 rounded-sm p-2 w-full"></input>
                <button className="text-white bg-black p-2 text-xs ml-2 px-4 font-semibold rounded-sm">SUBMIT</button>
              </div>
              <p className="pt-2 text-[10px] text-zinc-500">By signing up you agree to our User Agreement (including the class action waiver and arbitration provisions)</p>
            </div>
          </div>
        </div>

        <Footer /></>}









    </>

  );
}

export default App;
