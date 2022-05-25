<template>
  <div class="container recipe-page">
    <router-link to="/" class="back"
      ><span class="arrow"></span> Back</router-link
    >
    <img :src="recipe.url" alt="meal picture" class="recipe-pic" />
    <div class="recipe">
      <div class="recipe-top">
        <h1 class="recipe-title">{{ recipe.title }}</h1>
        <p class="descr">{{ recipe.description }}</p>
      </div>
      <hr />
      <div class="ingredients">
        <h3>ingredients</h3>
        <ul>
          <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="method">
        <h3>Methods</h3>
        <ol>
          <li v-for="(step, i) in recipe.method" :key="i">
            <span v-html="cleanText(step)"></span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        (recipe) => recipe.slug === this.$route.params.slug
      );
    },
  },
  methods: {
    cleanText(text) {
      return text.replace(/\n/g, "<br />");
    },
  },
};
</script>

<style scoped>
.recipe-page {
  margin-top: 60px;
}
.back {
  display: inline-block;
  width: fit-content;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #2b400b;
  margin-bottom: 45px;
}
.back:hover .arrow {
  animation: arrowMove 0.3s 2 linear;
}
.arrow {
  display: inline-block;
  width: 20px;
  height: 2px;
  background-color: #2b400b;
  margin-bottom: 5px;
  position: relative;
  border-radius: 1px 0 0 1px;
}
.arrow::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 2px;
  background-color: #2b400b;
  position: absolute;
  top: 3px;
  left: -1px;
  transform: rotate(45deg);
  border-radius: 1px;
}
.arrow::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 2px;
  background-color: #2b400b;
  position: absolute;
  top: -3px;
  left: -1px;
  transform: rotate(-45deg);
  border-radius: 1px;
}
.recipe-pic {
  width: 50%;
  max-height: 540px;
  object-fit: cover;
  position: absolute;
  right: 0;
  z-index: -1;
  border-radius: 350px 0 0 350px;
}
.recipe {
  width: 40%;
}
.recipe-title {
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  margin-bottom: 20px;
}
.descr {
  margin-bottom: 45px;
  max-width: 380px;
}
hr {
  margin-bottom: 60px;
}
h3 {
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.ingredients ul,
.method ol {
  padding-left: 30px;
  margin-bottom: 45px;
}
@keyframes arrowMove {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0px);
  }
}
@media (max-width: 834px) {
  .recipe-page {
    margin-top: 0;
  }
  .container {
    padding: 40px;
  }
  .recipe {
    width: 85%;
    margin: auto;
  }
  .recipe-pic {
    width: auto;
    max-width: 200px;
    height: 200px;
    margin-top: 0;
  }
  .recipe-top {
    width: fit-content;
    padding-right: 20px;
    background-color: #ffffff98;
    border-radius: 0 250px 250px 0;
  }
}
@media (max-width: 568px) {
  .recipe-title {
    font-size: 45px;
    line-height: 47px;
    margin-bottom: 15px;
  }
}
@media (max-width: 414px) {
  .container {
    padding: 15px;
  }
  .recipe {
    width: 100%;
  }
  .recipe-top {
    width: fit-content;
    padding-right: 20px;
    background-color: #ffffff98;
    border-radius: 0 250px 250px 0;
  }
}
</style>