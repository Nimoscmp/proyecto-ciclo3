<template>
  <Header/>
  <Home/>
  <About/>
  <Services/>
  <Reviews/>
  <Footer/>
</template>

<script>

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
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
