import girlimg from '../../img/girlstock.jpg'

const TrendingStory = (props) => {
    return <div className='max-md:border-b-2  max-md:mb-2'>
    <img className="w-full h-2/4 max-md:w-[40%]" src={props.img} alt="" />
    <p className="text-xs pt-2">{props.category}</p>
    <h2 className="text-md font-bold">{props.title}</h2>
    <p className="text-xs py-2">{props.description}</p>
    <p className="text-xs font-semibold py-1">{props.author}</p>
  </div>
}

export default TrendingStory