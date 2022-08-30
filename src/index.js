import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.scss'

//ReactDOM.render(<App/>, document.getElementById('app'))

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App/>);
