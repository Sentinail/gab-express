import React, {useState, useContext} from 'react'
import { SelectContainer, Options, OptionsData } from './SelectStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'

const OptionsComponent = (props) => {
    const { setPlaceToDonate } = props
    const {id, data, setValue} = props
    const styles = useContext(stylesContext)

    return (
        <OptionsData backgroundColor={styles.secondaryColor} key={id} onClick={() => {setValue(data); setPlaceToDonate(data)}}>
            <p> {data} </p>
        </OptionsData>
    )
}

function Select(props) {
    const {setPlaceToDonate} = props
    const [isVisible, setIsVisible] = useState(false)
    const [value, setValue] = useState("Choose Where To Donate")
    const styles = useContext(stylesContext)

    const data = ["Place 1", "Place 2", "Place 3", "Place 4", "Place 5", "Place 6", "Place 7", "Place 8", "Place 9", "Place 10", "Place 11", "Place 12", "Place 13", "Place 14"]

    const activate = () => {
        setIsVisible(!isVisible)
    }
    
    return (
        <>
            <SelectContainer onClick={() => {activate()}} backgroundColor={styles.secondaryColor}>
                <div className='content'>
                    <p> {value} </p>
                </div>
                <Options backgroundColor={styles.primaryColor} isVisible={isVisible}>
                    {data.map(data => {return <OptionsComponent setPlaceToDonate={setPlaceToDonate} data={data} id={data} key={data} setValue={setValue}></OptionsComponent>})}
                </Options> 
            </SelectContainer>
            
        </>
    )
}

export default Select