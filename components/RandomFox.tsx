import { useRef } from 'react'

type Props = { img: string, alt: string }
 
//! Forma profesional de tipar un componente con typescript [Recomendada]
export const RandomFox = ({ img, alt }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    
    
    
    return (
        <>            
            <img 
                ref={node}
                width={320} 
                height="auto" 
                src={img}
                alt={alt}
                className="rounded-lg"
            />            
        </>
    )
}

