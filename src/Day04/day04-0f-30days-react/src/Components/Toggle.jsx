import React, {useState} from 'react';

 




function Toggle(props) {
    
    const [isToggle, setisToggle] = useState(false)
     
     function toggleIsHidden(event) {
         const newEvent = event.target.value;
         return setisToggle ((newEvent) => {
             return {
                 isToggle : !currentToggle.isToggle
             }
         })
     }
 
 
    return (
        <>
             <h1>{isToggle && props.text}</h1>
            <button onClick={toggleIsHidden} >Toggle</button>
            
           
        </>
    )
}

export default Toggle;

// function toggleIsHidden() {
//     setisToggle ((currentToggle) => {
//         return  {
//             isToggle :!currentToggle.isToggle
//         }
//     })
// }

// toggleIsHidden (() => {
//     setisToggle((currentToggle) => {
//         return {
//             isToggle : !currentToggle.isToggle
//         }
//     })
// })