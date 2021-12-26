import { motion } from 'framer-motion'
function ProjectCard({
  project: { title, description, image, source, tags, previewSource },
}) {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full" src={image.url} alt={title} />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2 dark:text-gray-200">{title}</div>
        <p className="text-gray-700 text-base dark:text-white mb-2">
          {description}
        </p>
        <a
          href={source}
          target={'_blank'}
          className="text-sky-500 hover:text-sky-800 border-sky-800 text-base hover:border-b dark:boder-sky-400 dark:text-sky-200  dark:hover:text-sky-400"
        >
          Github'da İncele
        </a>
        {previewSource !== null && (
          <a
            href={previewSource}
            target={'_blank'}
            className="text-sky-500 hover:text-sky-800 ml-5 border-sky-800 text-base hover:border-b dark:boder-sky-400 dark:text-sky-200  dark:hover:text-sky-400"
          >
            Siteye Git
          </a>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard
