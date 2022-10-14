import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='card-container'>
          <Card />
        </div>

    </div>
  )
}
