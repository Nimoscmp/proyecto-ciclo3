<template>
  <aside id="popup" class="popup">
    <span class="popup__close">
      <i 
        class="fas fa-times fa-2x popup__close-icon"
        v-on:click="hidePopUp"
      ></i>
    </span>
    <h2 class="h2 popup__title">
      {{ title }}
    </h2>
    <form action="" class="form" v-on:submit.prevent="handleLogin">
      <input type="email" name="email" id="popup-email" class="input popup__input" placeholder="Ingresa tu email">
      <input type="password" name="password" id="popup-password" class="input popup__input" placeholder="Ingresa tu contraseña">
      <button 
        type="submit" 
        class="btn btn--primary popup__btn"
      >
        {{ btnString }}
      </button>
    </form>
    <a 
      href="#popup" 
      class="popup__link-register"
      v-on:click="handleToRegister"
      >
      {{ linkText }}
    </a>
  </aside>
</template>

<script>
export default {
  name: 'PopUp',
  data() {
    return {
      title: 'Login',
      btnString: 'Ingresar',
      linkText: '¿No estás registrado?'
    };
  },
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    },
    handleLogin: () => {

    },
    handleToRegister(e) {
      e.preventDefault();

      if(this.btnString === 'Ingresar') {
        this.title = 'Registro'
        this.btnString = 'Registrarse'
        this.linkText = 'Ir a login'
      } else {
        this.title = 'Login'
        this.btnString = 'Ingresar'
        this.linkText = '¿No estás registrado?'
      }
    }
  }
  
}
</script>