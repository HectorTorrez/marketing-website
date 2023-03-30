import { useState } from "react"

export const getProducts = (selectedCategory = '', setProducts) => {

  const url = selectedCategory === "" ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${selectedCategory}`

  // const response = await fetch(url)
  // const { products } = await response.json()


  // const dataProducts = products.map(product => ({
  //   id: product.id,
  //   title: product.title,
  //   price: product.price,
  //   description: product.description,
  //   thumbnail: product.thumbnail

  // }))
  // return dataProducts


  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      const { products } = data
      const getProduct = products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        thumbnail: product.thumbnail

      }))

      setProducts(getProduct)
      return getProduct
    })



}















  // {
  //   'id': "0",
  //   'title': 'Arriba',
  //   'image': sticker,
  //   'description': 'Description',
  //   'price': 1000,
  // },
  // {
  //   'id': "1",
  //   'title': 'Abajo',
  //   'image': sticker3,
  //   'description': 'Description',
  //   'price': 1000,
  // },




