<template>
  <form class="login" @submit.prevent="handleLogin">
    <h2>Login</h2>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        required
        placeholder="Digite seu email"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Senha</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        required
        placeholder="Digite sua senha"
      />
    </div>
    <button type="submit" class="btn btn-primary" :disabled="isLoading">
      {{ isLoading ? "Entrando..." : "Entrar" }}
    </button>
    <p>
      Ainda não possui uma conta?
      <router-link to="/CadastroForms">Cadastre-se</router-link>
    </p>
  </form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "LoginForms",

  setup() {
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const isLoading = ref(false);

    const handleLogin = async () => {
      errorMessage.value = "";
      isLoading.value = true;

      try {
        const response = await axios.get("http://localhost:3000/cadastros");
        const user = response.data.find(
          (user) => user.email === email.value && user.password === password.value
        );

        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
          alert(`Bem-vindo, ${user.name}!`);
          router.push("/HomePage");
        } else {
          errorMessage.value = "Email ou senha incorretos!";
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        errorMessage.value = "Erro ao conectar ao servidor. Tente novamente.";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      errorMessage,
      isLoading,
      handleLogin,
    };
  },
};
</script>