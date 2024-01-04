import { useState } from "react";

const useStorage = (itemName, initialValue) => {
    const localStorageItem = localStorage.getItem('TODOS_V1');
    let parsedItem;
    
    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
    }else{
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = useState(parsedItem)
    
    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
      }
    

    return [item, saveItems]
}

export  {useStorage}