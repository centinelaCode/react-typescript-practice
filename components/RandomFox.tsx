'use client'
import { useRef, useEffect, useState } from 'react'

type Props = { image: string, alt: string }
 
//! Forma profesional de tipar un componente con typescript [Recomendada]
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    // useEffect
    useEffect(() => {
        // craemos un observable
        const observer = new IntersectionObserver( (entries) => {
            entries.forEach( entry => {
                // intersection -> console.log
                if(entry.isIntersecting) {
                    setSrc(image)
                }
            })
        })
    
        // observe node
        if(node.current){
            observer.observe(node.current)
        }
    
        // desconectarnos en el momento que es retirado por react o un re-render
        return () => {
            observer.disconnect()
        }

    }, [image])

    

    
    return (
        <>            
            <img 
                ref={node}
                width={320} 
                height="auto" 
                src={src}
                alt={alt}
                className="rounded-lg bg-gray-300"
            />            
        </>
    )
}

