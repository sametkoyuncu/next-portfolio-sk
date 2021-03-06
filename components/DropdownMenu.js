import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function DropdownMenu({ pages }) {
  const [menuShow, setMenuShow] = useState(false)
  return (
    <span className="relative z-10">
      <button
        className={`shadow-lg absolute top-0 text-gray-800 dark:text-white bg-transparent hover:bg-gray-200 focus:transparent focus:transparent font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:transparent dark:hover:bg-zinc-800 dark:focus:transparent ${
          menuShow ? 'bg-gray-200 dark:bg-zinc-800' : ''
        }`}
        type="button"
        onClick={() => (menuShow ? setMenuShow(false) : setMenuShow(true))}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </motion.svg>
      </button>

      <div
        className={`${
          menuShow ? '' : 'hidden'
        } absolute top-0 left-20 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 dark:bg-zinc-800 shadow-lg`}
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {pages.map((page, index) => (
            <li key={index}>
              <Link href={page.disabled ? '#' : page.link}>
                <a
                  href={page.link}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-900 dark:text-gray-200 dark:hover:text-white"
                >
                  {page.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </span>
  )
}

export default DropdownMenu
