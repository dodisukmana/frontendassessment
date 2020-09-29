import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import AdsTop from './components/AdsTop';
import EditorChoice from './components/EditorChoice';
import ProductSuggest from './components/ProductSuggest';
import AdsMiddle from './components/AdsMiddle';
import LatestArticle from './components/LatestArticle';
import LatestReview from './components/LatestReview';
import TopBrands from './components/TopBrands';

class App extends React.Component {

  render() {
    return (
        <div>
          <Navbar />

          <Nav />

          <AdsTop />

          <EditorChoice />

          <ProductSuggest />

          <AdsMiddle />

          <LatestArticle />

          <LatestReview />

          <TopBrands />
        </div>
      );
  }
  
}

export default App;
