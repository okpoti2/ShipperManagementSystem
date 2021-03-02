import React from 'react'
import Loader from './Loader'

const ConsignTable = ({consignments}) => {
    console.log(consignments)
    return (
        <div>
            <p>{consignments.length}</p>
            <ul>
            {consignments.map((consign, index) =>{
                return <li key={consign.container}>{consign.container}</li>
            })}
            </ul>
        </div>
    )
}

export default ConsignTable
