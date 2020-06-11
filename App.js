import React, {Component} from 'react';


class Texto extends Component
{
  render()
  {
    return (<h1>Botão Numero: {this.props.text}</h1>)
  }

}


class Botao extends Component
{
  render()
  {
    
    return (<button
    onClick={()=> {this.props.handleClick(this.props.label);}}> {this.props.label}

</button>)
  }

}

class App extends Component
{
constructor(props){
super(props);
this.state = {labelText: '',}
}

setLabelText = (labelText) => {
this.setState({labelText});
}
 render()
{
	return (<div>
<Texto text={this.state.labelText}/>
<Botao  handleClick={this.setLabelText} label ="botão 1"/>
<Botao handleClick={this.setLabelText} label ="botão 2"/>
<Botao handleClick={this.setLabelText} label ="botão 3"/>
</div>)
}
}

export default App
