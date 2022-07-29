// import { GetServerSidePropsContext } from 'next'
// import { GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { v4 as uuid } from 'uuid'
import { motion } from 'framer-motion'
import { stagger, fadeInUp, routeAnimation } from '../animations'

const index = () => {

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="hidden"
      animate="show"
      exit="finish"
    >
      <h5 className="my-3 font-medium">
        This will be my intro to development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {
            services.map(service => (
              <motion.div
                key={uuid()}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

// export const getStaticProps = async (context:GetStaticPropsContext)=>{
//   //calculation

//   const res = await fetch(`{process.env.VERCEL_URL}/api/services`)
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }

// export const getServerSideProps = async (context:GetServerSidePropsContext)=>{
//   //calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }