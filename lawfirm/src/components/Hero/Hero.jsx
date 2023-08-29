// import React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import heroImage from "../../assets/heroimage.png";
// import styles from "./Hero.module.css";

// function Hero() {

//   return (
//     <div className={styles.hero}>
//       <Container maxWidth="xl">
//         <Toolbar>
//           <Grid container alignItems="center" className={styles.container}>
//             <Grid item xs={12} md={6} className={styles.heroText}>
//               <Typography variant="h4" gutterBottom className={styles.font}>
//                 You don’t have to <br />
//                 <span className={styles.fontNormal}>Fight them Alone.</span>
//               </Typography>
//               <Typography variant="h4" gutterBottom>
//                 Your Second Sentence
//               </Typography>
//               <Typography variant="h4" gutterBottom>
//                 Your Third Sentence
//               </Typography>
//               <Button variant="contained" color="secondary">
//                 Learn More
//               </Button>
//             </Grid>
//             <Grid item xs={12} md={6} className={styles.heroImg}>
//               <img src={heroImage} alt="Hero" className={styles.heroImage} />
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Container>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import heroImage from "../../assets/heroimage.png";
import styles from "./Hero.module.css";
import Box from "@mui/system/Box"; // Import Box from @mui/system
import { ReactComponent as SearchIcon } from '../../assets/Message.svg';

function Hero() {
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
  };
  return (
    <Box component="div" className={styles.hero} id="home">
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container alignItems="center" className={styles.container}>
            <Grid item xs={12} md={6} className={styles.heroText}>
              <Typography variant="h4" gutterBottom className={styles.font}>
                You don’t have to <br />
                <span className={styles.fontNormal}>Fight them Alone.</span>
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                className={styles.smallFont}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </Typography>
              <form className={styles.searchBar} onSubmit={handleSearch}>
                <div className={styles.inputContainer}>
                  <SearchIcon/>
                  <input
                    type="text"
                    placeholder="Enter your eamil address"
                    className={styles.input}
                  />
                  <button type="submit" className={styles.searchButton}>
                  Let’s Talk
                </button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={6} className={styles.heroImg}>
              <img src={heroImage} alt="Hero" className={styles.heroImage} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Hero;
