import React,{Component} from 'react';

class inputs extends Component{
    state={
      carnet:"",
      horario:"",
      tarde:""
  
    }
    onSubmit=e=>{
        this.props.agregardia(this.state.carnet, this.state.horario, this.state.tarde)
        e.preventDefault();
    }
    onChange=e=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    render(){
      
      return(
        <form onSubmit={this.onSubmit}>
        <label>ingrese el carnet</label>
        <input type="text" name="carnet" onChange={this.onChange} value={this.state.carnet}/>
        <label>seleccione el horario</label>
        <input type="text" name="horario" onChange={this.onChange} value={this.state.horario}/>
        <label>llego tarde?</label>
        <input type="checkbox" name="tarde" onChange={this.onChange} value={this.state.tarde}/>
        {/* <button type="submit" onClick={<comentario />}>hola</button> */}
        <input type="submit"/>
        </form>
      )
    }
  }
  export default inputs;