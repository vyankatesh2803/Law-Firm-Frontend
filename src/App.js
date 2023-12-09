import './App.css';
import HomePage from './Components/HomePage/HomePage'
import Introduction from './Components/Introduction/Introduction';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import PracticeAreas from './Components/PracticeAreas/PracticeAreas';
import ClientReview from './Components/ClientReviews/ClientReview';
import OurTeam from './Components/OurTeam/OurTeam';
import FAQ from './Components/FAQ/FAQ';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Introduction />
      <WhyChooseUs />
      <PracticeAreas />
      <ClientReview />
      <OurTeam />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
