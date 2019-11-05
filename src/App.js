import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Dias from './dias.json';
import Dias2 from './dias2.js';
import Formulario from './formulario.js';


/*class comentario extends React.Component{
  state={
    show:true
  }
  render(){
    return(
      <li>{this.props.carnet}{this.props.hora}{this.props.tarde}<button onClick={()=>this.setState({show:false})}>eliminar</button></li>
    )
  }
}*/

class App extends Component{
  state={
    dias:Dias
  }
  agregardia(carnet,horario,tarde){
    const nuevodia={
      id:this.state.dias.length,
      carnet: carnet,
      horario: horario,
      tarde:tarde
    }

    //console.log(nuevodia)
    this.setState({
      dias: [...this.state.dias,nuevodia]
    })

    //console.log(this.state.dias)
  }
  render(){
    return(<div>
      <Formulario agregardia={this.agregardia}/>
      <Dias2 dias2={this.state.dias}/>
      </div>
    )
  }
}


export default App;