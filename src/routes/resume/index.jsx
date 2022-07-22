import Header from "../../components/header";
import { Main } from "../../components/mainDiv/style";
import { CardProject } from "../projects/style";
import { motion } from "framer-motion";

export default function Resume(){
    return(
        <>
        <Header/>
        <Main>
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
            <CardProject>
                <h1>Page in construction...</h1>
                <h2>Resume will be uploaded here</h2>
            </CardProject>
            </motion.div>
        </Main>
        </>
    )
}