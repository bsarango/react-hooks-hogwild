import React from "react"

function HogSort({hogList,setHogList}){

    function sortListBy(event){
        console.log(event.target.value)
        const desiredTrait = event.target.value
        const newList =[...hogList]
        if(desiredTrait==="weight"){
            const sortedHogList = sortByWeight(newList)
            setHogList(sortedHogList)
        }
        else{
            const sortedHogList = sortByName(newList)
            setHogList(sortedHogList)
        }
    }

    function sortByWeight(list){
        const sortedList = list.sort((hogOne, hogTwo)=>{
            return hogOne.weight - hogTwo.weight
        })

        return sortedList
    }

    function sortByName(list){
        const sortedList = list.sort((hogOne, hogTwo)=>{
            const nameOne = hogOne.name
            const nameTwo = hogTwo.name
            if(nameOne < nameTwo){
                return -1
            }
            if(nameOne > nameTwo){
                return 1
            }
            return 0;
        })
        return sortedList
    }

    return(
        <select onChange={sortListBy}>
            <option value="name">name</option>
            <option value="weight">weight</option>
        </select>
    )
}

export default HogSort