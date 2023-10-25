import girlimg from '../../img/girlstock.jpg'

const NewsSectionStory = (props) => {
    return <div className="flex border-r-2 pr-4 w-full pb-4 mr-4 max-md:border-r-0 max-md:border-b-2 max-md:pt-3">
        <div>
            <p className="text-xs">{props.category}</p>
            <h3 className="text-sm font-bold pr-1 mt-1">{props.title}</h3>
        </div>
        <img className="h-16 w-16" src={props.img} alt="" />
    </div>

}

export default NewsSectionStory