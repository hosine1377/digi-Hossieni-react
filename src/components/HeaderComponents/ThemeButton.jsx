import { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'

function ThemeButton() {
  const saveTheme = JSON.parse(localStorage.getItem('theme') || `[]`)
  const [theme, setTheme] = useState(
    saveTheme.length !== 0 ? saveTheme : 'light',
  )

  useEffect(() => {
    if (saveTheme.length === 0) {
      localStorage.setItem('theme', JSON.stringify('light'))
      setTheme('light')
    }
    theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark')
  }, [])

  const darkModeHandler = () => {
    const theme = JSON.parse(localStorage.getItem('theme') || `[]`)
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', JSON.stringify('light'))
    }
  }
  return (
    <div
      className="MdDarkMode h-full rounded-lg border border-yellow-500 px-4 py-2 text-lg shadow-lg dark:border-2  dark:border-violet-500 lg:cursor-pointer"
      onClick={darkModeHandler}
    >
      {theme === 'dark' ? (
        <p className="text-xl text-white/80">D</p>
      ) : (
        <p className="text-xl text-yellow-500">L</p>
      )}
    </div>
  )
}

export default ThemeButton
