import { motion } from 'framer-motion'
import AnimateTitle from '../../components/AnimateTitle'
import styled from 'styled-components'
import styles from './index.module.scss'
import useAnimateIn from '../../hooks/useAnimateIn'
import { Facebook, Instagram, LinkedIn, Twitter } from '../../components/Icons'

const Wrapper = styled.div<{delay: string}>`
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

const SocialMedia = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  gap: 48px;
  align-items: center;

  & > a > svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`

const Item = styled.a`
  position: relative;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
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
            <Description
              ref={introRef}
              initial="hidden"
              animate={introCtrls}
              variants={introVars}
              >
              Hello I'm
            </Description>
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
          <Wrapper delay="1.4s">
            <SocialMedia>
              <Item
                href="https://www.facebook.com/dexteridiculous"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook color="#FFFFFF" />
              </Item>
              <Item
                href="https://twitter.com/dexteridiculous"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter color="#FFFFFF" />
              </Item>
              <Item
                href="https://www.instagram.com/_dexyzzz"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram color="#FFFFFF" />
              </Item>
              <Item
                href="https://www.linkedin.com/in/dapunzalan/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn color="#FFFFFF" />
              </Item>
            </SocialMedia>
          </Wrapper>
        </div>
      </div>
      <Wrapper delay="1.5s">
        <div className={styles.introduction__profile}>
          <img src="/images/profile-black.png" alt="profile" />
        </div>
      </Wrapper>
    </div>
  )
}

export default Introduction