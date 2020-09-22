<template>
  <div class="conteiner">
    <Header/>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {Header, Navbar},
}
</script>

<style>
.conteiner {
  margin: 20px 200px 0 200px;
  background: #b8b8b8;
  height: 500px;
  border-radius: 79px 79px 79px 79px;
  -moz-border-radius: 79px 79px 79px 79px;
  -webkit-border-radius: 79px 79px 79px 79px;
  border: 0px solid #080808;
}
</style>
