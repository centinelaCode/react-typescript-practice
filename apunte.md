
## Forma 1 implicita de definir un componente con typescript
```javascript
export const RandomFox1 = () => {
    return <img />
}
```

##  Forma 2  con typescript
```javascript
export const RandomFox3: FunctionComponent = () => {
    return <img />
}
```

## Forma 3 con typescript
```javascript
export const RandomFox4: FC = () => {
    return <img />
}
```

## Forma 4 yProfesional con typescript
```javascript
export const RandomFox = ({ img, alt }: Props): JSX.Element => {
     return <img />
}
```