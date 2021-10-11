<template>
  <PopUp />
  <Notification 
    id="0"
    notificationClass="notification--error"
    title="Error"
    message="Hubo un error"
  />
  <Notification 
    id="1"
    notificationClass="notification--error"
    title="Error"
    message="La contraseña o email no son correctos"
  />
  <Notification 
    id="2"
    notificationClass="notification--success"
    title="Felicidades"
    message="Sesión iniciada con éxito"
  />
  <Notification 
    id="3"
    notificationClass="notification--success"
    title="Nos vemos pronto"
    message="Sesión cerrada con éxito"
  />
  <Header/>
  <HeaderMobile/>
  <Home/>
  <About/>
  <Services/>
  <Reviews/>
  <Footer/>
</template>

<script>

import PopUp from './components/PopUp';
import Notification from './components/Notification';
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
    PopUp,
    Notification,
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
  margin: 0;
}
</style>

<style src="./assets/styles.css"></style>
