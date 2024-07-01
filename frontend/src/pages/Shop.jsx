import React from 'react'
import Banner from '../components/Banner/Banner'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'
import NewsLetter from '../components/newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Banner/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
        
        </div>

  )
}

export default Shop