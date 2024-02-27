

import Llogo from '../img/gdsc bracket left.svg'
import Rlogo from '../img/gdsc bracket right.svg'
import Image from '../img/image.png'

function About() {
    return (
      <div className="About flex flex-col items-center md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%]" id='about'>
        <div className="flex justify-center items-center">
        {/* <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.5668 53.1293L95.3785 43.0388C100.732 40.6829 102.594 35.4377 99.5102 31.3037C96.426 27.1697 89.5592 25.7917 84.1473 28.1476L44.6923 45.5281L72.5668 53.1293Z" fill="#EA4335"/>
<path d="M89.7338 79C93.6327 79 97.4153 77.4442 99.452 74.6882C102.536 70.5987 100.732 65.3534 95.3203 62.953L55.8654 45.5726C50.5116 43.2166 43.6448 44.5946 40.5024 48.7286C37.4182 52.8181 39.2222 58.0634 44.6341 60.4638L84.0891 77.8442C85.8931 78.5999 87.8716 79 89.7338 79Z" fill="#4285F4"/>
</svg> */}
<img src={Llogo}/>
<h1 className=" font-Patrick sm:text-[64px] text-[30px] " >About Us</h1>
            {/* <svg width="62" height="52" viewBox="0 0 62 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2977 52C13.2213 52 15.1449 51.6441 16.8937 50.8433L56.4147 33.4479L28.9015 25.7513L5.70185 35.9838C0.339111 38.3418 -1.52619 43.5915 1.56321 47.729C3.60338 50.4429 7.39227 52 11.2977 52Z" fill="#FBBC04"/>
<path d="M50.7605 34.5602C54.666 34.5602 58.4549 33.003 60.4951 30.2892C63.5845 26.1961 61.7775 20.9464 56.3564 18.544L16.8937 1.14862C11.5309 -1.20932 4.65263 0.169853 1.50494 4.30737C-1.58446 8.40039 0.22254 13.6501 5.64357 16.0526L45.1646 33.4479C46.9133 34.2042 48.8369 34.5602 50.7605 34.5602Z" fill="#0F9D58"/>
</svg> */}
<img src={Rlogo}/>


            

        </div>
        <p className="sm:text-[24px] text-[16px] font-Lato  text-[#5F6368] self-center mt-[44px]
">Welcome to Google Developer Student Club NIT Jamshedpur, a welcoming community for students interested in technology and personal growth. We provide workshops, hackathons, and events led by Google to help you learn from your peers, work on real-world problems, and enhance your skills. Whether you're a beginner or an experienced professional, everyone is invited to join us. We look forward to having you in our community!</p>
   <img src={Image} className="h-[328px] w-[388px] mt-[75px]  "/>
      </div>

    );
  }
  
  export default About;
