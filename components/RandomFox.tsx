
//! Forma implicita de definir un componente con typescript
// export const RandomFox1 = () => {
//     return <img />
// }

//! Forma 3  con typescript
// export const RandomFox3: FunctionComponent = () => {
//     return <img />
// }

//! Forma 4 con typescript
// export const RandomFox4: FC = () => {
//     return <img />
// }


type Props = { img: string, alt: string }
 

//! Forma Explicita de definir un componente con typescript [Recomendada]
export const RandomFox = ({ img }: Props): JSX.Element => {   
    
    return (
        <>
            <p>{img}</p>
            <img 
                width={320} 
                height="auto" 
                src={img}
                className="rounded-lg"
            />            
        </>
    )
}

