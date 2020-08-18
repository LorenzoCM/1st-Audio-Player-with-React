import React, { useState } from 'react';
import PropType from 'prop-types';

const Songs = ({name, index, playSong}) => {   
    
    return (    
            
            <li onClick={()=>playSong(index)}>{name}</li>                  
       

    )}

    Songs.propTypes = {        
        name: PropType.string,
        index: PropType.number,
        playSong: PropType.func
    }

    
    export default Songs;

        
       