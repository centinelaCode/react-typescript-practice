'use client'
import { useState } from 'react'

import {RandomFox} from '../components/RandomFox'

// generate random functio enter 1 between 123
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {

  const [images, setImages] = useState([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ])

  return (
    <div>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello Platzi</h1>

        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox  
              alt="imageFox"
              img={image}
            />
          </div>
        ))}

        
      </main>
    </div>
  )
}
