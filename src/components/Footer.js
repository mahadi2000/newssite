import logo from '../img/Retrospect-logos_white.png'
import fb from '../img/fb_white.png'
import xlogo from '../img/X_white.png'
import insta from '../img/insta_white.png'
import pin from '../img/pin_white.png'
import youlogo from '../img/You_white.png'

const Footer= () =>{
    return (
        <div className="text-white bg-black px-40 py-8 font-serif text-xs mt-16 max-md:px-10">
        <div className="flex gap-36 border-b-2 border-zinc-800 pb-6 max-md:block">
          <div className="w-6/12 max-md:w-full">
            <img className="h-8 w-auto mb-4 max-md:" alt=""  src={logo}></img>
            <p className="font-semibold">RETROSPECT is where tomorrow is realized. It is the essential source of information and ideas that make sense of a world in constant transformation. The RETROSPECT conversation illuminates how technology is changing every aspect of our lives—from culture to business, science to design. The breakthroughs and innovations that we uncover lead to new ways of thinking, new connections, and new industries.</p>
            <ul className="pt-10 inline-flex gap-8 max-md:pb-6">
              <li><img className="h-6 w-auto" alt=""  src={fb}></img></li>
              <li><img className="h-6 w-auto" alt=""  src={xlogo}></img></li>
              <li><img className="h-6 w-auto" alt=""  src={insta}></img></li>
              <li><img className="h-6 w-auto" alt=""  src={pin}></img></li>
              <li><img className="h-6 w-auto" alt=""  src={youlogo}></img></li>
            </ul>
          </div>
          <ul className=''>
            <p className="font-bold"> MORE FROM RETROSPECT</p>
            <br/>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Subscribe</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Newsletters</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Reviews</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>FAQ</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Archive</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Coupons</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>About</a></li>
          </ul>

          <ul className="max-md:mt-3">
            <p className="font-bold">CONTACT US</p>
            <br/>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Advertise</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Contact</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Jobs</a></li>
            <li><a className='font-light text-zinc-500 hover:underline' href='/'>Customer Support</a></li>
          </ul>
        </div>
        <p className="text-[9px] font-thin pt-5 text-zinc-500" >© 2023 M.A.Hadi All rights reserved. Viweing of this site constitutes acceptance of my Non-Existant User Agreement and Privacy Policy and Cookie Statement. Retrospect does not earn any portion of ad sales from products that are purchased through our site as part of my Affiliate Partnerships with retailers. The material on this site may not be copyright-free as they are taken from google images.</p>
      </div>
    )
}

export default Footer