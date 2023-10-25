import MostRecent from './TopNews/MostRecent'
import TodayPicksBg from './TopNews/TodayPicksBg'
import TodayPicksSm from './TopNews/TodayPicksSm'
import ns1 from '../img/ns1.jpg'
import ns2 from '../img/ns2.jpg'
import ns3 from '../img/ns3.jpg'
import ns4 from '../img/ns4.jpg'
import ns5 from '../img/ns5.jpg'
import ns6 from '../img/ns6.jpg'
import ns7 from '../img/ns7.jpeg'

const TopNews = () => {
{/*Today's Pick*/}
    return (
    <div className="flex gap-2 m-12 mx-auto w-[80vw] left-[5%] right-[5%] justify-center font-serif max-md:block">
    <div className="border-t-2 border-black w-9/12 max-md:w-full">
      <div className="font-bold text-white bg-black border-t-2 border-black inline-block p-1 text-xs px-2"><h2>Today's Pick</h2></div>
      <div className="flex gap-2 pt-4 max-md:block">
        {/* Middle Left */}
        <div className="h-auto w-5/12 max-md:flex max-md:gap-4 max-md:w-full">
          <TodayPicksSm category="SCIENCE" title="Breakthrough in Cancer Research: New Drug Shows Promise in Clinical Trials" author="Olivia Anderson" img={ns1}></TodayPicksSm>
          <TodayPicksSm category="SCIENCE" title="Global Leaders Gather for Climate Summit to Address Climate Crisis" author="Benjamin Walker" img={ns2}></TodayPicksSm>
        </div>
        {/* Middle Right */}
        <TodayPicksBg></TodayPicksBg>

      </div>
    </div>


{/*Most Recent*/}
    <div className="border-l-2 w-3/12 pl-2 max-md:w-full max-md:border-l-0 max-md:pl-0">
      <div className="border-t-2 border-black">
        <div className="font-bold text-white bg-black border-black inline-block p-2 text-xs px-2"><h2>Most Recent</h2></div>
        <div className="max-md:gap-2">

        <MostRecent title="Space Exploration Milestone: NASA's Rover Discovers Signs of Ancient Life on Mars" author="Daniel Mitchell" img={ns4}></MostRecent>
        <MostRecent title="Historic Peace Agreement Reached in Long-standing Conflict" author="Ava Carter" img={ns5}></MostRecent>
        <MostRecent title="Tech Giants Unveil Next-Gen Gadgets at Annual Innovation Expo" author="Jackson Wilson" img={ns6}></MostRecent>
        <MostRecent title="Major Breakthrough in Renewable Energy Technology" author="Isabella Martinez" img={ns7}></MostRecent>
        </div>

      </div>
    </div>

  </div>
  )
}

export default TopNews