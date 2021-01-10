import React, { Component, createContext } from 'react';
import Cajaimagen from './Cajaimagen';
import Paginacion from './Paginacion';




class Imagenes extends Component { 

    mostrarImagenes = ()=>{
        const imagenes = this.props.img;
        if (imagenes.lenght==0) {
            return null;
        }
        return (
            <React.Fragment>
                <div className='col-12 col-md-9 p-4 row mx-auto'>
                     {imagenes.map(i => (
                         <Cajaimagen
                         key={i.id}
                         i={i}

                         />
                     ))}
                    
                </div>
                <div className='row justify-content-center'>
              
                </div>
                
            </React.Fragment>
        )
    }

    
render (){ 

 return (
     <React.Fragment>    
     
     {this.mostrarImagenes()}
     </React.Fragment>

 );
}
}

export default Imagenes;
