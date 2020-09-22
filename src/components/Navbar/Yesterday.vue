<template>
  <div>
    <div>
      <div class="colon">
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="yesterday" id="Check2"  @click="getYesterday">
          <label class="form-check-label" for="Check2">
            yesterday
          </label>
        </div>
        <div>
          <input class="form-control" type="text"  id="inVal4" placeholder="currency" >
        </div>
        <div>
          <input class="form-control" type="text" id="inVal5" placeholder="UAH">
        </div>
        <div>
          <input class="form-control" type="text" id="inVal6" placeholder="date">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {listElModule} from "@/store/list/listEl";
import {GET_CURRENCY_TODAY} from "@/store/list/type";

const {mapActions} = createNamespacedHelpers(listElModule);
export default {
  name: "Yesterday",
  methods:{
    ...mapActions({
      date: GET_CURRENCY_TODAY,
    }),
    getYesterday(e) {
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
