import { HeaderDiv, LinksDiv, NameDiv, StyledLink } from "./style";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory()
  return (
    <HeaderDiv>
      <NameDiv onClick={() => history.push('/')}>
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p>LC</p>
        </motion.div>
      </NameDiv>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <LinksDiv>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/Resume">Resume</StyledLink>
          <StyledLink to="/contact-me">Contact me</StyledLink>
        </LinksDiv>
      </motion.div>
    </HeaderDiv>
  );
}
