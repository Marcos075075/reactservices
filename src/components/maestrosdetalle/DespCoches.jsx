import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';
import DatosCoches from './DatosCoches';

export default class DespCoches extends Component {
  urlCoches = Global.urlApiCoches;
  selectCoche = React.createRef();
  loadCoches = () => {
    let request = "api/coches";
    axios.get(this.urlCoches + request).then((response) => {
      console.log("Leyendo coches")
      this.setState({
        coches: response.data
      })
    })
  }
  state = {
    coches: [],
    idCoche: -1
  }
  componentDidMount = () => {
    this.loadCoches();
  }
  getDetallesCoche = (event) => {
    event.preventDefault();
    let idCoche = this.selectCoche.current.value;
    this.setState({
      idCoche: idCoche
    })
  }
  render() {
    return (
      <div>
        <h1>Coches Component</h1>
        <form>
          <label>Seleccione coche: </label>
          <select ref={this.selectCoche}>
            {
              this.state.coches.map((car, index) => {
                return (<option key={index}
                  value={car.idCoche}>{car.marca}</option>)
              })
            }
          </select>
          <button onClick={this.getDetallesCoche}>Detalles</button>
        </form>
        {
          this.state.idCoche != -1 &&
          (<DatosCoches idcoche={this.state.idCoche} />)
        }
      </div>
    )
  }
}
