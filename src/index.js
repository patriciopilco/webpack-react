import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

//ReactDOM.render(<App/>, document.getElementById('app'))

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App/>);
