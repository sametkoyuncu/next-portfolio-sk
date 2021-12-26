import React from 'react'
import BlogCardHorizontal from '../../components/BlogCardHorizontal'
import Layout from '../../components/Layout'
import { getAllBlogs } from '../../functions/getAllBlogs'

function blog({ blogs }) {
  return (
    <>
      <Layout
        title={'sk. | Blog'}
        description={'Samet Koyuncu Kişisel Websitesi'}
      >
        <section className="max-w-5xl mx-auto pt-16 md:pt-8">
          {blogs.map((blog) => (
            <BlogCardHorizontal key={blog.id} blog={blog} />
          ))}
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const blogs = await getAllBlogs()
  return {
    props: { blogs },
  }
}

export default blog
