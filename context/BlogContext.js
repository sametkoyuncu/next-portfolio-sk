import { createContext, useContext, useState } from 'react'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const [blogContext, setBlogContext] = useState([])
  const values = {
    blogContext,
    setBlogContext,
  }
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>
}

export const useBlogs = () => useContext(BlogContext)
