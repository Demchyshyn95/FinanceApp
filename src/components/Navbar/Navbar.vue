<template>
  <div>
    <div class="nav" >
      <Today />
      <Yesterday/>
      <Week/>
      <Month/>
    </div>
  </div>

</template>

<script>
import {listElModule} from "@/store/list/listEl";
import {createNamespacedHelpers} from "vuex";
import {GET_STATE} from "@/store/list/type";
import Today from "@/components/Navbar/Today";
import Yesterday from "@/components/Navbar/Yesterday";
import Week from "@/components/Navbar/Week";
import Month from "@/components/Navbar/Month";

const {mapGetters} = createNamespacedHelpers(listElModule)
export default {
  name: "Navbar",
  components: {Month, Week, Yesterday, Today},
  computed: {
    ...mapGetters({
      getState: [GET_STATE],
    }),
  }}
</script>

<style>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 475px;
  margin: 0 0 15px 10px;
}



input[type=text] {
  width: 250px;
  height: 20px;
  margin-right: 40px;
}
label{
  width: 100px;
  height: 30px;
}

</style>
