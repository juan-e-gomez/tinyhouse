import React, {useState} from "react";
import {Link} from "react-router-dom"
import Swal from "sweetalert2"

function ItemCount({ stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    const add = () => {
        if(count < stock) {
            setCount(count + 1);
            
        } else {
            Swal.fire({
                title: '¡No hay stock!',
                text: `${stock} unidades disponibles`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    
    const removeItem = () => {
        if(count > 0 ) {
            setCount(count - 1);
        }
    }

    const confirm = () => {
        if(count > 0) {
            onAdd(count);
        } else {
            Swal.fire({
                title: 'Selecciona una cantidad',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    

    return (
        <div className="container-fluid">
            <button className="btn btn-success mx-lg-2" onClick={removeItem}> -1 </button>
            <span className="mx-lg-2">  {count}  </span>
            <button className="btn btn-success mx-lg-2" onClick={add}> +1 </button>
            <button className="btn btn-success mx-lg-2" onClick={confirm}> Confirmar </button>
            <Link className="btn btn-success mx-lg-2" to="/carrito"> Terminar mi compra </Link>
        </div>
        
    );
}

export default ItemCount;