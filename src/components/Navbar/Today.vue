<template>
  <div>
    <div class="colon">
      <div class="form-check ">
        <input class="form-check-input " type="checkbox" value="today" id="Check1"  @click="getToday">
        <label class="form-check-label" for="Check1">
          today
        </label>
      </div>
      <div class="ml">
        <input class="form-control" type="text"  id="inVal"  placeholder="currency"  >
      </div>
      <div>
        <input class="form-control" type="text" id="inVal2" placeholder="UAH">
      </div>
      <div>
        <input class="form-control" type="text" id="inVal3" placeholder="date">
      </div>
    </div>
  </div>
</template>

<script>
import {GET_CURRENCY_TODAY} from "@/store/list/type";
import {createNamespacedHelpers} from "vuex";
import {listElModule} from "@/store/list/listEl";
const {mapActions} = createNamespacedHelpers(listElModule);
export default {
  name: "Today",
  methods:{
    ...mapActions({
      date: GET_CURRENCY_TODAY,
    }),
    getToday(e) {
      this.date(e)
    }
  },
  props:{
    el:{
      type:Object
    }
  }

}
</script>

<style scoped>
.colon {
  display: flex;
  justify-content: space-around;
}
.ml{
  margin-left: 20px;
}
</style>
