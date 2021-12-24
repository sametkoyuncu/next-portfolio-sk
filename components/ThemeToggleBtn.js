// import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'
import { useTheme } from 'next-themes'
function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme()
  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        checked={theme === 'dark' ? true : false}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon fa-xs"></i>
        <i className="fas fa-sun fa-xs"></i>
        <div className="ball"></div>
      </label>
    </div>
  )
}

export default ThemeToggleBtn
