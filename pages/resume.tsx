import React from 'react'
import { languages, tools } from '../data'
import { v4 as uuid } from 'uuid'
import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="hidden"
      animate="show"
      exit="finish"
    >

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">BS in Computer Science</h5>
            <p className="font-semibold">Illinois Institute of Technology</p>
            <p className="my-3">My education minor was in Business Administration</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Independent Consultant</h5>
            <p className="font-semibold">2009 - Present</p>
            <p className="my-3">Currently using newer, leading-edge technologies to build complete applications</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => (
                <Bar key={uuid()} data={language} />
              ))
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {
              tools.map(tool => (
                <Bar key={uuid()} data={tool} />
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume