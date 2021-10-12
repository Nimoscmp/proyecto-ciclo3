<template>
  <header class="header header-desktop"> 
    <nav class="header-desktop__nav" v-on:click="hidePopUp">
      <span class="header-desktop__logo">
        <i class="fas fa-layer-group"></i>
      </span>
      
      <h2 class="h2 header-desktop__title">
        <a href="#home" v-on:click="handleScroll" class="header-desktop__title-link scroll-link">PG Learning</a>
      </h2>

      <ul class="header-desktop__list">
        <li class="header-desktop__list-item">
          <a href="#about-us" class="header-desktop__list-link scroll-link"
          v-on:click="handleScroll">Quienes somos</a>
        </li>
        <li class="header-desktop__list-item">
          <a href="#services" class="header-desktop__list-link scroll-link"
          v-on:click="handleScroll">Servicios</a> 
        </li>
        <li class="header-desktop__list-item">
          <a href="#reviews" class="header-desktop__list-link scroll-link"
          v-on:click="handleScroll">Testimonios</a> 
        </li>
        <li class="header-desktop__list-item">
          <a href="#contact" class="header-desktop__list-link scroll-link"
          v-on:click="handleScroll">Contacto</a> 
        </li>
      </ul>
    </nav>

    <button 
      type="button" 
      class="btn btn--secondary header-desktop__btn"
      v-if="session"
      v-on:click="handleLogOut"
    >
      Cerrar sesión
    </button>
    <button 
      type="button" 
      class="btn btn--secondary header-desktop__btn"
      v-on:click="showPopUp"
      v-else
    >
      Ingresar
    </button>
  </header>
</template>

<script>
import store from '../store'

export default {
  name: 'Header',
  data() {
    return {
      baseUrl: 'https://backend-project-mintic7.herokuapp.com/api/logout'
    }
  },
  methods: {
    showPopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.add('popup--show');
    },
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    },
    handleLogOut () {
      let _this = this

      const validateFetch = response => {
        if(response.status === 200) {
          _this.showNotification(3)
          _this.$store.state.session = false
          _this.$store.state.data.email = ''
        } else {
          _this.showNotification(0)
        }
      }

      const fetchData = async() => {

        const response = await fetch(_this.baseUrl)
        const json_response = await response.json()

        validateFetch(json_response)        
      } 

      fetchData()
    },
    hideNotification(id) {
      const notification = document.getElementsByClassName('notification')[id];

      notification.classList.remove('notification--show');
    },
    showNotification(id) {
      let _this = this

      const notification = document.getElementsByClassName('notification')[id];

      notification.classList.add('notification--show');

      setTimeout(() => {
        _this.hideNotification(id)
      }, 4000);
    }
  },
  store,
  computed: {
    session: {
      get () {
        return this.$store.state.session
      }
    }
  }
}
</script>



