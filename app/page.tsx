'use client'
import { useState } from 'react'
import type { MouseEventHandler } from 'react'

import { LazyImage } from '../components/RandomFox'

// generate random functio enter 1 between 123
const random = () => Math.floor(Math.random() * 123) + 1;         // number random
const generateId = () => Math.random().toString(36).substr(2, 9); // id random

type ImageItem = {id: string, url: string}

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([])

  // forma 1 de tipar un event: event: { preventDefault: () => void }
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    // event.preventDefault();
    // const taget = event.target

    const newImageItem: ImageItem =  { 
      id: generateId(), 
      url:`https://randomfox.ca/images/${random()}.jpg`
    }

    setImages( [
      ...images, 
      newImageItem])
  }

  return (
    <div>
      <main>
        <h1 className='text-3xl font-bold underline'>Random Fox!!!</h1>

        <button
          onClick={ addNewFox }
          className="px-3 py-2 bg-indigo-600 text-white font-bold rounded-md"
        >Add New Fox</button>

        {images.map(({id, url}) => (
          <div key={id} className="p-4">
            <LazyImage 
              src={url}
              alt="Fox Image"
              width={320} 
              height="auto" 
              title="RandomFox"
              className="rounded-lg bg-gray-300"
              onClick={() => console.log('Hey')}
            />
          </div>
        ))}

        
      </main>
    </div>
  )
}
