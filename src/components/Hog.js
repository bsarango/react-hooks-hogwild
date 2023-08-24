import React, {useState} from "react"

function Hog({name,image,speciality,greased,weight,medal}){

    const [fullDisplay,setFullDisplay] = useState(false)  //

    function displayDetails(){
        setFullDisplay(true)
    }

    if(fullDisplay===true){
        return(
            <div className="ui eight wide column" onClick={displayDetails}>
                {name}
                <img src={image} alt={name}/>
                {speciality}
                <br></br>
                {greased===true ? "True":"False"}
                <br></br>
                {weight}
                <br></br>
                {medal}
            </div>
        )
    }

    return (
        <div className="ui eight wide column" onClick={displayDetails}>
            {name}
            <img src={image} alt={name}/>
        </div>
    )
}

export default Hog