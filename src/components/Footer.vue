<template>
    <footer id="contact" ref="contact" class="footer scroll-element" v-on:click="hidePopUp">
        <div class="footer__info">
            <h2 class="h2 h2--mini footer__info-title">
                <i class="fas fa-desktop"></i>
                JavaLovers
            </h2>
            <p class="text footer__info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem minus quisquam provident possimus vitae laborum vero eius consectetur reiciendis facere doloribus voluptate dolor aut nam, quos beatae harum quaerat obcaecati?</p>
        </div>
        <div class="footer__social">
            <h3 class="h3 footer__social-title">
                Nuestras redes
            </h3>
            <div class="footer__social-icons">
                <span class="footer__icon">
                    <i class="fab fa-facebook-f"></i>
                </span>
                <span class="footer__icon">
                    <i class="fab fa-instagram"></i>
                </span>
                <span class="footer__icon">
                    <i class="fab fa-twitter"></i>
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    }
  }
}
</script>