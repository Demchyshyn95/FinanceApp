<template>
  <div>
    <div class="header">
      <div class="form-check form-check-inline ">
        <input class="form-check-input" type="radio" id="inlineChecbox1" value="USD" v-model="activeRadio" >
        <label class="form-check-label" for="inlineChecbox1">USD</label>
      </div>
      <div class="form-check form-check-inline ">
        <input class="form-check-input" type="radio" id="inlineChecbox2" value="EUR" v-model="activeRadio">
        <label class="form-check-label" for="inlineChecbox2">EUR</label>
      </div>
      <div class="form-check form-check-inline ">
        <input class="form-check-input" type="radio" id="inlineChecbox3" value="RUB" v-model="activeRadio">
        <label class="form-check-label" for="inlineChecbox3">RUB </label>
      </div>
      <div class="form-check form-check-inline ">
        <input class="form-check-input" type="radio" id="inlineChecbox4" value="PLN" v-model="activeRadio" >
        <label class="form-check-label" for="inlineChecbox3">PLN </label>
      </div>
  </div>
  </div>

</template>
<script>

export default {
name: "header",
  data(){
  return{
    activeRadio:[]
  }
  },


  methods: {
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
}
</style>
