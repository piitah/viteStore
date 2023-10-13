import { createRouter, createWebHistory } from "vue-router"

// Lazy loading dynamic import
const HomeView = () => import("../views/HomeView.vue")
const login = () => import("../views/login.vue")
const SignUp = () => import("../views/Register.vue")
const Cart = () => import("../views/cart.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path : "/login",
      name : "Login",
      component: login
    },
    {
      path : "/signup",
      name : "signup",
      component: SignUp
    },
    {
      path : "/cart",
      name : "Cart",
      component : Cart
    }
  ]
})

export default router
