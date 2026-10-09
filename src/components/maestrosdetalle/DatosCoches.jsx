import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';

export default class DatosCoches extends Component {

  urlCoche = Global.urlApiCoches;
    state = {
        coche: null
    }
    loadCoche = () => {
        let id = this.props.idcoche;
        let request = "api/coches/findcoche/" + id;
        axios.get(this.urlCoche + request).then((response) => {
            console.log("leyendo car");
            this.setState({
                coche: response.data
            })
        })
    }
    componentDidMount = () => {
        console.log("Id coche: " + this.props.idcoche);
        this.loadCoche();
    }
    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idcoche);
        console.log("Old: " + oldProps.idcoche);
        if (this.props.idcoche != oldProps.idcoche){
            this.loadCoche();
        }
    }
    render() {
        return (
        <div>
            <h1>Detalle Coche</h1>
            {
                this.state.coche &&
                (<div>
                    <h3>{this.state.coche.marca} - {this.state.coche.modelo}</h3>
                    <h3>{this.state.coche.conductor}</h3>
                    <img src={this.state.coche.imagen}
                    style={{width: "150px", height: "150px"}}/>
                    </div>)
            }
        </div>
        )
    }
}
