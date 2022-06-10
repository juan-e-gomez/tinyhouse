import React, {useState} from "react";

function ItemCount({ stock, initial }) {

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
    return (
        <div>
            <button onClick={minus}> -1 </button>
            <span>  {count}  </span>
            <button onClick={add}> +1 </button>
            <button> Agregar al carrito </button>
        </div>
    );
}

export default ItemCount;