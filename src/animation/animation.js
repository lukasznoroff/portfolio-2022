export const textAnimation = {
  hidden: {x: -200},
  show: {
      x: 0,
      transition: {duration: 0.7, ease: "easeOut"},
  },
};

export const textAnimation2 = {
  hidden: {y: -200, scale: 13, opacity: 0.2},
  show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {duration: 0.7, ease: "easeOut"},
  },
};

export const textAnimation3 = {
  hidden: {y: 10, opacity: 0},
  show: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.7, ease: "easeOut", delay: 1.3},
  },

};

export const cardAnimation = {
  hidden:{
      transition: {x: -200,
          staggerChildren: 0.2,
          staggerDirection: -1
      }
  },
  show: {
      x: 0,
      transition: {duration: 0.4, ease: "easeOut", staggerChildren: 0.2,
          staggerDirection: 1},
  },
};


export const pageTransition = {
  hidden: {
      opacity: 0.6,
  },
  show: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 0.9, type: 'spring', damping: 50,
      },
  },
  exit: {
      opacity: 0,
      transition: {
          duration: 1
      }
  }
}

export const pageTransitionProjects = {
  hidden: {
      x: "-20%",
  },
  show: {
      x: 0,
      opacity: 1,
      transition: {
          // duration: 0.8, damping: 50, delay: .5
          duration: 0.5, damping: 10, delay: 2
      },
  },
}