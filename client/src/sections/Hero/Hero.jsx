import styles from "./HeroStyles.module.css";
import profileimg from "../../assets/profileImage.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv2.pdf"
import { useTheme } from "../../common/ThemeContext";
import { motion } from "motion/react";

function Hero() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === "light" ? sun: moon;
    const twitterIcon = theme === "light" ? twitterLight: twitterDark;
    const githubIcon = theme === "light" ? githubLight: githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight: linkedinDark;
  return (
    <motion.section 

     initial={{opacity:0.2, y:50}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={profileimg} alt="Profile pic" />
            <img className={styles.colorMode} src={themeIcon} alt="mode change" onClick = {toggleTheme }/>
        </div>
        <div className={styles.info}>
            <h1>Rocky <br />Roy</h1>
            <h2>Full Stack Developer</h2>
            <span class ="span">
                <a href="https://x.com/RockyRoy96729" target="_blank">
                <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="https://github.com/RockyR6" target="_blank">
                <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/rocky-roy-r76/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>Passionate Full Stack Developer skilled in front-end and back-end,<br/> creating dynamic, responsive web applications.</p>
            <a href={CV} download>
            <button className="hover">Resume</button>
            </a>
        </div>
    </motion.section>
  )
}

export default Hero
