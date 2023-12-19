import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink';
import { Link } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';


function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    


    return(
        <FeedbackProvider>
            <Router>
                <Link to='/'>
                    <Header/>
                </Link>
                <div className="container">
                    <Routes>
                        <Route exact path= "/" element={
                            <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList/>
                            </>
                        }/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    );
}
export default App;