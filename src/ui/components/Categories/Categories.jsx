import './Categories.css'

export const Categories = ({ setSelectedCategory }) => {

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <select className='select-categories' onChange={(e) => handleCategoryChange(e.target.value)}>
      <option value="">All</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
      <option value="skincare">Skincare3</option>
      <option value="groceries">Groceries</option>
      <option value="home-decoration">Home Decoration</option>
      <option value="tops">Tops</option>
      <option value="womens-dresses">Womens Dresses</option>
      <option value="womens-shoes">Womens Shoes</option>
      <option value="mens-shirts">Men Shirts</option>
      <option value="mens-shoes">Mens Shoes</option>
      <option value="mens-watches">Mens Watches</option>
      <option value="womens-watches">Womens Watches</option>
      <option value="womens-bags">Womens Bags</option>
      <option value="womens-jewellery">Womens Jewellery</option>
      <option value="sunglasses">Sunglasses</option>
      <option value="automotive">Automotive</option>
      <option value="motorcycle">Motorcycle</option>
      <option value="lighting">Lighting</option>

    </select>
  )
}