<template>
  <section 
    class="notification"
    :class="notificationClass">
    <span class="notification__close">
      <i 
          class="fas fa-times notification__close-icon"
          v-on:click="hideNotificationAll"
      ></i>
    </span>
    <h2 class="notification__title">{{ title }}</h2>
    <p class="notification__message">{{ message }}</p>
  </section>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    notificationClass: String,
    title: String,
    message: String
  },
  methods: {
    hideNotificationAll() {
      const notification = document.getElementsByClassName('notification');

      notification.forEach(element => {
        if (element.className.includes('notification--show')) {
          element.classList.remove('notification--show');
        }
      });
    }
  }
}
</script>