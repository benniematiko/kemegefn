import { ThemeProvider } from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./components/styles/Globals.styled";
import { Navbar } from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import Education from "./pages/education/Education";
import Campaigns from "./pages/campaigns/Campaigns";
import Pwdsupport from "./pages/supportpwd/Pwdsupport";
import Footer from "./components/layout/Footer";
import FooterCopyRight from "./components/layout/FooterCopyRight";
import PhotoGallary from "./pages/photogallary/PhotoGallary";

const App = () => {
  // We create a theme heree, such as common colors

  const theme = {
    colors: {
      white: "rgba(240, 247,255, 1)",
      navyBlue: "rgba(2,12,27,1)",
      lightNavyBlue: "rgba(4,22,48,1)",
      green: "rgba(0,206, 158, 1)",
      orange: "rgba(249, 105, 14,1)",
      purple: "rgba(102, 51,153,1)",
    },
    mobile: "768px",
    // transition: "all 650ms ease-in-out",
    transition: "all 0.15s ease-in",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pwdsupport" element={<Pwdsupport />} />
            <Route path="/education" element={<Education />} />
            <Route path="/photogallary" element={<PhotoGallary />} />
          </Routes>

          <Footer />
          <FooterCopyRight />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
