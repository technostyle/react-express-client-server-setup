import React from 'react'
import ReactDOM from 'react-dom'

fetch('api/test').then(console.log)
ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('root')
)
