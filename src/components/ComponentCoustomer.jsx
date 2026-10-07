import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ComponentCoustomer extends Component {

    state = {
        customers: []
    }    

    
    cargarCustomers = () => {
        let request = "Customers";
        console.log("Antes del servicio");
        axios.get(Global.urlNorthwind + request).then((response) => {
            console.log("Leyendo servicio");

            this.setState ({
                customers: response.data.value
            })
        })

        console.log("Despues del servicio");

        
    }

    componentDidMount = () => {
        this.cargarCustomers();
    }

    render() {
        return (
        <div style={{textAlign: "center"}}>
            <h1>Service Api Coustumers</h1>
            {/* <button onClick={this.cargarCustomers}>
                Cargar Custumers
            </button> */}
            {
                this.state.customers.map((cliente, index) =>{
                    return(
                        <h4 key={index}>
                            Contacto: {cliente.ContactName},
                            Título: {cliente.ContactTitle},
                            Pais: {cliente.Country}
                        </h4>
                    )
                })
            }
        </div>
        )
    }
}
