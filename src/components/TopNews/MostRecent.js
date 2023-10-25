import girlimg from '../../img/girlstock.jpg'

const MostRecent = (props) => {
    return <div className="flex pt-4 border-b-2 max-md:block">
    <div className="w-7/12 max-md:w-10/12">
    <p className="text-sm font-bold pb-2 overflow-hidden max-md:max-h-28 max-md:mb-0">{props.title}</p>
    <p className="text-xs max-sm:mb-2">{props.author}</p>
    </div>
      <div className="p-6 w-5/12 max-md:p-0 max-md:pb-2 max-md:w-full"><img className="h-16 w-18" src={props.img} alt="" /></div>
    </div>
}

export default MostRecent