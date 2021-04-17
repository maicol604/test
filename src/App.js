import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyComponent from './Components/MyComponent';

function HolaMundo (nombre,edad){
  var presentacion = 
  <div>
        <h2> hola soy {nombre}</h2>
        <h3>tengo {edad} años</h3>  
  </div>

  return presentacion
}

function App() {

  var nombre=  "fabiana perez";
                
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Bienvenido!! 
        </p>
        {HolaMundo(nombre,23)}
        
        <section className='componentes'>

          <MyComponent />

        </section>

      </header>
      
    </div>
  );
}

export default App;
