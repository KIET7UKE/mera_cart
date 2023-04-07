import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const products = [
      {
        name: 'Vivo S1 Pro',
        price: 17999,
        quantity: 0
      },
      {
        name: 'Samsung Z1x Max',
        price: 38999,
        quantity: 0
      }
  ]

  const [productList, setProductList] = useState(products)
  const [totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductlist = [...productList]
    let newtotalAmount = totalAmount
    newProductlist[index].quantity++
    newtotalAmount += productList[index].price
    setProductList(newProductlist);
    setTotalAmount(newtotalAmount)
  }

  const decrementQuantity = (index) => {
    let newProductlist = [...productList]
    let newtotalAmount = totalAmount
    if (newProductlist[index].quantity > 0) {
      newProductlist[index].quantity--
      newtotalAmount -= productList[index].price
    }
    else {
      newProductlist[index].quantity = 0
    }
    setProductList(newProductlist);
    setTotalAmount(newtotalAmount)
  }

  const resetQuantity = () => {
    let newProductlist = [...productList]
    newProductlist.map((products) => {
      products.quantity = 0
    })
    setProductList(newProductlist)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductlist = [...productList]
    let newtotalAmount = totalAmount
    newtotalAmount -= newProductlist[index].quantity * newProductlist[index].price
    newProductlist.splice(index, 1);
    setProductList(newProductlist)
    setTotalAmount(newtotalAmount)
  }

  const addItem = (name, price) => {
    let newProductlist = [...productList]
    newProductlist.push({
      name: name,
      price:price,
      quantity:0
    })
    setProductList(newProductlist)
  }

  return (
    <div>
      <Navbar/>
      <main className='container mt-5'>
      <AddItem addItem = {addItem}/>
      <ProductList productList={productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem = {removeItem}/>
      </main>
      <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </div>
  );
}

export default App;
