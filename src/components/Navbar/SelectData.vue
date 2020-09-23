<template>
  <div class="radio">
    <div class="form-check" >
      <input class="form-check-input " type="checkbox" value="today" id="Check1" @click="getData">
      <label class="form-check-label" for="Check1">
        today
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input " type="checkbox" value="yesterday" id="Check2" @click="getData">
      <label class="form-check-label" for="Check2">
        yesterday
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input " type="checkbox" value="week" id="Check3" @click="getData">
      <label class="form-check-label" for="Check3">
        Week ago
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input " type="checkbox" value="month" id="Check4" @click="getData">
      <label class="form-check-label" for="Check4">
        one mouth ago
      </label>
    </div>
  </div>
</template>

<script>
import {GET_CURRENCY} from "@/store/list/type";
import {createNamespacedHelpers} from "vuex";
import {listElModule} from "@/store/list/listEl";

const {mapActions} = createNamespacedHelpers(listElModule);

export default {
  name: "SelectData",
  methods: {
    ...mapActions({
      date: GET_CURRENCY,
    }),
    getData(e) {
      this.date(e)
    }
  },
}
</script>

<style scoped>
.radio{
  width: 100px;
  height: 400px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
