import logo from '../img/Retrospect-logos_transparent.png'
import menu from '../img/menu-icon.png'
import cross from '../img/cross.png'
import search from '../img/search-icon.png'


const Navbar = (props) => {
  let drawerbutton;
  if (props.isDrawerOpen) {
    drawerbutton = <button className="" onClick={props.onDrawerClose}>
      <img className='h-3 w-auto mx-3' src={cross} alt="" />
    </button>
  }
  else {
    drawerbutton = <button className="" onClick={props.onDrawerOpen}>
      <img className='h-3 w-auto mx-3' src={menu} alt="" />
    </button>
  }

  return <nav className="flex flex-row gap-2 border-y-neutral-300 border-b-2 w-auto overflow-hidden h-12 flex-shrink-0 justify-between font-serif text-xs">
    <div className="flex items-center flex-shrink-0">
      {drawerbutton}


      <a href='/'><img className='h-7 w-auto pl-2' src={logo} alt="" /></a>
{!props.isDrawerOpen && <ul className="flex gap-3 ml-6 max-md:hidden">
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">BACKCHANNEL</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">BUSINESS</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">CULTURE</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">GEARS</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">IDEAS</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">SCIENCE</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">SECURITY</a></li>
        <li><a className=" hover:text-cyan-600 hover:underline" href="/">MERCH</a></li>
      </ul>}
      
    </div>

    <div className="flex flex-shrink-0 items-center">
      <a className="mr-2 hover:text-cyan-600 hover:underline" href="/">SIGN IN</a>
      <div className="flex border-l-2 border-y-neutral-500 flex-shrink-0 items-center">
        <button className="rounded-sm ml-2 bg-cyan-800 text-white p-1 px-2 text-xs h-6 w-auto">SUBSCRIBE</button>
        <button><img className='h-4 w-auto mx-2' src={search} alt="" /></button>
      </div>
    </div>
  </nav>
}

export default Navbar