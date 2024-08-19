import { useEffect, useState } from "react";
function useLocalStorage(itemName, initialValue){

  const [item, setItems] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]))
          parsedItem = initialValue
        } else{
          parsedItem = JSON.parse(localStorageItem)
          setItems(parsedItem)
        }
        setLoading(false)
      }catch{
        setLoading(false)
        setError(true)
      }
    },2000)
  }, [])
 
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItems(newItem)
  }
  return {
    item, 
    saveItem, 
    loading, 
    error}
}

export { useLocalStorage }