import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {
      newTech: '',
      techs:[]
    };

    //executado assim que o componente aparece em tela
    componentDidMount() {
      const techs = localStorage.getItem('techs');

      if (techs) {
        this.setState({techs: JSON.parse(techs) });
      }
    }

    // executado sempre que houver alterações nas props ou estado (prevProps, prevState)
    componentDidUpdate(_, prevState) {
      if (prevState.techs != this.state.techs) {
        localStorage.setItem('techs', JSON.stringify(this.state.techs))
      }
    }

    // executado quando o componente deixa de existir
    componentWillUnmount() {

    }

  
  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  } 

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '' })
  }

  handleDelete = (techAe) => {
    this.setState({ techs: this.state.techs.filter(t => t != techAe)});
  
  }

  render() {  
    return (   
      <form onSubmit={this.handleSubmit}>      
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              propriedade={tech} 
              onDelete={() => this.handleDelete(tech)}
            />            
          )}
        </ul>

        <input 
          type="text"
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Send</button>
      </form>  
    );
  }
}

export default TechList;