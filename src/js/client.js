import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , IndexRoute , hashHistory } from "react-router";

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio1 from './pages/Portfolio1'
import Portfolio2 from './pages/Portfolio2'
import Portfolio3 from './pages/Portfolio3'
import Portfolio4 from './pages/Portfolio4'
import PortfolioSingle from './pages/PortfolioSingle'

import FullWidthPage from './pages/FullWidthPage'
import SidebarPage from './pages/SidebarPage'
import FAQ from './pages/FAQ'
import Error from './pages/Error'
import PricingTable from './pages/PricingTable'
import PortfolioItem from './pages/PortfolioItem'

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}> 
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="services" component={Services}></Route>
            <Route path="contact" component={Contact}></Route>
            <Route path="portfolio1" component={Portfolio1}></Route>
            <Route path="portfolio2" component={Portfolio2}></Route>
            <Route path="portfolio3" component={Portfolio3}></Route>
            <Route path="portfolio4" component={Portfolio4}></Route>
            <Route path="portfolioSingle" component={PortfolioSingle}></Route>
            <Route path="fullWidthPage" component={FullWidthPage}></Route>
            <Route path="sidebarPage" component={SidebarPage}></Route>
            <Route path="faq" component={FAQ}></Route>
            <Route path="error" component={Error}></Route>
            <Route path="pricingTable" component={PricingTable}></Route>
            <Route path="PortfolioItem" component={PortfolioItem}></Route>
            
            
        </Route>
    </Router>  
,app);
