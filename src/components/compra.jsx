
import React, { Component } from 'react' 
 
import { getUsers } from '../src/api' 
 
class Compras extends Component { 
 
    getcompra = async () => { 
        const response = await getUsers() 
        console.log({ response }) 
    } 
 
    render() { 
        return ( 
            <button onClick={this.getcompra}>Comprar</button> 
        ) 
    } 
} 
 
export default Compras