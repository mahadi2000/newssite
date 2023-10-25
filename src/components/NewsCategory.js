import girlimg from '../img/girlstock.jpg'

const NewsCategory = (props) => {
return <div className="p-4">
<div className="font-bold text-white bg-black font-serif border-t-2 border-black inline-block p-1 text-xs px-2">
  <h2>{props.category}</h2>
</div>
<img className="w-full h-auto" src={props.img} alt="" />
<p className="text-sm font-semibold border-b-2 py-3">{props.news1}</p>
<p className="text-sm font-semibold border-b-2 py-3">{props.news2}</p>
<p className="text-sm font-semibold border-b-2 py-3">{props.news3}</p>
</div>

}

export default NewsCategory