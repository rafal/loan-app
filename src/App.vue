<template>
  <div id="app">
    <b-navbar toggleable sticky>
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
      <PepForm />
      <b-row class="my-4"
        ><b-col cols="12" class="d-flex justify-content-center"
          ><b-button class="btn-continue">Continue</b-button></b-col
        ></b-row
      >
    </main>
  </div>
</template>

<script>
import LoanCalculator from "@/components/LoanCalculator.vue";
import UserDetailsCard from "@/components/UserDetailsCard.vue";
import PersonalInformation from "./components/PersonalInformation.vue";
import PepForm from "./components/PepForm.vue";

export default {
  components: {
    LoanCalculator,
    UserDetailsCard,
    PersonalInformation,
    PepForm,
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

.btn-continue {
  background-color: #2b0a57;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  color: #fdfdfd;
  font-size: 16px;
  width: 372px;
  max-width: 75%;
}

.btn-continue:hover {
  background-color: #9575cd !important;
}

.btn-continue:focus {
  outline: 2px solid #2b0a57 !important;
}
.navbar {
  background-color: white;
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
    margin: 0 17.5%;
  }
}

.modal-header {
  border-bottom: none;
}

.pep-input {
  font-weight: 300;
  color: #413c3c;
  font-size: 16px;
}

.dropdown-toggle {
  border: none;
  background: none;
  padding: 0;
  border-radius: 50%;
  box-shadow: none !important; /* Removes box-shadow */

  &:focus,
  &:hover,
  &:active,
  &:active {
    box-shadow: none !important; /* Removes box-shadow for focus and active states */
    outline: none !important; /* Removes outline */
    background: none !important;
    border: none !important;
  }
}

.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  /* color: #fff; */
  background-color: transparent !important;
  border-color: transparent !important;
}

.dropdown-item {
  padding: 0.5rem;
  font-weight: 300;
  color: #413c3c;
}

.dropdown-item-text {
  padding: 0;
  width: fit-content;
}

.first-dropdown-item a,
.last-dropdown-item a {
  display: flex;
  justify-content: space-between;
  font-size: 14px !important;
  /* add a dark grey border-bottom OR divider (we need a straight line below that doesn't take full width, leave some space on both sides) */
  border-bottom: 1px solid #413c3c;
}

.dropdown-item-value {
  /* Center text for regular items */
  flex: 1;
}
</style>
