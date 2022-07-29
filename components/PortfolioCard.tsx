import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { IProject } from '../type'
import { v4 as uuid } from 'uuid'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../animations'

const PortfolioCard:FunctionComponent<{
  portfolio: IProject;
  showDetail: number | null;
  setShowDetail: (id: null | number) => void;
}> = ({
  portfolio: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  },
  showDetail,
  setShowDetail
}) => {

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      {/* <img
        className="cursor-pointer"
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeInUp} className="border-4 border-gray-100">
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
              <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                <AiFillGithub /> <span>Github</span>
              </a>
              <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>
            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider" variants={fadeInUp}>
              {
                key_techs.map((tech) => (
                  <span className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200" key={uuid()}>{tech}</span>
                ))
              }
            </motion.div>
          </motion.div>
          <button onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default PortfolioCard