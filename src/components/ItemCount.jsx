import React, {useState} from "react";
import {Link} from "react-router-dom"

function ItemCount({ stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    function add () {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    function minus () {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    const confirm = (e) => {
        onAdd(count)
    }
    return (
        <div className="container-fluid">
            <button className="btn btn-success mx-lg-2" onClick={minus}> -1 </button>
            <span className="mx-lg-2">  {count}  </span>
            <button className="btn btn-success mx-lg-2" onClick={add}> +1 </button>
            <button className="btn btn-success mx-lg-2" onClick={confirm}> Confirmar </button>
            <Link id="cart" className="btn btn-success mx-lg-2" to="/carrito"> Terminar mi compra </Link>
        </div>
    );
}

export default ItemCount;