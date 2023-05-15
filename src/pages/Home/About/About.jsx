import img from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-100 mt-12">
            <div className="hero-content flex-col-reverse lg:flex-row justify-between gap-20 items-center">
                <div className='relative xl:w-1/2'>
                    <img src={img} className="w-3/4 rounded-lg shadow-2xl h-full" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-0 border-8 border-white" />
                </div>
                <div className='xl:w-1/2'>
                    <h4 className='text-orange-600 font-bold mb-4'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-orange-600 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;