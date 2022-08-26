# webpack-react
## Instalación Configuración

1. Instalar el recurso react
```bash
npm init -y
npm install react react-dom -S
```

2. Crear la estructura el proyecto
* src/index.js
```bash
import React from 'react'
import ReactDOM from 'react'
import App from './components/App'

ReactDOM.render(<App/>, document.getElementById('app'))
```

* src/components
* src/components/App.jsx

```bash
import React from "react";

const App = () =><h1>Hello React !</h1>

export default App;
```

3. Crear carpeta *public* con archivo *index.html*
* public/index.html
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

