<template>
  <div class="row">
    <div >
      <SelectData/>
    </div>
    <div class="der">
      <Days :data="getState"/>
    </div>
  </div>

</template>

<script>
import {listElModule} from "@/store/list/listEl";
import {createNamespacedHelpers} from "vuex";
import {GET_STATE} from "@/store/list/type";
import Days from "@/components/Navbar/Days";
import SelectData from "@/components/Navbar/SelectData";

const {mapGetters} = createNamespacedHelpers(listElModule)
export default {
  name: "Navbar",
  components: {SelectData, Days},
  computed: {
    ...mapGetters({
      getState: [GET_STATE],
    }),
  }
}
</script>

<style>
input[type=text] {
  width: 280px;
  height: 20px;
  margin-right: 40px;
}
</style>
