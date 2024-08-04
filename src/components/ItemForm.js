import React, { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState([])

  function handleNewName(e){
      setItemName(e.target.value)
  }

  function handleNewCategory(e){
    setItemCategory(e.target.value)
}
  
  function handleSubmit(e){
    e.preventDefault();

      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategory
      };
    
      const updatedData = [...submittedData, newItem];
        setSubmittedData(updatedData);
        setItemName("");
        setItemCategory("Produce");

    if(props.onItemFormSubmit){
      props.onItemFormSubmit(newItem);
    }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName}
          onChange={handleNewName}
        />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
