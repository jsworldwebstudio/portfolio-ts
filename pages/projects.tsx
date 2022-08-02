import React, { useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { v4 as uuid } from 'uuid'
import { portfolios } from '../data'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { Category } from '../type'
import { motion } from 'framer-motion'
import { stagger, fadeInUp, routeAnimation } from '../animations'
import Head from 'next/head'

const projects = () => {
  const [projects, setProjects] = useState(portfolios)
  const [active, setActive] = useState("all")
  const [showDetail, setShowDetail] = useState<number | null>(null)

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === "all"){
      setProjects(portfolios)
      setActive(category)
      return
    }

    const filteredPortfolios = portfolios.filter((portfolio) => portfolio.category.includes(category))
    setProjects(filteredPortfolios)
    setActive(category)
  }


  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll" style={{ height:'65vh' }}
      variants={routeAnimation}
      initial="hidden"
      animate="show"
      exit="finish"
    >
      <Head>
        <title>Web & Mobile Developer | Projects | James Slaughter</title>
      </Head>
      <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active}/>

      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {
          projects.map(portfolio => (
            <motion.div
              key={uuid()}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={fadeInUp}
            >
              <PortfolioCard portfolio={portfolio} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default projects