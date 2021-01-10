import React, { Component, createContext } from 'react'


class Buscador extends Component {
  //  state = { }

     busquedaRef = React.createRef();
      
     getData = (e) => {
         e.preventDefault();
          
         // tomamos el valor del input 
        
         const busqueda = this.busquedaRef.current.value;
         // lo enviamos al componente ppal 
         this.props.datosBusqueda(busqueda);
     }


    render() {
        return (
            <form onSubmit={this.getData}>
              
                <div className="container">
                <div className="form-group col-md-6 mx-auto">
                  <input ref={this.busquedaRef} type='text' className="form-control form-control-lg" placeholder='Busca tu imagen'/>
                </div>

                <div className="form-group col-md-6 mx-auto">
                  <input type='submit' className="btn btn-lg btn-danger btn-block" placeholder='Busca tu imagen' value='Buscar'/>
                </div>
                </div>
              
            </form>
        );
    }
}

export default Buscador;