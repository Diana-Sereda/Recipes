<template>
  <div class="home container">
    <div class="main-screen">
      <div class="main-screen-left">
        <h1 class="app-name">My recipes</h1>
        <p>Your best assistant for the most delicious dishes</p>
        <!-- <button @click="togglePopup" class="btn btn-light">Add new</button> -->
        <a href="#addNew" @click="togglePopup" class="btn btn-light">Add new</a>
      </div>
      <img src="../assets/main-pic.png" class="main-screen-right" alt="" />
    </div>
    <!-- Add new recipe -->
    <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2 id="addNew" class="popup-title">Add new recipe</h2>
        <form @submit.prevent="addNewRecipe">
          <div class="group">
            <label for="">Title</label>
            <input type="text" v-model="newRecipe.title" />
          </div>
          <div class="group">
            <label for="">Description</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>
          <div class="group">
            <label for="">Ingredients</label>
            <div
              class="ingredient"
              v-for="i in newRecipe.ingredientRows"
              :key="i"
            >
              <input type="text" v-model="newRecipe.ingredients[i - 1]" />
            </div>
            <button
              type="button"
              @click="addNewIngredient"
              class="btn btn-light"
            >
              Add ingredient
            </button>
          </div>
          <div class="group">
            <label for="">Method</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
              <textarea v-model="newRecipe.method[i - 1]"></textarea>
            </div>
            <button type="button" @click="addNewStep" class="btn btn-dark">
              Add step
            </button>
          </div>
          <div class="group">
            <div class="previewImg">
              <img v-if="newRecipe.url" :src="newRecipe.url" />
            </div>
            <label for="uploadImg" class="uploadImg">
              <img src="../assets/download.svg" alt="" /> Choose photo</label
            >
            <input id="uploadImg" type="file" @change="onFileChange" />
          </div>
          <button type="submit" class="btn btn-light">Add this recipe</button>
          <button type="button" @click="togglePopup" class="btn btn-red">
            Close
          </button>
        </form>
      </div>
    </div>

    <!-- Recipes list -->
    <div class="recipes">
      <div
        class="card"
        v-for="recipe in $store.state.recipes"
        :key="recipe.slug"
      >
        <img :src="recipe.url" alt="" class="recipe-pic" />
        <h2 class="recipe-title">{{ recipe.title }}</h2>
        <p>{{}}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button class="btn btn-light">View Recipe</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const newRecipe = ref({
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
      url: null,
    });
    const popupOpen = ref(false);
    const store = useStore();
    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };
    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };
    const addNewStep = () => {
      newRecipe.value.methodRows++;
    };
    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title
        .toLowerCase()
        .replace(/\s/g, "-");

      if (newRecipe.value.slug == "") {
        alert("Please enter a title");
        return;
      }
      store.commit("ADD_RECIPE", { ...newRecipe.value });
      newRecipe.value = {
        title: "",
        description: "",
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1,
        url: null,
      };
      togglePopup();
    };
    const onFileChange = (e) => {
      console.log(e);
      const file = e.target.files[0];
      newRecipe.value.url = URL.createObjectURL(file);
    };

    return {
      newRecipe,
      togglePopup,
      popupOpen,
      addNewStep,
      addNewIngredient,
      addNewRecipe,
      onFileChange,
    };
  },
};
</script>


<style scoped>
.main-screen {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
}
.main-screen-left {
  width: 400px;
  padding: 50px;
  padding-left: 0;
  background-color: #ffffff;
  border-radius: 0 170px 170px 0;
}
.main-screen-left p {
  margin-bottom: 47px;
}
.app-name {
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  margin-bottom: 20px;
}
.main-screen-right {
  /* width: 50%; */
  /* align-self: flex-start; */
  /* height: 100%; */
  width: 600px;
  position: absolute;
  right: 0;
  z-index: -1;
}

/* Add recipe popup */
.add-recipe-popup {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px;
}
.popup-content {
  width: 470px;
  margin: auto;
}
.popup-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 30px;
}
.group {
  margin-bottom: 30px;
}
label {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: block;
  margin-bottom: 22px;
}
input,
textarea {
  padding: 0 15px;
  border: 1px solid #2b400b;
  border-radius: 14px;
  width: 370px;
  min-height: 60px;
}
textarea {
  padding: 15px;
  min-height: 140px;
}
.ingredient,
.method {
  margin-bottom: 22px;
}
.previewImg {
  background: url("../assets/emptyImg.png") center no-repeat;
}
.previewImg {
  border: 1px solid #2b400b;
  border-radius: 15px;
  width: 264px;
  height: 239px;
  background-color: #f8f8f8;
  overflow: hidden;
  margin-bottom: 22px;
}
.previewImg img {
  width: 100%;
  height: 100%;
}
#uploadImg {
  display: none;
}
.uploadImg {
  background: #2b400b;
  border-radius: 5px;
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  color: #ffffff;
  padding: 11px 15px;
  display: inline-block;
  margin-bottom: 43px;
  cursor: pointer;
}
.uploadImg img {
  vertical-align: middle;
}

/* Recipes */
.recipes {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto 100px;
}
.card {
  width: 240px;
  text-align: center;
  margin-right: 80px;
  margin-bottom: 50px;
}
.card:last-child {
  margin-right: 0;
}
.recipe-pic {
  width: 100%;
  height: 213px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 30px;
}
.recipe-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 57px;
}
@media (max-width: 700px) {
  .container {
    padding-left: 0;
  }
  .main-screen-left {
    width: 80%;
    padding: 50px;
  }
  .recipes {
    padding: 0 15px;
    justify-content: space-evenly;
  }
  .card {
    margin-right: 0;
  }
  .recipe-pic {
    margin-bottom: 15px;
  }
}
@media (max-width: 568px) {
  .app-name {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 15px;
  }
  .main-screen-left p {
    margin-bottom: 25px;
  }
  .recipe-title {
    margin-bottom: 30px;
  }
  .popup-content {
    width: 90%;
  }
  .btn-red {
    display: block;
    margin-left: 0;
    margin-top: 20px;
  }
}
@media (max-width: 414px) {
  .main-screen-left {
    width: 100%;
    padding: 50px 20px;
  }
  input,
  textarea {
    width: 100%;
  }
}
</style>
