import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import Head from "next/head"
import resumeData from '../../public/resumeData.json'

const App = () => {
  return (
    <div className="App">
      <Head>
        <title>Angelo's Resume: The way of everything</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&family=Montserrat:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;