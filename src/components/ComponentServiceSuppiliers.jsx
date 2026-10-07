import React, { Component } from 'react'
import axios from 'axios';
import Global from "../Global";

export default class ComponentServiceSuppiliers extends Component {

    cajaID = React.createRef();

    state = {
        suppliers: [],
        proveedor: null
    }

    cargarSuppliers = () => {
        let request = "Suppliers"
        axios.get(Global.urlNorthwind + request).then((respuesta) => {

            this.setState({
                suppliers: respuesta.data.value
            })

        })
    }

    buscarID = (e) => {
        e.preventDefault();
        let request = "Suppliers"
        let id = parseInt(this.cajaID.current.value)
        let i = 0;
        let aux = [];
        axios.get(Global.urlNorthwind + request).then((respuesta) => {
        const proveedores = respuesta.data.value

            do {
                i++
                if (id === proveedores[i].SupplierID) {
                    aux.push(proveedores[i])
                    console.log("Proovedor encontrado");
                }
                
            } while (id != proveedores[i].SupplierID);

            this.setState({
                suppliers: aux
            })
        })
    }

    buscarIdV2 = (e) => {
        e.preventDefault();
        let request = "Suppliers"
        let id = parseInt(this.cajaID.current.value)
        axios.get(Global.urlNorthwind + request).then((respuesta) => {
            for (let elem of respuesta.data.value) {
                if (elem.SupplierID == id) {
                    this.setState({proveedor: elem})
                    break;
                }
                
            }
        })
    }

    componentDidMount = () => {
        this.cargarSuppliers();
    }

  render() {
    return (
      <div style={{textAlign: "center"}}> 
        <h1>Service Api Suppliers</h1>

        {/* Metodo creado por mi: */}
        <form onSubmit={this.buscarID}>

        {/* Metodo creado por el profe: */}
        {/* </form><form onSubmit={this.buscarIdV2}> */} 
            <label>ID: </label>
            <input type="text" required ref={this.cajaID} />
            <button>Buscar</button>
        </form>
        {
            this.state.proveedor &&
            (
                <div>
                    <h2>Contact: {this.state.proveedor.ContactName}</h2>
                    <h2>Title: {this.state.proveedor.ContactTitle}</h2>
                    <h2>Direccion: {this.state.proveedor.Address}</h2>
                </div>
            )
        }

        {
            this.state.suppliers.map((c, index) => {
                return(
                    <h4 key={index}>
                        ID: {c.SupplierID},
                        Nombre: {c.ContactName}
                    </h4>
                )
            })
        }
      </div>
    )
  }
}
