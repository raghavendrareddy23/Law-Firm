import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
// import { Link } from "react-scroll";
import styles from "./SectionButtons.module.css";

const sections = ["Home", "Attorneys", "Practice Areas", "About Us"];

function Buttons() {
  return (
    <div className={styles.button}>
      <AppBar position="static" className={styles.button}>
        <Container maxWidth="xl" className={styles.button}>
          <Toolbar className={styles.toolbar}>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className={styles.sectionLink}
              >
                {section}
              </a>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Buttons;
