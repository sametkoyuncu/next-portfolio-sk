import React from 'react'
import BlogCardHorizontal from '../components/BlogCardHorizontal'
import Layout from '../components/Layout'

function blog() {
  return (
    <>
      <Layout title={'sk.'} description={'Samet Koyuncu Kişisel Websitesi'}>
        <section className="max-w-5xl mx-auto pt-16 md:pt-8">
          <BlogCardHorizontal />
          <BlogCardHorizontal />
          <BlogCardHorizontal />
          <BlogCardHorizontal />
          <BlogCardHorizontal />
        </section>
      </Layout>
    </>
  )
}

export default blog
