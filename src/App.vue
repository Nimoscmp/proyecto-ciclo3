<template>
  <Header/>
  <HeaderMobile/>
  <Home/>
  <About/>
  <Services/>
  <Reviews/>
  <Footer/>
</template>

<script>

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    HeaderMobile,
    Home,
    About,
    Services,
    Reviews,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style src="./assets/styles.css"></style>
