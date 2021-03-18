import React from "react";

const HogDetails = ({ hog }) => {
    const { specialty, greased, weight } = hog 
    return(
        <div className='hoggyText'>
            <div className='specialty'> Specialty: { specialty } </div>
            <div className="greased"> Greased: { greased ? 'True' : 'False' }  </div>
            <div className='weight'> Weight: { weight }  </div>
            <div className='achievementText'>Achievement: { hog['highest medal achieved'] }</div>
        </div>
    )
}

export default HogDetails;