function BlogCardHorizontal() {
  return (
    <div
      class="max-w-sm w-full lg:max-w-full lg:flex mb-4"
      style={{ cursor: 'pointer' }}
    >
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: "url('/images/blog/card-left.jpg')" }}
        title="Woman holding a mug"
      ></div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-white dark:border-zinc-900 dark:lg:border-zinc-900 dark:bg-zinc-800 ">
        <div class="mb-8">
          <div class="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p class="text-gray-700 dark:text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="/images/blog/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none dark:text-white">
              Jonathan Reinink
            </p>
            <p class="text-gray-600 dark:text-gray-300">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardHorizontal
