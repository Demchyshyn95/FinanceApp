<template>
  <div>
    <div>
      <div class="colon">
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="week" id="Check3"  @click="getWeekAgo">
          <label class="form-check-label" for="Check3">
            a week ago
          </label>
        </div>
        <div>
          <input class="form-control" type="text" id="inVal7" placeholder="currency" >
        </div>
        <div>
          <input class="form-control" type="text"  id="inVal8" placeholder="UAH">
        </div>
        <div>
          <input class="form-control" type="text" id="inVal9" placeholder="date">
        </div>
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
  name: "Week",
  methods:{
    ...mapActions({
      date: GET_CURRENCY_TODAY,
    }),
    getWeekAgo(e) {
      this.date(e)
    }
  }
}
</script>

<style scoped>
.colon {
  display: flex;
  justify-content: space-around;
}
</style>
