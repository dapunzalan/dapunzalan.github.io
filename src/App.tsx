import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'
import Header from './components/Header'
import Introduction from './sections/introduction'
import './App.scss'
import Skills from './sections/skills'

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);

  return (
    <>
      <div className='app'>
        <Header />
        <Particles
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            name: 'Basic',
            particles: {
              number: {
                value: 100,
                density: {
                    enable: true,
                },
              },
              color: {
                  value: '#03C988',
                  animation: {
                      enable: true,
                      speed: 20,
                      sync: true,
                  },
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: {
                  min: 1,
                  max: 3,
                },
              },
              links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                repulse: {
                    distance: 200,
                },
                push: {
                    quantity: 4,
                },
              },
            },
          }}
        />
        <Introduction />
        <Skills />
      </div>
    </>
  )
}

export default App
