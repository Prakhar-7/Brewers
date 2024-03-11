import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SingleProductPage.css'

const SingleProductPage = () => {
  const { productId } = useParams()
  const { product } = useSelector((store) => store.beer)
  const beerProduct = (
    JSON.parse(localStorage.getItem('beerProduct')) || product
  ).find((item) => item.id == productId)
  console.log(beerProduct)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 pb-8 text-gray-200 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 pt-2 text-purple-400 uppercase tracking-wide shadow-lg">
          Brew Bonanza
        </h2>
        {console.log(beerProduct)}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img
              src={beerProduct?.image_url}
              alt={beerProduct?.name}
              className="object-contain w-full h-[80vh] pb-5 rounded-lg animate-rotate-once"
              style={{ opacity: 1 }}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{beerProduct?.name}</h1>
            <p className="text-gray-300 mb-2">{beerProduct?.tagline}</p>
            <p className="text-gray-400 mb-4">{beerProduct?.description}</p>
            <div className="mb-4">
              <p>
                <span className="font-bold text-gray-300">ABV:</span>{' '}
                {beerProduct?.abv}%
              </p>
              <p>
                <span className="font-bold text-gray-300">IBU:</span>{' '}
                {beerProduct?.ibu}
              </p>
              <p>
                <span className="font-bold text-gray-300">First Brewed:</span>{' '}
                {beerProduct?.first_brewed}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold text-gray-300">Target FG:</span>{' '}
                {beerProduct?.target_fg}
              </p>
              <p>
                <span className="font-bold text-gray-300">Target OG:</span>{' '}
                {beerProduct?.target_og}
              </p>
              <p>
                <span className="font-bold text-gray-300">EBC:</span>{' '}
                {beerProduct?.ebc}
              </p>
              <p>
                <span className="font-bold text-gray-300">SRM:</span>{' '}
                {beerProduct?.srm}
              </p>
              <p>
                <span className="font-bold text-gray-300">PH:</span>{' '}
                {beerProduct?.ph}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold text-gray-300">
                  Attenuation Level:
                </span>{' '}
                {beerProduct?.attenuation_level}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold text-gray-300">Brewers Tips:</span>{' '}
                {beerProduct?.brewers_tips}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold text-gray-300">Contributed By:</span>{' '}
                {beerProduct?.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
