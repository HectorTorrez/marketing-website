


export const getCardById = (id, products) => {
  const h = parseInt(id)
  const data = products.find(product => product.id == h)
  return data
}


