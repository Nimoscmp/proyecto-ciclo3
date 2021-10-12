<template>
  <section id="home" ref="home" class="section home scroll-element" v-on:click="hidePopUp">
    
    <div class="home__content">
      
      <div class="home__main">
        <p class="welcome home__welcome">Bienvenido(a) {{ data }}</p>
        <h1 class="h1">
          Somos PG Learning
        </h1>
        <p class="text home__info">Podrás encontrar y aprender todo lo referente al lenguaje de Java de forma gratuita</p>

        <form action="" class="home__form">
          <input type="email" name="email" id="email" class="input home__input" placeholder="Ingresa tu email">
          <button type="submit" class="btn btn--primary home__btn">Obtener mayor información</button>
        </form>

        <h2 class="home__sub-info">Contamos con +3000 especializados</h2>

      </div>

      <div class="home__wrapper">
          <div class="home__options" v-on:click="changeStatus">
              <span class="home__icon-wrapper">
                <i class="fas fa-pencil-alt fa-2x"></i>
              </span>
              <h3 class="h3 home__options-title">
                  Información actualizada
              </h3>
              <p class="text home__options-info">Podrás obtener información actualizada acerca de Java</p>
          </div>

          <div class="home__options">
              <span class="home__icon-wrapper">
                <i class="fas fa-layer-group fa-2x"></i>
              </span>
              <h3 class="h3 home__options-title">
                  +300 Documentaciones
              </h3>
              <p class="text home__options-info">Documentaación a la mano para facilitar el aprendizaje</p>
          </div>

          <div class="home__options">
              <span class="home__icon-wrapper">
                <i class="fas fa-desktop fa-2x"></i>
              </span>
              <h3 class="h3 home__options-title">
                  100% virtual
              </h3>
              <p class="text home__options-info">Accede desde cualquier parte del mundo</p>
          </div>
      </div>
    </div>

  </section>
</template>

<script>
import store from '../store'

export default {
  name: 'Home',
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    },
    changeStatus () {
      this.$store.state.session = true
    }
  },
  store,
  computed: {
    data: {
      get () {
        return this.$store.state.data.email
      }
    }
  }
}
</script>