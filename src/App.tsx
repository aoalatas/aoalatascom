import React, { Component } from "react";
import ReactGA from "react-ga";
import './App.css';
import axios from 'axios'

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SiteDataType from "./types/SiteDataType";

import data  from './sitedata/data.json';

type AppProps = {
  
}

type AppState = {
  siteData : SiteDataType
}

class App extends Component<AppProps, AppState>  {
  state: AppState = {
    siteData: new SiteDataType()
  };

  constructor(props: AppProps) {
    super(props);

    ReactGA.initialize("UA-43265943-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    // var self = this;
    // axios.get('sitedata/resumeData.json')
    //     .then(function (response) {
    //       console.log(response);
          



    //       //self.setState({ resumeData: response });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //     .then(function (data) {
    //       console.log(data);
    //     });

    let siteData = new SiteDataType();
    siteData.main = data.main;
    siteData.resume = data.resume;
    siteData.portfolio = data.portfolio;

    this.setState({siteData: siteData});
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.siteData.main} />
        <About data={this.state.siteData.main} />
        <Resume data={this.state.siteData.resume} />
        <Portfolio data={this.state.siteData.portfolio} />
        <Contact data={this.state.siteData.main} />
        <Footer data={this.state.siteData.main} />
      </div>
    );
  }
}

export default App;
