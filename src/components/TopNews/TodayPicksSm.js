import girlimg from '../../img/girlstock.jpg'

const TodayPicksSm = (props) => {
    return <div>
    <img className="w-full h-auto" src={props.img} alt="" />
    <p className="text-xs pt-2">{props.category}</p>
    <h2 className="text-md font-bold">{props.title}</h2>
    <p className="text-xs font-semibold py-2">{props.author}</p>
  </div>

}

export default TodayPicksSm