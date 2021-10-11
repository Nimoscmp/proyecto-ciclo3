<template>
  <header class="header header-desktop"> 
    <nav class="header-desktop__nav" v-on:click="hidePopUp">
      <span class="header-desktop__logo">
        <i class="fas fa-layer-group"></i>
      </span>
      
      <h2 class="h2 header-desktop__title">
        Subtítulo
      </h2>

      <ul class="header-desktop__list">
        <li class="header-desktop__list-item">
          <a href="" class="header-desktop__list-link">Quienes somos</a>
        </li>
        <li class="header-desktop__list-item">
          <a href="" class="header-desktop__list-link">Servicios</a> 
        </li>
        <li class="header-desktop__list-item">
          <a href="" class="header-desktop__list-link">Testimonios</a> 
        </li>
        <li class="header-desktop__list-item">
          <a href="" class="header-desktop__list-link">Contacto</a> 
        </li>
      </ul>
    </nav>

    <button 
      type="button" 
      class="btn btn--secondary header-desktop__btn"
      v-if="session"
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
export default {
  name: 'Header',
  methods: {
    showPopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.add('popup--show');
    },
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    }
  },
  computed: {
    session: {
      get () {
        return this.$store.state.session
      }
    }
  }
}
</script>



