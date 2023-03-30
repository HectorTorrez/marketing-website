


export const getCardById = (id, products) => {
  const h = parseInt(id)
  console.log(products)
  console.log(id)
  const data = products.find(product => product.id == h)
  console.log(data)
  return data
}


