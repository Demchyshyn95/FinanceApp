<template>
  <div class="nav">
    <div>
      <div class="colon">
        <div class="form-check ">
          <input class="form-check-input " type="checkbox" value="today" id="Check1"  @click="getToday">
          <label class="form-check-label" for="Check1">
            today
          </label>
        </div>
        <div class="ml">
          <input class="form-control" type="text" id="inVal"  placeholder="currency"  >
        </div>
        <div>
          <input class="form-control" type="text" id="inVal2" placeholder="UAH">
        </div>
        <div>
          <input class="form-control" type="text" id="inVal3" placeholder="date">
        </div>
      </div>
    </div>

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

    <div>
      <div>
        <div class="colon">
          <div class="form-check ">
            <input class="form-check-input" type="checkbox" value="month" id="Check4"  @click="getMonthAgo">
            <label class="form-check-label" for="Check4">
              one month ago
            </label>
          </div>
          <div class="mr">
            <input class="form-control" type="text"  id="inVal10" placeholder="currency"  >
          </div>
          <div class="mr">
            <input class="form-control" type="text" id="inVal11"  placeholder="UAH">
          </div>
          <div>
            <input class="form-control" type="text" id="inVal12"   placeholder="date">
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {listElModule} from "@/store/list/listEl";
import {createNamespacedHelpers} from "vuex";
import {GET_CURRENCY_TODAY, GET_STATE} from "@/store/list/type";

const {mapActions} = createNamespacedHelpers(listElModule);
const {mapGetters} = createNamespacedHelpers(listElModule)
export default {
  name: "Navbar",

  computed:{
    ...mapGetters({
      getState:[GET_STATE],
    }),
},
  methods:{
    ...mapActions({
      today:GET_CURRENCY_TODAY,

    }),
    getToday(e){
      this.today(e)
    },
    getYesterday(e){
      this.today(e)
    },
    getWeekAgo(e){
      this.today(e)
    },
    getMonthAgo(e){
      this.today(e)
    },
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 475px;
  margin: 0 0 15px 10px;
}

.colon {
  display: flex;
  justify-content: space-around;
}

input[type=text] {
  width: 180px;
  height: 20px;
  margin-right: 40px;
}
.ml{
  margin-left: 20px;
}
.mr{
  margin-right:20px;
}
</style>
