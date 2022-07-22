import Header from "../../components/header";
import { Main } from "../../components/mainDiv/style";
import { CardProject } from "../projects/style";
import { RiCellphoneFill } from "react-icons/ri";
import { InfoBox } from "./style";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <>
      <Header />
      <Main>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >

        <CardProject>
          <InfoBox>
            <RiCellphoneFill />
            <h2>Phone:</h2>
            <p>+1 438 528-5661</p>
          </InfoBox>

          <InfoBox>
            <MdEmail />
            <h2>Email:</h2>
            <p>luizmarinhocredidio@gmail.com</p>
          </InfoBox>

          <InfoBox>
            <BsLinkedin />
            <h2>Linkedin:</h2>
            <p>linkedin.com/in/luizcredidio</p>
          </InfoBox>
        </CardProject>
        </motion.div>
      </Main>
    </>
  );
}
