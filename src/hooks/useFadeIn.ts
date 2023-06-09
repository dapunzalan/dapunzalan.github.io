import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useFadeIn = ({
  customVars,
  delay,
  duration,
  repeat,
  threshold,
}: any) => {
  const ctrls = useAnimation()
  const { ref, inView } = useInView({
    threshold: threshold || 0.75,
    triggerOnce: repeat ? false : true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const vars = customVars || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: duration || 1,
      },
    },
  }

  return { ref, ctrls, vars }
}

export default useFadeIn