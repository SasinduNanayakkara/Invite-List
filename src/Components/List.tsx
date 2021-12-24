import React from 'react'
import AddToList from './AddToList'
import {Istate as IProps } from '../App'

// interface IProps { // create an interface declearing people object
//     people: {
//         name: string,
//         age: number,
//         url: string,
//         note? : string // note field is not required
//     }[] // define as an array
// }

//const List = (props: IProps) => { // add the interface as props
const List: React.FC<IProps> = ({people}) => { //define the list as react functional component
    
    const renderList = (): JSX.Element[] => { //define readList as an JSX Element
        return people.map((person) =>{
            return(
                <li className='List'>
                <div className="List-header">
                    <img src={person.url} alt="profile-pic" className="List-img" />
                    <h2>{person.name}</h2> {/*map the person's name*/} 
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }
    
    return (
        <ul>
            {renderList()}    
        </ul>
    )
}

export default List
