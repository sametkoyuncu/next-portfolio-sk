import React from 'react'
import DropdownMenu from './DropdownMenu'
import ThemeToggleBtn from './ThemeToggleBtn'

const pages = [
  { name: 'Anasayfa', link: '/', disabled: false },
  { name: 'Blog', link: '/blog', disabled: false },
  { name: 'Projelerim', link: '/projects', disabled: false },
  { name: 'Ben Kimim?', link: '/about', disabled: false },
  { name: 'İletişim', link: '/contact', disabled: true },
]

function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-4 py-5 h-16 max-w-5xl mx-auto ">
      <span className="mb-10">
        <DropdownMenu pages={pages} />
      </span>
      <ThemeToggleBtn />
    </header>
  )
}

export default Header
