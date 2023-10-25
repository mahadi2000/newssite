import ns1 from '../img/ns1.jpg'
import ns2 from '../img/ns2.jpg'
import ns9 from '../img/ns9.jpg'
import ns7 from '../img/ns7.jpeg'
import ns6 from '../img/ns6.jpg'
import girlimg from '../img/girlstock.jpg'
import NewsSectionStory from './NewsSection/NewsSectionStory'

const NewsSection = () => {

const des="In an event that tech enthusiasts and gadget lovers eagerly await each year, major tech companies came together at the Annual Innovation Expo to showcase their latest innovations and cutting-edge technology. The stage was set for the unveiling of next-generation gadgets and innovations that promise to shape the future of the tech industry.This year's expo, held at a sprawling convention center, was nothing short of a spectacle. The tech giants spared no expense in creating awe-inspiring exhibits that highlighted their advancements in various fields, from artificial intelligence and virtual reality to augmented reality and green energy solutions.";

  return <div className="flex gap-2 m-12 mx-auto w-[80vw] left-[5%] right-[5%] font-serif justify-center max-md:block">
    <div className="border-t-2 border-black w-full max-md:w-full">
      <div className="font-bold text-white bg-black border-t-2 border-black inline-block p-1 text-xs px-2"><h2>Editors's Pick</h2></div>

      {/* <div className="m-12 w-10/12 left-[5%] right-[5%] justify-center max-md:w-full">
    <div className="border-t-2 border-black">
      <div className="font-bold text-white bg-black border-t-2 border-black inline-block p-1 text-xs px-2">
        <h2>Editors`s Picks</h2>
      </div> */}


      <div className="flex mt-4 max-md:block">
        <img className="w-11/12 h-max" src={ns6} alt="" />
        <div className="w-6/12 pl-6 max-md:w-full max-md:pl-0">
          <p className="text-xs"> The Tech Retrospective</p>
          <h2 className="text-3xl font-extrabold pt-1">Tech Giants Unveil Next-Gen Gadgets at Annual Innovation Expo</h2>
          <p className="text-xs font-semibold pt-2">Harper Reed</p>
          <p className="text-sm pt-2">{des}</p>
        </div>
      </div>

      <div className="flex border-t-2 my-4 pt-4 max-md:block">

        <NewsSectionStory category="HEALTH" title="Breakthrough in Cancer Research: New Drug Shows Promise in Clinical Trials" img={ns1}></NewsSectionStory>
        <NewsSectionStory category="GLOBAL" title="Global Leaders Gather for Climate Summit to Address Climate Crisis" img={ns2}></NewsSectionStory>
        <NewsSectionStory category="CULTURE" title="Record-breaking Art Auction Sees Price Soar for Masterpiece Painting" img={ns9}></NewsSectionStory>
        <NewsSectionStory category="TECHNOLOGY" title="Major Breakthrough in Renewable Energy Technology" img={ns7}></NewsSectionStory>


      </div>

    </div>



  </div>
}

export default NewsSection