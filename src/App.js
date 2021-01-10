import { Component } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import Imagenes from './components/Imagenes';
import Cajaimagen from './components/Cajaimagen';

class App extends Component { 

     state={
       termino : '',
       imagenes : []
     }

     consultarApi = () => {
       const url = `https://pixabay.com/api/?key=19830642-38fc02d7193621107b2446882&q=${this.state.termino}&per_page=30`;
       console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data => this.setState({
         imagenes : data.hits
       }))

     }

     datosBusqueda = (termino) =>{
        this.setState({
          termino
        }, ()=>{this.consultarApi();})
     }

render (){ 
 
  return (
    <div className="App">
      <h2 className="titulo">Busca Una Foto</h2>
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
         datosBusqueda ={this.datosBusqueda}

        />
      </div>
         
         <h2 className='text-center mb-4'>Resultado</h2>
         
            <Imagenes
                 img = {this.state.imagenes}
           />
          
    </div>
   
  );
}
}

export default App;
