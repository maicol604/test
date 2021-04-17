import React, {Component} from 'react';


class MyComponent extends Component{

    render(){
        let receta = {
            nombre: 'pizza',
            ingredientes: ['tomate','queso','jamon','tocineta','oregano'],
            calorias: 400
        }

        return(
            <React.Fragment>
                <h1>{'Receta: '+receta.nombre}</h1>
                <h3>{'Calorias: '+receta.calorias}</h3>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );

                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
        );       
    }
}

export default MyComponent;