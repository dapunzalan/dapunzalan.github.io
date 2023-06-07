import SectionTitle from "../../components/SectionTitle"
import { Technology } from "../../components/Icons"
import styles from './index.module.scss'

const skills = [
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
  return (
    <div className={styles.skills} id="skills">
      <SectionTitle title="Skills" />
      <div className={styles.skills__list}>
        {
          skills.map((skill, i) => (
            <div key={`${skill.icon}-${i}`}>
              <Technology name={skill.icon} color="#03C988" />
              <p>{skill.label}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills