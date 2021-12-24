import React, { useState } from 'react'
import {Istate as Props } from '../App'

interface IProps{ //define new IProps interface
    people : Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => { //define the function Iprops component

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handlChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void =>{
        //define the parameter as HTMLInputElement and HTMLTextAreaElement
        setInput({
            ...input, //target the inout elememnt 
            [e.target.name]: e.target.value // assign the target values
        })
    }

    const handleClick = () : void =>{
        if(
            !input.name || !input.age || ! input.img
        ){
            return
        }

        setPeople([

            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note 
            }
        ])
    }

    return (
        <div className='AddToList'>
            <input 
                type="text" 
                placeholder='Name' 
                className='AddToList-input' 
                value={input.name}
                name='name'
                onChange={handlChange}
            />
            
            <input 
                type="number" 
                placeholder='Age'  
                className='AddToList-input' 
                value={input.age}
                name='age'
                onChange={handlChange}
            />
            
            <input 
                type="text" 
                placeholder='Image URL' 
                className='AddToList-input' 
                value={input.img}
                name='img'
                onChange={handlChange}
            />
            
            <textarea 
                    placeholder='note' 
                className='AddToList-input' 
                value={input.note}
                name='note'
                onChange={handlChange}
            />

            <button 
                className="AddToList-btn"
                onClick={handleClick}
                >
                    Add To List
            </button>
        </div>
    )
}

export default AddToList
