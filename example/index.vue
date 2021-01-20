<template>
  <div class="hello">{{ hello }}</div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      hello: 'Hello World!',
    }
  },
}
</script>

<style lang="scss" scoped>
.hello {
  background: green;
}
</style>
