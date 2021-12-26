import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Typical from 'react-typical'
import Layout from '../components/Layout'
import GithubIcon from '../components/icons/GithubIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'

export default function Home() {
  const TypingAnimation = memo(
    () => {
      return (
        <Typical
          steps={['Jr. FullStack Developer', 2000, 'Mid. Farmer', 2000]}
          loop={Infinity}
          wrapper="p"
        />
      )
    },
    (props, prevProps) => true
  )
  return (
    <Layout title={'sk.'} description={'Samet Koyuncu Kişisel Websitesi'}>
      <motion.img
        src="images/space/planet-earth.png"
        alt="ball-1"
        className="hidden md:block h-48 w-auto absolute top-60 right-40 z-[1]"
        whileHover={{ y: -10, rotate: 30, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />
      <motion.img
        src="images/space/jupiter.png"
        alt="ball-2"
        className="hidden md:block h-28 w-auto absolute bottom-10 left-20 z-[1]"
        whileHover={{ y: -10, rotate: 30, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />
      <motion.img
        src="images/space/meteorites.png"
        alt="ball-2"
        className="hidden md:block h-10 w-10 absolute top-20 right-96 z-[1]"
        whileHover={{ y: -10, rotate: 30, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Merhaba,</span> ben
            </h4>
            <h1 className="mt-5 text-2xl font-extrabold tracking-normal text-gray-800 uppercase md:text-5xl md:mt-3 dark:text-white">
              Samet Koyuncu
            </h1>
            <div className="mt-5 md:mt-3 text-xl font-normal text-transparent bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text">
              <TypingAnimation />
            </div>
            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/sametkoyuncu"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-sky-400 hover:text-sky-400"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <GithubIcon className={'w-8 h-8 fill-current'} />
              </motion.a>
              <motion.a
                href="https://twitter.com/sametkoyunncu"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-sky-400 hover:text-sky-400"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <TwitterIcon className={'w-8 h-8 fill-current'} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samet-koyuncu/"
                target={'_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-sky-400 hover:text-sky-400"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <LinkedinIcon className={'w-8 h-8 fill-current'} />
              </motion.a>
            </div>
            {/* code area */}
            <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark  min-w-[60%]">
              <div>
                <pre className="min-w-600 dark:bg-zinc-800">
                  <code className="language-js min-w-[60%] ">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://avatars.githubusercontent.com/u/17934179?v=4"
                        alt="Me"
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="">
                        <p className="text-sm">
                          <span className="text-pink-300"> {'>'} </span>
                          <span className="font-bold text-pink-300">
                            npm
                          </span>{' '}
                          init
                        </p>
                        <p className="text-sm">
                          <span className="text-pink-300"> {'>'} </span>
                          <span className="font-bold text-pink-300">
                            npm
                          </span>{' '}
                          install{' '}
                          <span className="font-bold text-sky-300">
                            express
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="text-pink-300"> {'>'} </span>
                          <span className="font-bold text-pink-300">
                            npm
                          </span>{' '}
                          install{' '}
                          <span className="font-bold text-sky-300">react</span>
                        </p>
                      </div>
                    </div>
                  </code>
                </pre>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  )
}
