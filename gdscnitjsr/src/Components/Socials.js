import React from 'react';
import swiggly1 from '../assets/swiggly1.jpg';
import leftbracket from '../assets/gdsc bracket left.jpg';
import rightbracket from '../assets/gdsc bracket right.jpg';
import github from '../assets/Github.jpg';
import instagram from '../assets/Instagram.jpg'
import linkedIn from '../assets/Linkedin.jpg'
import mail from '../assets/Mail.jpg'
import swiggly7 from '../assets/swiggly7.jpg'
import group from '../assets/Group.jpg'
import circle from '../assets/circle.jpg'
import rectangle from '../assets/rectangle.jpg'

function Socials() {
  return (
    <div className='' id="socials">

<div className='absolute inset-0'>
  <img className="w-[112.19px] h-[110.66px] absolute  mt-[44.77px] transform rotate-31" src={swiggly1} alt=''/>
</div>



<div className='flex justify-center mt-[100px]'>
<div className='flex justify-center  w-[335px] h-[79px]  '>
 {/* absolute top-[100px] left-[552px] */}
       
           <div>
          <img className="w-[29.68px] h-[24.46px]" src={leftbracket} alt=''/>
        </div>

        <div > 
           <h2 className='w-[167px] h-[79px] relative mt-[-10px] font-patrick-hand text-4xl font-normal  tracking-normal text-center'>Socials</h2>
        </div>

        <div>
          <img className="w-[29.68px] h-[24.46px] " src={rightbracket} alt=''/>
        </div>
      
      </div>
</div>
 
 <div className='flex justify-center mt-[-30px]'>
    <p className=' w-[826px] h-[35px]  font-lato text-base font-normal leading-6 text-center text-gray-600'>
        Let’s stay in touch so that you don’t miss out on exciting updates.
       
          
        </p>   
      </div>


 
     
      

     <div className=''>
      <div className='flex justify-center mt-[20px] '>


<div className='relative'>
  <a href="https://github.com/Vishal1092003">
    <img
      src={github}
      className='w-[49.56px] h-[49.34px]'
      
    />
  </a>
</div>

        <div className='relative' >
        <a href='https://www.instagram.com/gdsc_nitjsr/'>
           <img src={instagram} className='w-[49.56px] h-[49.34px] ml-10'/>
             
        </a>
          
        </div>

        <div className='relative'>

        <a href='https://www.linkedin.com/company/gdsc-nit-jamshedpur/'>
               <img src={linkedIn}  className='w-[49.56px] h-[49.34px] ml-10'/>     
        </a>
        </div>
        <div className='relative'>
        <a href='https://github.com/Vishal1092003'>
     
                       <img src={mail}  className='w-[49.56px] h-[49.34px] ml-10' />

        </a>
        </div>

      </div>
     </div>
      
     
      
      

      <div className='flex  '>
        <div>
          <img src={swiggly7} className=' w-[220.62px] h-[180.73px]  '/>
        </div>
        <div className='' >
          <img src={group} className='w-[120px] h-[120] absolute right-0 top-[325px] ' />
        </div>
      </div>

       <div className=' absolute ml-[270px] mt-[-180px]'>
           <img src={circle} className="w-[78px] h-[79px] "  />
       </div>
    

    <div>
    <div className='absolute mt-[-315px] ml-[850px] '>
             <img src={rectangle} className='w-[43px] h-[38px]'/> 
    </div>
    
    </div>


      
    </div>
  );
}

export default Socials;
