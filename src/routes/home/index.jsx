import Header from "../../components/header";
import { Main } from "../../components/mainDiv/style";
import ProfilePic from "../../imgs/ProfilePic.png";
import { AboutMeDiv, AboutMeTitle, ProfileImg } from "./style";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <ProfileImg src={ProfilePic} alt="ProfilePicture"></ProfileImg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <AboutMeTitle>
            <h1>About Me</h1>
          </AboutMeTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <AboutMeDiv>
            <p>
              I graduated from Kenzie Academy Bootcamp with one of the best
              grades of my class, I had a GPA of 4.0 and during the time that I
              was studing I was offered to work as a teaching assistant at
              Kenzie Academy. This Bootcamp had the porpouse to prepare us to
              work, so during 8 months we had weekly projects, individual and in
              groups, we worked in an agile enviroment with daily, sprints etc.
            </p>
            <p>
              I'm currently working as a freelance developer and also learning
              and developing backend skils.
            </p>
          </AboutMeDiv>
        </motion.div>
      </Main>
    </>
  );
}
