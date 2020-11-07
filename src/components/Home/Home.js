import React from 'react'
import libary from '../../assets/images/libary.svg'
import profile from '../../assets/images/final.svg'


const Home = (props) => {

    return (
        <section className='home-section'>
            <div className='home-section-info-box'>
                <h1>
                  Hi. My Name is Lazar.
                </h1>
                <p>Code is my passion. Wanna see?</p>
            </div>
            <div className='home-section-image-box'>
                    <img src={profile} className='home-section-profile-image' />

            </div>



        </section>
    )
}

export default Home