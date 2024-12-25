import { createRouter, createWebHistory } from 'vue-router';
import CadastroForms from '../view/CadastroForms.vue'; 
import HomePage from '../view/HomePage.vue';
import LoginForms from '../components/LoginForms.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
      },
  {
    path: '/cadastroforms',
    name: 'Cadastro',
    component: CadastroForms,
  },

  {
    path: '/loginforms',
    name: 'Login',
    component: LoginForms,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;