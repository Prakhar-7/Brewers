import React, { useState } from 'react'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query)
    )
    setFilteredProducts(filteredProducts)
  }

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-white text-3xl font-bold">
          Brewers
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0a1 1 0 0 1 .943.665l2.386 7.158h6.671a1 1 0 0 1 .785 1.618l-5.39 5.39 1.793 7.17a1 1 0 0 1-1.537 1.057L10 16.694l-7.068 4.18a1 1 0 0 1-1.537-1.057l1.793-7.17-5.39-5.39A1 1 0 0 1 0 7.823h6.671L9.057.665A1 1 0 0 1 10 0zM7 12.944V18l3.22-1.906a1 1 0 0 1 .943 0L13 18v-5.056l3.207-2.688-4.51-.347a1 1 0 0 1-.79-.566L10 3.387l-1.907 5.056a1 1 0 0 1-.79.566l-4.51.347L7 12.944z"
          />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar
