export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  },
}
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
}
export const routeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1,
    }
  },
  finish: {
    opacity: 0,
    transition: {
      delay: 0.1,
      ease: "easeInOut",
    }
  }
}