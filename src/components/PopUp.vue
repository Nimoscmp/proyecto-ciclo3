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
    <form 
      action="" 
      class="form" 
      v-on:submit.prevent="handleLogin">
      <input 
        type="email" 
        name="email" 
        id="popup-email" 
        class="input popup__input" 
        placeholder="Ingresa tu email"
        v-model="email"  
      >
      <input 
        type="password" 
        name="password" 
        id="popup-password" 
        class="input popup__input" 
        placeholder="Ingresa tu contraseña"
        v-model="password"  
      >
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
    <p class="popup__error">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import store from '../store'

export default {
  name: 'PopUp',
  data() {
    return {
      title: 'Login',
      btnString: 'Ingresar',
      linkText: '¿No estás registrado?',
      baseUrl: 'https://backend-project-mintic7.herokuapp.com/api/',
      email: '',
      password: '',
      responseData: {},
      errorMessage: ''
    };
  },
  methods: {
    validateData() {
      const email = this.email
      const password = this.password

      if(email.trim() !== '' && (password !== '')) {
        this.errorMessage = ''
      } else {
        this.errorMessage = 'Llena los campos de email y contraseña'
      }
    },
    hidePopUp() {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
      this.errorMessage = ''
    },
    handleLogin() {
      let base_url
      let _this = this

      const saveName = () => {
        _this.$store.state.data.email = _this.responseData.data.email;
        _this.$store.state.session = true
      }

      const resetValues = () => {
        _this.email = ''
        _this.password = ''
      }

      const checkData = () => {
        if(_this.responseData.status === 200) {
          _this.showNotification(2)
          saveName()
          _this.hidePopUp()
        } else if(_this.responseData.status === 500 && _this.responseData.message === 'Invalid email or password') {
          _this.showNotification(1)
        } else {
          _this.showNotification(0)
        }

        resetValues()
      }

      const fetchData = async(url) => {

        const completeUrl = `${ url }email=${ _this.email }&password=${_this.password}`

        const response = await fetch(completeUrl)
        const json_response = await response.json()

        _this.responseData = await json_response

        checkData()
      } 

      //  Validate data
      _this.validateData()

      if(_this.errorMessage) {
        return
      }

      //  Login
      if(this.btnString === 'Ingresar') {
        base_url = `${ this.baseUrl }login?`
        fetchData(base_url)
      } 
      
      //  Register
      else {
        base_url = `${ this.baseUrl }register?`
        fetchData(base_url)
      }
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

      this.errorMessage = ''
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
    data: {
      get () {
        return this.$store.state.data.email
      }
    }
  }
}
</script>