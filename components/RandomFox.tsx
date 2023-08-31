'use client'
import { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type LaziImageProps = { src: string }
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = LaziImageProps & ImageNative
 
//! Forma profesional de tipar un componente con typescript [Recomendada]
export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [currentSrc, setCurrentSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    // useEffect
    useEffect(() => {
        // craemos un observable
        const observer = new IntersectionObserver( (entries) => {
            entries.forEach( entry => {
                // intersection -> console.log
                if(entry.isIntersecting) {
                    setCurrentSrc(src)
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

    }, [src])

    

    
    return (
        <>      
            <p>{src}</p>      
            <img 
                ref={node}            
                src={currentSrc}
                { ...imgProps }
            />            
        </>
    )
}

