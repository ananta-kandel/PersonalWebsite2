import React from 'react'
// import logo from '../1.png'
import personalImage from '../images/dev-ed-wave.png'
import node from '../images/nodejs.webp'
import docker from '../images/docker.png'
import { MoonStar } from 'lucide-react';
import ImgMediaCard from './Card';

function Maincontent() {
  const handleclick = () =>{
    
  }
  return (
    <div className= 'sidebar overflow-scroll m-[1rem] h-[95vh] md:w-[80vw] w-[90vw] text-[#818086]'>
        {/* <div className='m-[1rem] sticky top-0 h-[5vh]  flex justify-between '>
          <div className='flex'>
            <div className='bg-[green] h-4 w-4 m-2 rounded-full '></div>
            <div className='bg-[green] h-4 w-4 m-2 rounded-full '></div>
          </div>
          <div>
          <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-lg ml-8 text-white"href='https://google.com'>Contact Me</a>
          </div>
          
        </div> */}
        <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between '>
         <h1 className='font-burtons text-xl'>DEVELOPER</h1>
         <ul className='flex items-center'>
           <li>
             <MoonStar onClick={handleclick()} className='cursor-pointer text-2xl' />
           </li>
           <li>
             <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-lg ml-8 text-white"href='https://google.com'>Resume</a>
           </li>
         </ul>
      </nav>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-white font-medium'>Ananta kandel</h2>
        <h3 className='text-2xl py-2'>Developer</h3>
        <p className='text-xl py-5 leading-8'>Learning and inspiring other</p>
      </div>
      <div className='relative flex justify-center items-center '>
        <img src={personalImage} className='object-fill bg-gradient-to-b from-teal-500 rounded-full h-80 w-80'>
        </img>
      </div>
      {/* for frontend */}
      <p className='text-2xl text-white'>Frontend</p>
    <div className='flex flex-wrap p-100'>
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
    </div>
   
    {/* for Backend */}
    <p className='text-2xl text-white'>Backend</p>
    <div className='flex flex-wrap p-100'>
     <ImgMediaCard text="Node Js" link={node} />
     <ImgMediaCard text="Node Js" link={node} />
     <ImgMediaCard text="Node Js" link={node} />
     <ImgMediaCard text="Node Js" link={node} />
    </div>
     

    {/* for database */}
    <p className='text-2xl text-white'>Database</p>
    <div className='flex flex-wrap p-100'>
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
     <ImgMediaCard text="HTML, CSS" link="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=3840&q=75" />
    </div>

    {/* for Devops */}
    <p className='text-2xl text-white strong'>DevOps</p>
    <div className='flex flex-wrap p-100'>
     <ImgMediaCard text="Docker" link={docker} />
     <ImgMediaCard text="Docker" link={docker} />
     <ImgMediaCard text="Docker" link={docker} />
     <ImgMediaCard text="Docker" link={docker}/>
    </div>
    </section>
        
    </div>
  //   <div className= 'sidebar overflow-scroll m-[1rem] h-[95vh] md:w-[80vw] w-[90vw]'>
  //   <main >
  //     <section>
  //        <nav>
  //         <h1>Ananta kandel</h1>
  //         <ul>
  //           <li>
  //             <MoonStar />
  //           </li>
  //           <li>
  //             <a href='#'>Resume</a>
  //           </li>
  //         </ul>
  //        </nav>
  //     </section>
  //   </main>
  //   </div>
  )
}

export default Maincontent