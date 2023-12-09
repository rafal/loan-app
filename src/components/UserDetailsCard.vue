<template>
  <transition :name="transitionName" mode="out-in">
    <div v-if="editing" key="editing" class="editor px-2">
      <span class="editor-label">Change your contact info</span>
      <b-form inline>
        <label for="phone" class="label"
          ><img src="@/assets/phone.svg"
        /></label>
        <b-form-input
          id="phone"
          v-model="user.phone"
          class="input px-1"
          type="tel"
          style="width: fit-content"
        ></b-form-input>
        <label for="email" class="label"><img src="@/assets/mail.svg" /></label>
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          class="input px-1"
          style="width: 175px"
        ></b-form-input></b-form
      ><b-button variant="white" class="confirm-btn" @click="toggleEdit">
        <img alt="confirm-button" src="@/assets/chevron-right-white.svg" />
      </b-button>
    </div>
    <b-card v-if="!editing" key="notEdiing" class="user-details"
      ><div class="card-top-half">
        <span class="username">{{ user.name }}</span>
        <b-button
          style="
            background: #fdfdfd;
            border: none;
            border-radius: 50%;
            position: absolute;
            right: 16px;
          "
          class="back-btn"
          @click="toggleEdit"
        >
          <img src="@/assets/pencil.svg"
        /></b-button>
      </div>
      <div class="card-bottom-half">
        <span><img src="@/assets/user.svg" class="mr-1" />{{ user.id }}</span
        ><span
          ><img src="@/assets/phone.svg" class="mr-1" />{{ user.phone }}</span
        ><span
          ><img src="@/assets/mail.svg" class="mr-1" />{{ user.email }}</span
        >
      </div></b-card
    >
  </transition>
</template>

<script>
export default {
  data() {
    return {
      editing: true,
      user: {
        name: "Anna Maria Tamm Rodriguez Espinosa",
        id: 38912052254,
        phone: "+372 5289 6572",
        email: "anna.tamm@gmail.com",
      },
    };
  },
  computed: {
    transitionName() {
      return this.selected ? "slide-fade-forward" : "slide-fade-backward";
    },
    formattedPhone() {
      // Ensure the phone number is a string
      const phoneStr = this.user.phone.toString();

      // Extract parts of the phone number
      const countryCode = phoneStr.substring(0, 3);
      const firstPart = phoneStr.substring(3, 7);
      const secondPart = phoneStr.substring(7, 11);

      // Concatenate with the desired format
      return `${countryCode} ${firstPart} ${secondPart}`;
    },
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  /* Adjust breakpoint as needed */
  .editor {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to the start of the container */
    padding: 16px; /* Add some padding for better spacing */
  }

  .editor-label,
  .input,
  .confirm-btn {
    width: 100%; /* Make elements take full width */
    margin-bottom: 10px; /* Add some space between elements */
  }
}
.editor {
  background-color: #f8f5fc;
  border-radius: 30px;
  min-height: 58px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.editor-label {
  font-weight: 300;
  color: #413c3c;
  font-size: 14px;
  letter-spacing: 0;
  white-space: nowrap;
}
/* Forward transition */
.slide-fade-forward-enter-active,
.slide-fade-forward-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-fade-forward-enter,
.slide-fade-forward-leave-to {
  transform: translateX(30%); /* Less aggressive slide */
  opacity: 0;
}

/* Backward transition */
.slide-fade-backward-enter-active,
.slide-fade-backward-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-fade-backward-enter,
.slide-fade-backward-leave-to {
  transform: translateX(-30%); /* Less aggressive slide */
  opacity: 0;
}
.user-details {
  border-radius: 30px;
  border: 5px solid;
  border-color: #f3eefb;
  width: 100%; /* Full width */
  overflow: hidden; /* This ensures child elements respect the border radius */
  min-height: 105px;
  white-space: nowrap; /* Prevents text wrapping */
  overflow: hidden; /* Ensures the text doesn't overflow the container */
  text-overflow: ellipsis;
}
.user-details .card-body {
  height: 100%; /* Adjust the height as per your requirement */
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensure full width is taken */
  padding: 0;
}

.card-top-half,
.card-bottom-half {
  flex: 1; /* Each child takes up equal space */
  width: 100%; /* Ensure full width is taken */
  display: flex; /* Enables Flexbox for centering content */
  justify-content: space-around; /* Horizontally center content */
  align-items: center; /* Vertically center content */
  padding: 0 64px;
}

.card-top-half {
  background-color: #f8f5fc;
  color: #413c3c;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.card-bottom-half {
  color: #413c3c;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
}

@media screen and (max-width: 600px) {
  .card-bottom-half {
    flex-direction: column; /* Stack items vertically */
    padding: 1em 0;
  }

  .card-top-half {
    font-size: 14px;
  }
}

.confirm-btn,
.back-btn {
  border: none;
  background-color: #2b0a57;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 34px;
}

.confirm-btn:hover,
.back-btn:hover {
  box-shadow: 0px 0px 10px 0px #9575cd; /* Light purple box shadow */
}

input:focus {
  outline: none;
  box-shadow: none;
}

/* For Chrome, Safari, Edge, and Opera */
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.input {
  background: none;
  border: none;
  border-radius: 0;
  color: #413c3c;
  font-size: 14px;
}
</style>
