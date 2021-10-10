<template>
	<section class="section about" v-on:click="hidePopUp">
		<div class="about__img">
			<div class="about__img-bg">
				<img src="../assets/java.png" alt="java-icon" class="about__img-img">
			</div>
		</div>
		<div class="about__info">
			<h3 class="h3 about__info-subtitle welcome">
				¿Quiénes somos?
			</h3>
			<h2 class="h2 about__info-title">
				JavaLovers
			</h2>
			<p class="text about__info-text">Somos un equipo de desarrolladores que buscamos enseñar de forma gratuita y asertiva el lenguaje de programación Java, sin importar la experiencia previa que tengas.</p>
			<button type="button" class="btn btn--alternative about__btn">Ingresar</button>
		</div>
	</section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    }
  }
}
</script>
