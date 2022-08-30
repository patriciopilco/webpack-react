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

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App/>);
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

## Instalación Webpact 5

1. Instalar babel
```bash
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
```
2. Crear el archivo *.babelrc* que nos va ayudar a interpretar codigo javascript como de react.
```bash
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

```

3. Instalar Webpack para el proyecto, y el servidor webpack de entorno local para realizar pruebas en real time.
```bash
npm install webpack webpack-cli webpack-dev-server -D
```
4. Crear archivo de configuración *webpack.config.js*
```bash
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
       extensions: ['.js', '.jsx'] 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                    
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress: true,
        port: 3006
      }
}
```

## Plugins Loaders

1. Instalar dependencias 
```bash
npm install html-loader html-webpack-plugin -D
```
2. Editar el archivo *webpack.config.js*

```bash
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

Crear regla en *module:rules*

```bash
  {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            }
```

Crear puglin en *plugins*

```bash
plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
```

Editar *package.json* en scripts **start,build**

```bash
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve",
    "build":"webpack --mode production"
  },
```

Probar en la terminal
```bash
npm run start
```