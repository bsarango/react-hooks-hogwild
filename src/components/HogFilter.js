import React from "react"

function HogFilter({hogList, setHogList}){

    function filterHogs(){
        const filteredHogs = hogList.filter((hog)=>{
            return hog.greased===true
        })
        setHogList(filteredHogs)
    }

    return(
        <div>
            <button onClick={filterHogs}>Filter</button>
        </div>
    )
}

export default HogFilter