import Header from "../../components/header/index";
import Nukenzie from '../../imgs/Nukenzie.png'
import KenzieBurguers from '../../imgs/KenzieBurguers.png'
import KenzieHub from '../../imgs/KenzieHub.png'
import Portifolio from '../../imgs/Portifolio.png'
import { motion } from "framer-motion";
import { CardProject, ProjectsContainer } from "./style";
import Button from "../../components/button";
export default function Projects() {
  return (
    <>
      <Header />
      <ProjectsContainer>
      <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
      <CardProject>
            <img src={KenzieHub} alt='KenzieHub website'></img>
          <h2>Kenzie Hub</h2>
          <p>Kenzie Hub is a website for developers, they can add their starcks and skills and what level of experience they have in each one of those stacks and skills. I use an Public API, React.js, Styled-components, Yup, and React-hooks.</p>
          <Button handleClick={'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-luizcredidio'} title={'GIT HUB'}>Git Hub</Button>
          <Button handleClick={'https://react-entrega-s2-kenzie-hub-luizcredidio.vercel.app/'} title={'WEBSITE'}>Go to Website</Button>
        </CardProject>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 3.5 }}
        >
      <CardProject>
            <img src={KenzieBurguers} alt='KenzieBurguers website'></img>
          <h2>Burguer Shop</h2>
          <p>This is an e-commerce website, I used React and a Public API, in this website you can search, look at the products and add to your cart</p>
          <Button handleClick={'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-luizcredidio'} title={'GIT HUB'}>Git Hub</Button>
          <Button handleClick={'https://react-entrega-s1-hamburgueria-da-kenzie-luizcredidio.vercel.app/'} title={'WEBSITE'}>Go to Website</Button>
        </CardProject>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4.5 }}
        >
        <CardProject>
            <img src={Nukenzie} alt='Nukenzie Website'></img>
          <h2>Finance controler</h2>
          <p>This is a Personal Finance website, in this application you can control and see how much you spent, received and have in your account. It gives you details about each transaction. This Project was made with React.JS</p>
          <Button handleClick={'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-luizcredidio'} title={'GIT HUB'}>Git Hub</Button>
          <Button handleClick={'https://react-entrega-s1-nu-kenzie-luizcredidio.vercel.app/'} title={'WEBSITE'}>Go to Website</Button>
        </CardProject>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4.5 }}
        >
        <CardProject>
            <img src={Portifolio} alt='Portifolio'></img>
          <h2>Finance controler</h2>
          <p>This is my Portifolio, I used React, React-router-dom, React-icons, Styled-components and Framer-motion to build this website. You can check the code clicking on the button below</p>
          <Button handleClick={'https://github.com/luizcredidio/luiz-portifolio-front-end'} title={'GIT HUB'}>Git Hub</Button>
        </CardProject>
        </motion.div>


        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 5.5 }}
        >
        <CardProject>
          <h2>Page in construction...</h2>
          <h2>Older projects are going to be uploaded here</h2>
        </CardProject>
        </motion.div>
        

          
      </ProjectsContainer>
    </>
  );
}
