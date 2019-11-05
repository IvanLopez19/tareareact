import React,{Component} from 'react';

class dias2 extends Component{
    render(){
        return(
            this.props.dias2.map(e=><div key={e.id}>{e.carnet},{e.horario},{e.tarde}</div>)
        )
    }
}
export default dias2;