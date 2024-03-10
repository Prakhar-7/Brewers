import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../../slices/ProductSlice/ProductSlice'
import Navbar from '../../navbar/Navbar'
import { Link } from 'react-router-dom'
import Shutter from './Shutter' // Import the Shutter component

const Home = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((store) => store.beer)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [showHomepage, setShowHomepage] = useState(false) // State to control homepage visibility

  useEffect(() => {
    dispatch(getDetails())
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      setShowHomepage(true)
    }, 2000) // Delay before showing the homepage content
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filteredProducts = product.filter((product) => {
      // Case-insensitive search for product name, tagline, and first_brewed
      const productName = product.name.toLowerCase()
      const tagline = product.tagline.toLowerCase()
      const firstBrewed = product.first_brewed.toLowerCase()

      // Perform a fuzzy search for name and tagline
      const nameMatch = productName.includes(query)
      const taglineMatch = tagline.includes(query)

      // Exact match for first_brewed
      const brewedMatch = firstBrewed === query

      return nameMatch || taglineMatch || brewedMatch
    })

    setFilteredProducts(filteredProducts)
  }

  const truncateDescription = (description) => {
    const words = description.split(' ')
    return words.length > 25
      ? `${words.slice(0, 25).join(' ')}...`
      : description
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Shutter onClose={() => setShowHomepage(true)} />{' '}
      {/* Render the Shutter component */}
      {showHomepage && ( // Conditionally render the homepage content
        <>
          <Navbar />
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">
              Discover Amazing Beers
            </h1>
            <input
              type="text"
              placeholder="Search for beers..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-2 rounded-md mb-8 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 bg-gray-800 text-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {(filteredProducts.length > 0 ? filteredProducts : product).map(
                (item) => (
                  <ProductCard
                    key={item.id}
                    truncateDescription={truncateDescription}
                    item={item}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const ProductCard = ({ item, truncateDescription }) => (
  <Link key={item.id} to={`/product/${item.id}`}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 transition duration-300 transform hover:translate-y-0.5 hover:shadow-xl">
      <img
        className="w-full h-64 pt-2 object-contain transform transition duration-300 hover:scale-105"
        src={item.image_url}
        alt={item.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-300 mb-4">
          {truncateDescription(item.description)}
        </p>
        <div className="flex justify-between items-center">
          <span className="bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
            {item.abv}% ABV
          </span>
          <span className="bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold">
            {item.ibu} IBU
          </span>
        </div>
      </div>
    </div>
  </Link>
)

export default Home
