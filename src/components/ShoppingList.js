import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleFilterChange(e){
    setSearch(e.target.value)
  }

  function handleNewItem(newItem) {
    setItemList((prevItems) => [newItem, ...prevItems]);
  }
  
  const itemsToDisplay = itemList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesFilter = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesFilter;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem}/>
      <Filter  
        onCategoryChange={handleCategoryChange} 
        onSearchChange = {handleFilterChange} 
        search= {search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
