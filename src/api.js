import React, { Component } from 'react' 
import { Compra } from '../src/compra'

export const getcompra = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(Compra)
    }, 2000))
}



