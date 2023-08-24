import React from "react"
import Hog from "./Hog"

function HogList({hogList}){

    const hogsToDisplay = hogList.map((hog)=>{
        return <Hog key={hog.name} name={hog.name} image={hog.image} speciality={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog["highest medal achieved"]}/>
    })

    return(
        <div className="ui grid container">
            {hogsToDisplay}
        </div>
    ) 
}

export default HogList