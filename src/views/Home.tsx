import React from 'react'
import Button from '../components/components/Button'
import Carousel from '../components/home/Carousel'
import Welcome from '../components/home/Welcome'
import ShowAssets from '../components/home/ShowAssets'
import Portfolio from '../components/home/Portfolio'
import Vision from '../components/home/Vision'
import Service from '../components/home/Service'

const Home: React.FC = () => {
    return (
        <div>
            <Carousel />
            <Welcome />
            <ShowAssets />
            <Portfolio />
            <Vision />
            <Service />
        </div>
    )
}

export default Home