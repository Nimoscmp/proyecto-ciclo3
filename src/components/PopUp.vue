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
    <p>{{ errorMessage }}</p>
  </aside>
</template>

<script>
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
      errorMessage: '',
      nameToShow: ''
    };
  },
  methods: {
    hidePopUp() {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    },
    handleLogin() {
      let base_url
      let _this = this

      const showError = () => {
        console.log('Error')
      }
      
      const showSuccess = () => {
        console.log('Success')
      }

      const saveName = () => {
        _this.nameToShow = _this.responseData
        console.log(_this.nameToShow)
      }

      const resetValues = () => {
        _this.email = ''
        _this.password = ''
      }

      const checkData = () => {
        if(_this.responseData.status === 200) {
          showSuccess()
          } else {
          showError()
        }

        saveName()
        resetValues()
        _this.hidePopUp()
      }

      const fetchData = async(url) => {

        const completeUrl = `${ url }email=${ _this.email }&password=${_this.password}`
        console.log(completeUrl)

        const response = await fetch(completeUrl)
        const json_response = await response.json()

        _this.responseData = json_response
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

      checkData()
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