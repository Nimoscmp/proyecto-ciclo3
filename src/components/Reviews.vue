<template>
    <section id="reviews" ref="reviews" class="section reviews scroll-element" v-on:click="hidePopUp">
        <div class="reviews__text">
            <h3 class="welcome h3 reviews__subtitle">
                Testimonios
            </h3>
            <h2 class="h2 reviews__title">
                Algunos testimonios
            </h2>
            <p class="text reviews__info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium est accusamus iure rerum facere aspernatur rem modi.</p>
        </div>

        <div class="reviews__wrapper">
            <div class="reviews__card">
                <p class="text reviews__card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente.</p>
                <div class="reviews__person">
                    <span class="reviews__card-icon">
                        <img src="../assets/profile1.jpg" alt="profile1" class="reviews__card-img">
                    </span>
                    <div class="reviews__card-texts">
                        <span class="reviews__card-name">Name LastName</span>
                        <span class="reviews__card-position">Position</span>
                    </div>
                </div>
            </div>
            <div class="reviews__card">
                <p class="text reviews__card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi acere nostrum.</p>
                <div class="reviews__person">
                    <span class="reviews__card-icon">
                        <img src="../assets/profile2.jpg" alt="profile2" class="reviews__card-img">
                    </span>
                    <div class="reviews__card-texts">
                        <span class="reviews__card-name">Name LastName</span>
                        <span class="reviews__card-position">Position</span>
                    </div>
                </div>
            </div>
            <div class="reviews__card">
                <p class="text reviews__card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. strum, doloribus sed beatae.</p>
                <div class="reviews__person">
                    <span class="reviews__card-icon">
                        <img src="../assets/profile3.jpeg" alt="profile3" class="reviews__card-img">
                    </span>
                    <div class="reviews__card-texts">
                        <span class="reviews__card-name">Name LastName</span>
                        <span class="reviews__card-position">Position</span>
                    </div>
                </div>
            </div>
            <div class="reviews__card">
                <p class="text reviews__card-text">Lorem, ipsum dolor sit amet consectetur elit. Eligendi sapiente libero repel.!</p>
                <div class="reviews__person">
                    <span class="reviews__card-icon">
                        <img src="../assets/profile4.jpg" alt="profile4" class="reviews__card-img">
                    </span>
                    <div class="reviews__card-texts">
                        <span class="reviews__card-name">Name LastName</span>
                        <span class="reviews__card-position">Position</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Reviews',
  methods: {
    hidePopUp: () => {
      const popUp = document.getElementsByClassName('popup')[0];

      popUp.classList.remove('popup--show');
    }
  }
}
</script>