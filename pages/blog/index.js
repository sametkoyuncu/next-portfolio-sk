import BlogCardHorizontal from '../../components/BlogCardHorizontal'
import Layout from '../../components/Layout'
import { getAllBlogs } from '../../functions/getAllBlogs'
import { useBlogs } from '../../context/BlogContext'
import Link from 'next/link'

function blog({ blogs }) {
  const { blogContext, setBlogContext } = useBlogs()
  setBlogContext(blogs)

  return (
    <Layout
      title={'sk. | Blog'}
      description={'Samet Koyuncu Kişisel Websitesi'}
    >
      <section className="max-w-5xl mx-auto pt-16 md:pt-8 grid place-content-center">
        {blogContext.map((blog) => (
          <Link href={`/blog/${blog.id}`}>
            <div key={blog.id}>
              <BlogCardHorizontal blog={blog} />
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const blogs = await getAllBlogs()
  return {
    props: { blogs },
  }
}

export default blog
