import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-full xl:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4 '>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className=" w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex md:right-20 right-5 bottom-5 md:bottom-20 space-x-8 z-10">
                    <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full w-full flex items-center rounded-xl z-0 md:pl-20'>
                    <div className='w-full md:w-1/3'>
                        <h2 className='font-extrabold md:text-4xl text-white md:mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col md:flex-row justify-between md:space-x-3 space-y-2 md:space-y-0 w-3/4'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white w-1/2'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;