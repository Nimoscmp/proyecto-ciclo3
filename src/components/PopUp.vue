<template>
  <aside class="popup">
    <span class="popup__close">
      <i 
        class="fas fa-times fa-2x popup__close-icon"
        v-on:click="hidePopUp"
      ></i>
    </span>
    <h2 class="h2 popup__title">Login</h2>
    <form action="" class="form">
      <input type="email" name="email" id="email" class="input popup__input" placeholder="Ingresa tu email">
      <button type="submit" class="btn btn--primary popup__btn">Ingresar</button>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'PopUp',
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    }
  }
}
</script>