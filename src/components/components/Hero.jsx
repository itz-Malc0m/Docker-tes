import {motion} from 'framer-motion'
import {styles} from '../../style'
import {Canvas} from '@react-three/fiber'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#31C48D]' />
        <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, Itz <span className='text-[#31C48D]'>MALC0M</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visuals, user interfaces<br className='sm:block hidden'/> intergrated to web applications on Docker.
          </p>
        </div>
        <Canvas>

      <ComputersCanvas />
        </Canvas>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="
          w-[35px] h-[64px] 
          rounded-full 
          border-4 
          border-secondary 
          flex 
          justify-center 
          items-start 
          p-2">
            <motion.dev 
            animate={{
              y: [0,24,0]
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
             />

          </div>
        </a>
      </div>
      </div>
    </section>
  )
}

export default Hero