import styles from './ProjectsStyles.module.css';
import weatericon from '../../assets/weather-icon.png';
import freshBurger from '../../assets/fresh-burger.png';
import viberr from '../../assets/viberr.png';
import genImg from '../../assets/camera.png';
import todoicon from '../../assets/todo.png.png';
import ProjectCard from '../../common/ProjectCard';
import logocart from '../../assets/LogoCart.png';
import ChatIcon from '../../assets/chat_big.svg';
import Zoom from '../../assets/zoom.png'
import { motion } from "motion/react";


function Projects() {
  return (
    <motion.section 

    initial={{opacity:0.2, y:50}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
         <ProjectCard
          src={logocart}
          link="https://logo-cart.vercel.app/"
          h3="LogoCart"
          p="E-commerce"
        />
        <ProjectCard
          src={weatericon}
          link="https://weather-report-liard-five.vercel.app/"
          h3="Weather"
          p="Weather App"
        />
        <ProjectCard
          src={ChatIcon}
          link="https://chat-app-five-flame.vercel.app/"
          h3="MeChat"
          p="Online Chatting"
        />
        <ProjectCard
          src={Zoom}
          link="https://room-video-calling-tawny.vercel.app"
          h3="Room"
          p="videoCalling"
        />
         <ProjectCard
          src={freshBurger}
          link="https://feed-me-cyan.vercel.app/"
          h3="FEEDme"
          p="Online Restaurant"
        />
        <ProjectCard
          src={viberr}
          link="https://genimage-beta.vercel.app/"
          h3="InstagramClone"
          p="Connect with your friends"
        />
         <ProjectCard
          src={genImg}
          link="https://instagramclone-tdhc.onrender.com"
          h3="AI Image Generator"
          p="Connect with your friends"
        />
        <ProjectCard
          src={todoicon}
          link="https://to-do-list-umber-eta.vercel.app/"
          h3="ToDo"
          p="To-Do App"
        />
      </div>
    </motion.section>
  );
}

export default Projects;
