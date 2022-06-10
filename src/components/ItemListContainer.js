
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

  return (
    <div className="container-fluid">
        <p>Te queremos decir: {props.greeting}</p>
        <ItemCount stock={5} initial={0}/>
    </div>
  );
}

export default ItemListContainer;