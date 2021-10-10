<template>
  <section class="section services">
    <div class="services__text">
      <div class="services__text-intro">
        <h3 class="h3 services__subtitle welcome">
          Totalmente gratuitos
        </h3>
        <h2 class="h2 services__title">
          Nuestros Servicios
        </h2>
        <p class="text services__info">Actualmente ofrecemos los siguientes servicios que te permitirán dar el primer paso al maravilloso mundo del lenguaje de programación en Java </p>
      </div>

      <div class="services__wrapper">
        <BoxInfo 
            iconClass="box-icon fas fa-pencil-alt fa-2x"
            title="Información actualizada"
            info="Podrás obtener información actualizada acerca de Java"
          />
        <BoxInfo 
          iconClass="box-icon fas fa-layer-group fa-2x"
          title="+300 Documentaciones"
          info="Documentaación a la mano para facilitar el aprendizaje"
        />
      </div>
    </div>

    <div class="services__img-wrapper">
      <div class="services__img">
        <img 
          src="../assets/service.jpg" 
          alt="services"
          class="services__img-img"
        >
      </div>
    </div>
  </section>
</template>

<script>

import BoxInfo from './BoxInfo';

export default {
  name: 'Services',
  components: {
    BoxInfo
  }
}
</script>