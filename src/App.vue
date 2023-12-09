<template>
  <div id="app">
    <b-navbar toggleable>
      <div class="navbar-placeholder"></div>
      <!-- Placeholder div -->
      <b-navbar-brand href="#" class="mx-auto"
        ><img alt="logo" src="@/assets/logo.svg"
      /></b-navbar-brand>
      <b-navbar-toggle target="#">
        <img alt="menu" src="@/assets/menu.svg" />
      </b-navbar-toggle>
    </b-navbar>
    <main>
      <LoanCalculator />
      <UserDetailsCard class="my-4" />
      <PersonalInformation />
    </main>
  </div>
</template>

<script>
import LoanCalculator from "@/components/LoanCalculator.vue";
import UserDetailsCard from "@/components/UserDetailsCard.vue";
import PersonalInformation from "./components/PersonalInformation.vue";

export default {
  components: {
    LoanCalculator,
    UserDetailsCard,
    PersonalInformation,
  },
};
</script>

<style>
#app {
  font-family: "Open Sans-Light", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 50px;
}

.navbar-placeholder {
  /* The width should be the same as the navbar toggle */
  width: 46px; /* Adjust this based on the actual width of your navbar toggle */
  visibility: hidden; /* Makes the div invisible while still taking up space */
  display: inline-block; /* Keeps it in line with other navbar elements */
}

.navbar-toggler {
  border: none;
}

main {
  margin: 0 16px;

  @media (min-width: 768px) {
    margin: 0 15%;
  }
}
</style>
