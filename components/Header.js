import React from 'react'
import DropdownMenu from './DropdownMenu'
import ThemeToggleBtn from './ThemeToggleBtn'

function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-0 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span className="mb-10">
        <DropdownMenu />
      </span>

      <ThemeToggleBtn />
    </header>
  )
}

export default Header
