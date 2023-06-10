import SectionTitle from "../../components/SectionTitle"
import { Technology, TechnologyName } from "../../components/Icons"
import styles from './index.module.scss'
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface SkillProps {
  icon: TechnologyName
  label: string
}

const skills: SkillProps[] = [
  {
    icon: 'html',
    label: 'Html 5'
  },
  {
    icon: 'css',
    label: 'Css'
  },
  {
    icon: 'sass',
    label: 'Sass'
  },
  {
    icon: 'js',
    label: 'Javascript'
  },
  {
    icon: 'ts',
    label: 'Typescript'
  },
  {
    icon: 'angular',
    label: 'Angular JS'
  },
  {
    icon: 'react',
    label: 'React JS'
  },
  {
    icon: 'next',
    label: 'Next JS'
  },
  {
    icon: 'vite',
    label: 'Vite JS'
  },
  {
    icon: 'electron',
    label: 'Electron'
  },
  {
    icon: 'storybook',
    label: 'Storybook JS'
  },
  {
    icon: 'git',
    label: 'Git'
  },
  {
    icon: 'aws',
    label: 'AWS'
  },
  {
    icon: 'graphql',
    label: 'GraphQL'
  },
]

const Skills = () => {

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    console.log(inView)
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  // Animation
  const techAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <div className={styles.skills} id="skills">
      <SectionTitle title="Skills & Technologies" />
      <div className={styles.skills__list}>
        {
          skills.map((skill, i) => (
            <motion.div 
              key={`${skill.label}-${i}`}
              ref={ref}
              aria-hidden="true"
              initial="hidden"
              animate={ctrls}
              variants={techAnimation}
              transition={{
                delayChildren: i * 0.25,
                staggerChildren: 0.05,
              }}
              >
              <Technology name={skill.icon} color="#03C988" />
              {/* <p>{skill.label}</p> */}
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills