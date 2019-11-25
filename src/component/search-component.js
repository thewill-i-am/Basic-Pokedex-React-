import React, {Component} from 'react'
import fetch from 'node-fetch'
class Search extends Component{
    constructor(props){
        super(props);
        this.state = {value: '', 
                     pokemons: {},
                    };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        this.setState({
            pokemons: { 
                habilidades : 'Introduzca un numero para saber'
            }
        })
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    onSubmit(e){
        this.setState({value: this.state.value});
        var url = `https://pokeapi.co/api/v2/pokemon/${this.state.value}/`;
        fetch(url)
         .then(res => res.json())
         .then(json =>{
            if(json !== undefined){
                this.setState({
                   pokemons : {
                       nombre : json.name,
                       habilidades : json.abilities.map((obj) => { return obj.ability.name }).join(','),
                       sprites : json.sprites.front_default
                   }
                })
            }else{
                console.log("vacio")
            }
         });
        e.preventDefault();
    }
    render(){
        return(
            <form onClick={this.onSubmit}>
            <div className="container">
                <input type ="text" onChange={this.handleChange} value={this.state.value}/>
                <input type="submit" value="Buscar" />
                <br/>
                <label key={this.state.pokemons.nombre}>{this.state.pokemons.nombre}</label>
                <br/>
                <img src={this.state.pokemons.sprites} className="App-logo"/>
                <h1>    
                    Habilidades Principales :  {this.state.pokemons.habilidades}
                </h1>
            </div>
            </form>
        )
    }
}
export default Search;