import React from 'react';
import image1 from '../imgs/image1.jpg';
const Home = () => {
    return (
        <>            
            <div style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', height: '1011px' }} >
                <h1 className='text-left text-info ps-5 bg-body-secondary rounded bg-opacity-25' style={{ paddingTop: '50px', width: '600px', height: '200px' }}> Chicken Kickers Resturant
                    <h6 className='text-left'>Fast Food, The Eastern Food you love ,The Taste of happiness 😍 </h6>
                </h1> 
                
            </div>
        </>
    );
}
export default Home;