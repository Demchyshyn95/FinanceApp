<template>
  <div class="der">
    <div class="row" v-for="(el,i) in data" :key="i">
      <div>
        <input class="form-control" type="text"  :value="el.data[0].cc" id="inVal"  placeholder="currency"  >
      </div>
      <div>
        <input class="form-control" type="text" :value="el.data[0].rate" id="inVal2" placeholder="UAH">
      </div>
      <div>
        <input class="form-control" type="text" :value="el.data[0].exchangedate"  id="inVal3" placeholder="date">
      </div>
    </div>

    </div>
</template>

<script>
export default {
  name: "Days",
  props:{
    data:{
      type:Array
    }
  }
}
</script>

<style scoped>
.der{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 50px;
}
.row{
  margin-top: 35px;
}
</style>
