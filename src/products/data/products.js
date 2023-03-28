
export const getProducts = async (selectedCategory = '', input = '') => {
  console.log(input)
  const url = selectedCategory === "" ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${selectedCategory}`

  const response = await fetch(url)
  const { products } = await response.json()


  const dataProducts = products.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    thumbnail: product.thumbnail

  }))
  return dataProducts




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




