import ns8 from '../img/ns8.jpg'
import ns9 from '../img/ns9.jpg'
import ns4 from '../img/ns4.jpg'
import ns5 from '../img/ns5.jpg'

import TrendingStory from './TrendingStories/TrendingStory'

 const TrendingStories = () =>{
    return <div className="m-12 mx-auto w-[80vw] left-[5%] font-serif right-[5%] justify-center">
    <div className="border-t-2 border-black w-full">
      <div className="flex">
        <div className="font-bold text-white bg-black border-t-2 border-black inline-block p-1 text-xs px-2">
          <h2>Trending Stories</h2>
        </div>
        <p className="pt-2 pl-2 font-bold text-xs">Top Stories in Last 48 Hours</p>
      </div>

      <div className="flex pt-4 gap-6 max-md:block">
        <TrendingStory category="SCIENCE" title="World Health Organization Declares New Vaccine Highly Effective Against Emerging Virus" description="In a remarkable turn of events, the global economy is experiencing a robust resurgence, marked by a remarkable surge." author="Isabella Martinez" img={ns8}></TrendingStory>
        <TrendingStory category="SCIENCE" title="Record-breaking Art Auction Sees Price Soar for Masterpiece Painting" description="In a remarkable turn of events, the global economy is experiencing a robust resurgence, marked by a remarkable surge." author="Ethan Turner" img={ns9}></TrendingStory>
        <TrendingStory category="SCIENCE" title="Space Exploration Milestone: NASA's Rover Discovers Signs of Ancient Life on Mars" description="In a remarkable turn of events, the global economy is experiencing a robust resurgence, marked by a remarkable surge." author="Mia Cooper" img={ns4}></TrendingStory>
        <TrendingStory category="SCIENCE" title="Historic Peace Agreement Reached in Long-standing Conflict" description="In a remarkable turn of events, the global economy is experiencing a robust resurgence, marked by a remarkable surge." author="Liam Davis" img={ns5}></TrendingStory>
      </div>

    </div>



  </div>
 }
 
 export default TrendingStories