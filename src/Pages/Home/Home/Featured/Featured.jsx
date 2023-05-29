import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Featuredimg from '../../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading= 'Check it Out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={Featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus dolorem, minima mollitia quia facilis accusam`us impedit officia itaque necessitatibus reiciendis tempore consequatur, placeat expedita voluptatum ratione accusantium sint excepturi beatae aliquam exercitationem vitae. Debitis consequatur, distinctio eum deserunt id dolorem quae recusandae fuga dolorum autem, tempore vitae qui ad?</p>
                <button className="btn btn-outline border-0 border-b-4  mt-3 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;