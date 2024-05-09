
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
// import img5 from '../../../assets/images/banner/5.jpg';
// import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {



    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl " />
                <div className='absolute flex gap-6 h-full  transform -translate-y-1/2  top-1/2'>
                    <div className="flex flex-col justify-center pl-12 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  ">
                        <h2 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car <br /> Servicing</h2>
                        <p className='text-[18px] text-white my-12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8'>
                            <button className="btn btn-error text-white text-[18px] font-semibold ">Discover More</button>
                            <button className="btn btn-outline text-white text-[18px] font-semibold">Latest Projects</button>
                        </div>
                </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl " />
                <div className='absolute flex gap-6 h-full  transform -translate-y-1/2  top-1/2'>
                    <div className="flex flex-col justify-center pl-12 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                        <h2 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car <br /> Servicing</h2>
                        <p className='text-[18px] text-white my-12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8'>
                            <button className="btn btn-error text-white text-[18px] font-semibold ">Discover More</button>
                            <button className="btn btn-outline text-white text-[18px] font-semibold">Lastest Projects</button>
                        </div>
                </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl " />
                <div className='absolute flex gap-6 h-full  transform -translate-y-1/2  top-1/2'>
                    <div className="flex flex-col justify-center pl-12 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  ">
                        <h2 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car <br /> Servicing</h2>
                        <p className='text-[18px] text-white my-12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8'>
                            <button className="btn btn-error text-white text-[18px] font-semibold ">Discover More</button>
                            <button className="btn btn-outline text-white text-[18px] font-semibold">Lastest Projects</button>
                        </div>
                </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl " />
                <div className='absolute flex gap-6 h-full  transform -translate-y-1/2  top-1/2'>
                    <div className="flex flex-col justify-center pl-12 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  ">
                        <h2 className='text-6xl text-white font-bold '>Affordable Price <br /> For Car <br /> Servicing</h2>
                        <p className='text-[18px] text-white my-12'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8'>
                            <button className="btn btn-error text-white text-[18px] font-semibold ">Discover More</button>
                            <button className="btn btn-outline text-white text-[18px] font-semibold">Lastest Projects</button>
                        </div>
                </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <di className='absolute flex fle gap-6  transform -translate-y-1/2 left-5 right-5 top-1/2'v>
                <div>
                <h2>Affordable className='text-6xl text-white font-bold ' Price For <br /> Car Servicing <br /></h2></
                <p>There are many variations of passages o className='text-[18px my-12] text-white'f  available, but the majority have suffered alteration in some form</p>div
                <div className='flex gap-8'>
                <button className="btn btn-error">ErrorDiscover Morebutton></div text-white text-[18px] font-semibold 
                <button className="btn btn-outline">DefaultLastest Projectsbutton text-white text-[18px] font-semibold>>>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a h</div>ref="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <di className='absolute flex fle gap-6  transform -translate-y-1/2 left-5 right-5 top-1/2'v>
                <div>
                <h2>Affordable className='text-6xl text-white font-bold ' Price For <br /> Car Servicing <br /></h2></
                <p>There are many variations of passages o className='text-[18px my-12] text-white'f  available, but the majority have suffered alteration in some form</p>div
                <div className='flex gap-8'>
                <button className="btn btn-error">ErrorDiscover Morebutton></div text-white text-[18px] font-semibold 
                <button className="btn btn-outline">DefaultLastest Projectsbutton text-white text-[18px] font-semibold>>>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a h</div>ref="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;