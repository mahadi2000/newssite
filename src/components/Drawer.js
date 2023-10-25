import fb from '../img/fb_black.png'
import xlogo from '../img/X_black.png'
import insta from '../img/insta_black.png'
import pin from '../img/pin_black.png'
import youlogo from '../img/You_black.png'

const Drawer = () => {
    return (
        <div className="mx-28 font-serif max-md:mx-5">
            <ul className="font-semibold text-2xl border-b-zinc-600 border-b-[1px] flex-col gap-6 pb-5">
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Backchannel</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Business</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Culture</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Gear</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Ideas</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Science</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Security</a></li>
                <li className="pt-4"><a className="hover:text-cyan-600 hover:underline" href="/">Merch</a></li>
            </ul>
            <ul className="py-4">
                <li><a href="/">Search</a></li>
                <li><a href="/">Sign in</a></li>
            </ul>
            <ul className="flex gap-5">
                <li><img className="h-7 w-auto" alt="" src={fb}></img></li>
                <li><img className="h-7 w-auto" alt="" src={xlogo}></img></li>
                <li><img className="h-7 w-auto" alt="" src={insta}></img></li>
                <li><img className="h-7 w-auto" alt="" src={pin}></img></li>
                <li><img className="h-7 w-auto" alt="" src={youlogo}></img></li>
            </ul>
        </div>
    )
}

export default Drawer