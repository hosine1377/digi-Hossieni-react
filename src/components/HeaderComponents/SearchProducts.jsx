import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Backdrop from './Backdrop'
import { allProducts } from '../../db'
import { HiSquares2X2 } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

function SearchProducts() {
  const [searchBoxSelected, setSearchBoxSelected] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [productsFound, setProductsFound] = useState('')

  const serchBoxSelectedHandler = () => {
    setSearchBoxSelected(true)
    setSearchInput('')
    setProductsFound('')
  }

  const searchInputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase()
    setSearchInput(inputValue)
    setProductsFound(
      allProducts.filter((product) =>
        product.title.toLocaleLowerCase().includes(inputValue),
      ),
    )
    console.log(productsFound)
  }
  return (
    <>
      {/* backdrop  */}
      {searchBoxSelected && (
        <Backdrop show={searchBoxSelected} setShow={setSearchBoxSelected} />
      )}
      {/* Input Search box  */}

      <div
        className={
          !searchBoxSelected
            ? 'flex relative w-full justify-start items-center gap-4 rounded-lg p-3 bg-gray-200 dark:bg-slate-600'
            : ' relative z-[1000] flex w-[25rem] items-center justify-start gap-4 rounded-md bg-white p-3 dark:bg-slate-500'
        }
        onClick={() => serchBoxSelectedHandler()}
      >
        <FaSearch className=" lg:cursor-pointer" />
        <input
          className="flex w-full items-center justify-start bg-transparent  focus:border-none focus:outline-none"
          placeholder="محصول مورد نظرتان را جستوجو کنید"
          value={searchBoxSelected ? searchInput : ''}
          onChange={(e) => searchInputHandler(e)}
        />
      </div>

      {/* found product  */}
      {productsFound && searchBoxSelected && (
        <div className=" absolute right-3 top-[14px] z-[1000] flex max-h-64 w-[90%] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white p-4 dark:bg-gray-800 lg:right-[200px] 2xl:right-[350px] lg:top-[100px] lg:max-h-[30rem] lg:w-[28rem]">
          <div className="mr-8 flex w-full items-center justify-start gap-2 text-lg text-gray-700 dark:text-white/80">
            <HiSquares2X2 />
            جستجو برای...
            {searchInput}
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-6 overflow-auto">
            {productsFound.map((product) => {
              return <Product key={product.id} product={product} />
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default SearchProducts

const Product = ({ product }) => {
  const { id, imageUrl, title } = product
  const history = useNavigate()
  const renderProductPage = () => {
    history({ pathname: `/product/${id}` })
  }

  return (
    <div
      className="flex h-24 w-11/12 items-center justify-start gap-4 rounded-2xl p-2 lg:cursor-pointer"
      onClick={renderProductPage}
    >
      <img src={imageUrl} alt={title} className="w-1/4" />
      <p className="text-lg text-gray-600 dark:text-white/80">{title}</p>
    </div>
  )
}
