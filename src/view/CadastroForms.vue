<template>
  <div class="login">
    <form @submit.prevent="submitForm" class="cadastro">
      <h2>Cadastro</h2>
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          required
          placeholder="Digite seu nome"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          required
          placeholder="Digite seu email"
        />
        <div id="emailHelp" class="form-text">Nunca compartilharemos seu email com ninguém.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formData.password"
          required
          placeholder="Digite sua senha"
        />
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CadastroForms",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const newUser = {
          ...this.formData,
          id: Date.now().toString(16), 
        };

        await axios.post("http://localhost:3000/cadastros", newUser);
        alert("Cadastro realizado com sucesso!");

        this.formData = { name: "", email: "", password: "" };
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao realizar o cadastro.");
      }
    },
  },
};
</script>