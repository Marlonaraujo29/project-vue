<template>
  <div class="header">
    <h1>Programer Cursos</h1>
    <nav>
      <button class="nav-button" @click="navigateToLogin">Login</button>
    </nav>
  </div>

<p class="p1">Esse projeto tem o objetivo de cadastrar e logar usuários no sistema</p>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToLogin = () => {
  router.push("/loginforms");
};
</script>