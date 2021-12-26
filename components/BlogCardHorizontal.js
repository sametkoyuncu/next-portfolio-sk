import moment from 'moment'
moment().locale('tr')
import { motion } from 'framer-motion'

function BlogCardHorizontal({
  blog: { id, title, content, cover, createdAt },
}) {
  return (
    <motion.div
      class="max-w-sm w-full lg:max-w-full lg:flex mb-5 shadow-lg "
      style={{ cursor: 'pointer' }}
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
    >
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden rounded-l-lg"
        style={{ backgroundImage: `url('${cover.url}')` }}
        title="Woman holding a mug"
      ></div>
      <div class=" p-4 flex flex-col justify-between leading-normal rounded-r-lg bg-white  dark:bg-zinc-800 ">
        <div class="mb-8">
          <div class="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">
            {title}
          </div>
          <p class="text-gray-700 dark:text-white text-base">
            {content.slice(0, 200) + '...'}
          </p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://avatars.githubusercontent.com/u/17934179?v=4"
            alt="Avatar of Samet Koyuncu"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none dark:text-white">
              Samet Koyuncu
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              {moment(createdAt).format('DD MMM yyyy')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCardHorizontal
