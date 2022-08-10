import { createRouter, createWebHistory } from "vue-router";
import RecipeList from "../views/RecipeList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RecipeList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
