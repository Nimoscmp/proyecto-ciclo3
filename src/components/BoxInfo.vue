<template>
  <div class="box-info__options">
    <span class="box-info__icon-wrapper">
      <i :class="iconClass"></i>
    </span>
    <h3 class="h3 box-info__options-title">
      {{ title }}
    </h3>
    <p class="text box-info__options-info">{{ info }}</p>
  </div>
</template>

<script>

export default {
  name: 'BoxInfo',
  props: {
    iconClass: String,
    title: String,
    info: String
  }
}
</script>
