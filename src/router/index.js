import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import contact from "../views/contact.vue";
import Guests from "../views/guestes.vue";
import Budget from "../views/budgets.vue";
import FoodMenu from "../views/foodMenu.vue";
import Notes from "../views/notes.vue"; 
import ToDo from "../views/toDo.vue";
import Setting from "../views/setting.vue";
import Pics from "../views/pics.vue";
import Answer from "../views/answer.vue";
import Chat from "../views/chat.vue";
import Agenda from "../views/agenda.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
    
  },{
    path: "/guests",
    name: "Guests",
    component : Guests,
  },
  {
    path: "/budget",
    name: "Budget",
    component: Budget
  },
  {
    path: "/foodMenu",
    name: "FoodMenu",
    component: FoodMenu,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/toDo",
    name: "ToDo",
    component: ToDo,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Setting
  },
  {
    path: "/pics",
    name: "Pics",
    component: Pics
  },
  {
    path: "/answer",
    name: "Answer",
    component: Answer
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat

  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
