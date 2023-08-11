import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Different Shimmering Dragonfly</title>
        <meta property="og:title" content="Different Shimmering Dragonfly" />
      </Helmet>
      <a href="https://pl1.hugaettaa.za.com/" className="home-link">
        <img alt="image" src="/523533-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
