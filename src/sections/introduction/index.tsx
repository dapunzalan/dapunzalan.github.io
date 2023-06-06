import { motion } from 'framer-motion'
import AnimateTitle from '../../components/AnimateTitle'
import styled from 'styled-components'
import styles from './index.module.scss'
import useAnimateIn from '../../hooks/useAnimateIn'

const Wrapper = styled.div<{delay: string}>`
  & > p {
    font-size: 1rem;
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: appear 1s ease-out both;
  animation-delay: ${(props) => props.delay};
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  max-width: 34rem;
`;

const Introduction = () => {
  // Intro animation
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({
    delay: 0.5,
    threshold: 0.5,
  })

  return (
    <div className={styles.introduction}>
      <div className={styles.introduction__info}>
        <div>
          <Wrapper delay="0.6s">
            <p>Hello I'm</p>
          </Wrapper>
          <Wrapper delay="0.7s">
            <AnimateTitle title="Dexter Ariel Punzalan" />
          </Wrapper>
          <Wrapper delay="0.8s">
            <Description
              ref={introRef}
              initial="hidden"
              animate={introCtrls}
              variants={introVars}
            >
              A Software Engineer with over 4 years of Front-End Experience and passion for web development. 
              Familiar with applicable design and user practices. Successful at creating and improving designs to meet
              company brand styles and business needs.      
            </Description>
          </Wrapper>
        </div>
      </div>
      <Wrapper delay="0.9s">
        <div className={styles.introduction__profile}>
          <img src="/images/profile.png" alt="profile" />
        </div>
      </Wrapper>
    </div>
  )
}

export default Introduction