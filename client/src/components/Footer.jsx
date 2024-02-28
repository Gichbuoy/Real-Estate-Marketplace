// This file contains  the footer
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Footer() {
  const {currentUser} = useSelector(state => state.user);



  return (
    <footer className='bg-slate-300 shadow-md mt-auto'>
      <div className='flex flex-wrap justify-between items-center max-w-6xl mx-auto p-3'>
        
        <div className='flex sm:flex-wrap gap-4 sm:gap-2'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>FindMy</span>
                <span className='text-green-700'>Home</span>
            </h1>
            </Link>
            <Link to='/profile'>
                {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>
            ): (
                <li className='text-slate-700 hover:underline'>Sign In</li>
                )}
            </Link>
            
            

        </div>


        <div className='flex flex-col'>
          <h4></h4>
          <a href="/" className='text-slate-700 hover:underline'>Terms of Service</a>
          <a href="/" className='text-slate-700 hover:underline'>Privacy Policy</a>
          <a href="/" className='text-slate-700 hover:underline'>License</a>
          <a href="/" className='text-slate-700 hover:underline'>Blogs</a>
        </div>
        
        <div className=''>
            <ul className='flex flex-col gap-2'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                Home
                </li>
            </Link>
            <Link to='/about' onClick={() => window.scrollTo(0, 0)}>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                About
                </li>
            </Link>

            <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                Contact Us
                </li>
            </Link>
            
            </ul>
        </div>
      </div> 
    </footer>
  )
}
