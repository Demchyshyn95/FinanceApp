<template>
  <div>
    <div>
      <div class="colon">
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="month" id="Check4" @click="getMonthAgo">
          <label class="form-check-label" for="Check4">
            one month ago
          </label>
        </div>
        <div class="mr">
          <input class="form-control" type="text" id="inVal10" placeholder="currency">
        </div>
        <div class="mr">
          <input class="form-control" type="text" id="inVal11" placeholder="UAH">
        </div>
        <div>
          <input class="form-control" type="text" id="inVal12" placeholder="date">
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
  name: "Month",
  methods: {
    ...mapActions({
      date: GET_CURRENCY_TODAY,
    }),
    getMonthAgo(e) {
      this.date(e)
    },
  }
}
</script>

<style scoped>
.colon {
  display: flex;
  justify-content: space-around;
}
</style>
