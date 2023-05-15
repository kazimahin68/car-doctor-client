import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex right-5 bottom-5 space-x-8 z-10">
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] hover:bg-orange-500 border-none">❯</a>
                </div>
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-5 h-full flex items-center rounded-xl z-0'>
                    <div className='w-1/2'>
                        <h2 className='font-extrabold text-4xl text-white mb-4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-between space-x-3'>
                            <button className='btn btn-outline hover:bg-orange-500 text-white'>Discover More</button>
                            <button className='btn btn-outline hover:bg-orange-500 text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;