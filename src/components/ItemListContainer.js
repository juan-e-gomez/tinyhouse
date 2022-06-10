
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

  const onAdd = () => { };

  return (
    <div className="container-fluid">
        <p>Te queremos decir: {props.greeting}</p>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    </div>
  );
}

export default ItemListContainer;