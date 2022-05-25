<template>
  <Header />
  <!-- <router-view /> -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,700&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #2b400b;
}
a {
  text-decoration: none;
}
.container {
  padding-left: 80px;
}
.btn {
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  padding: 12px 70px;
  border: none;
  cursor: pointer;
}
.btn-light {
  background-color: #44800c;
}
.btn-dark {
  background-color: #2b400b;
}
.btn-red {
  background-color: #b01717;
  margin-left: 21px;
}
/* @media (max-width: 700px) {
  .container {
    padding-left: 0;
  }
} */
</style>
