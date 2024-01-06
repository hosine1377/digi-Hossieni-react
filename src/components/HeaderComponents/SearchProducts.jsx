import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchProducts() {
  return (
    <div className="flex w-full items-center justify-start gap-4 rounded-lg bg-gray-200 p-3 dark:bg-slate-600 relative">
      <FaSearch />
      <input
        className="flex w-full items-center justify-start bg-transparent  focus:border-none focus:outline-none"
        placeholder="محصول مورد نظرتان را جستوجو کنید"
      />
    </div>
  )
}

export default SearchProducts
