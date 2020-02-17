import "/home/siva/Downloads/ArjunAcademy/src/styles/styles.css";
import React, { useEffect} from 'react';


const StyleApp = () => {
    const changeMode = (title, mode, body) => {
      document.title = title;
      localStorage.setItem("mode", mode);
      title === "Dark" ? body.add("mod-dark") : body.remove("mod-dark");
    };
    
    useEffect(() => {
      const localMode = localStorage.getItem("mode");
      const body = document.body.classList;
  
      localMode === "mod-dark" ? changeMode("Dark", "mod-dark", body) : changeMode("Light", "", body);
    }, []);
  
    const handleSwitch = () => {
      const localMode = localStorage.getItem("mode");
      const body = document.body.classList;
  
      localMode === "mod-dark" ? changeMode("Light", "", body) : changeMode("Dark", "mod-dark", body);
    };
    return (
       <div>
    
        <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input '
          id='customSwitches'
          readOnly onChange={handleSwitch} 
        />
        <label className='custom-control-label' htmlFor='customSwitches' >
           <p class=" mode"> </p>
        </label>
      </div>
       </div>
     
          
        
        
         
     
      );
}
  export default StyleApp