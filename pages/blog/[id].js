import { useRouter } from 'next/router'
import { useBlogs } from '../../context/BlogContext'
import Layout from '../../components/Layout'

function singleBlog() {
  const router = useRouter()
  const { id } = router.query
  const { blogContext } = useBlogs()

  const blog = blogContext.filter((blog) => blog.id == id)

  return (
    <div>
      <Layout title={`sk. | ${id}`} description={id}>
        {blog.length < 1 ? (
          <div className="text-center bg-red-500 max-w-lg rounded-lg shadow-lg mx-auto mt-10 p-16 text-white text-2xl text-extrabold uppercase">
            Blog Bulunamadı.
            <p>
              Eğer sayfayı yenilediyseniz, blog sayfasından tekrar blog seçmeyi
              deneyin.
            </p>
          </div>
        ) : (
          <section className="max-w-5xl mx-auto pt-16 md:pt-8 mb-20 bg-white dark:bg-zinc-800 rounded-lg shadow-lg px-8 py-3 mt-6">
            <img
              className="shadow-md mx-auto"
              src={blog[0].cover.url}
              alt={blog[0].title}
            />
            <p className="mt-4 mb-4 font-bold text-2xl">{blog[0].title}</p>
            <p>{blog[0].content}</p>
          </section>
        )}
      </Layout>
    </div>
  )
}
export default singleBlog
