'use client'
import { useState } from 'react'

import {RandomFox} from '../components/RandomFox'

// generate random functio enter 1 between 123
const random = () => Math.floor(Math.random() * 123) + 1;

// generate function for id unique
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = {id: string, url: string}

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url:`https://randomfox.ca/images/${random()}.jpg` },
  ])

  return (
    <div>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello Platzi</h1>

        {images.map(({id, url}) => (
          <div key={id} className="p-4">
            <RandomFox 
              img={url}
              alt="Fox Image"
            />
          </div>
        ))}

        
      </main>
    </div>
  )
}
