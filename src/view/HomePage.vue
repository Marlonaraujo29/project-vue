<template>
  <div>
    <h1>Bem-vindo, {{ user.name }}!</h1>
    <p>Seu email: {{ user.email }}</p>
    <button @click="logout">Sair</button>
  </div>

</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      user: JSON.parse(localStorage.getItem("authUser")) || {},
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("authUser");
      this.$router.push("/login");
    },
  },
};
</script>