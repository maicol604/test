import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Card from './Components/Card';

function HolaMundo (nombre,edad){
  var presentacion = 
  <div>
        <h2> hola soy {nombre}</h2>
        <h3>tengo {edad} años</h3>  
  </div>

  return presentacion
}

const data = {
  img:'https://cdn.igblade.com/platform-cache/accounts/1369760/profile-picture.jpg',
  name:'name',
  lastname:'lastname',
  values:[
    {
      main:'45245',
      secondary:'254',
      warm:true,
    },
    {
      main:'10',
      secondary:'20',
      warm:true,
    },
    {
      main:'4524',
      secondary:'52',
      warm:false,
    },
    {
      main:'735',
      secondary:'2452',
      warm:false,
    },
  ]
}

const datafull = [data, data, data, data, data, data, data, data, data, data, data, data];

function App() {

  var nombre=  "fabiana perez";
                
  return (
    <div className="App">
      {datafull.map((item, index)=>{
        return (
            <Card
              data={item}
              key={index}
            />
        )
      })}
    </div>
  );
}

export default App;
