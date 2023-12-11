<template>
  <transition :name="transitionName" mode="out-in">
    <div
      v-if="editing"
      key="editing"
      class="editor p-3 d-flex flex-column flex-lg-row justify-content-between align-items-center"
    >
      <div class="editor-label-wrapper d-flex flex-column">
        <span class="editor-label">Change your contact info</span>
        <span v-if="phoneError" class="error">Incorrect phone number</span>
        <span v-if="emailError" class="error">Incorrect email</span>
      </div>
      <div class="d-flex my-2 my-lg-0">
        <label for="phone" class="d-flex align-items-center m-0"
          ><img src="@/assets/phone.svg"
        /></label>
        <b-form-input
          id="phone"
          v-model="user.phone"
          class="input px-1"
          :class="{ 'input-error': phoneError }"
          type="tel"
          style="width: fit-content"
        ></b-form-input>
      </div>
      <div class="d-flex my-2 my-lg-0">
        <label for="email" class="d-flex align-items-center m-0"
          ><img src="@/assets/mail.svg"
        /></label>
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          class="input px-1"
          :class="{ 'input-error': emailError }"
          style="width: 175px"
        ></b-form-input>
      </div>

      <b-button
        variant="white"
        class="confirm-btn mt-2 mt-lg-0"
        @click="toggleEdit"
      >
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
      editing: false,
      errorMsg: "input",
      phoneError: false,
      emailError: false,
      user: {
        name: "Anna Maria Tamm Rodriguez Espinosa",
        id: 38912052254,
        phone: "+372 5289 6572",
        email: "anna.tamm@gmail.com",
      },
    };
  },
  computed: {
    emailValidation() {
      // Regular expression for email validation
      const emailRegex = /\S+@\S+\.\S+/;

      return emailRegex.test(this.user.email);
    },
    phoneNumberValidation() {
      // Remove whitespaces from the phone number for validation
      const cleanedPhone = this.user.phone.replace(/\s+/g, "");

      // Regular expression for phone number validation
      // ^\+\d{10}$ - Exactly 10 digits following '+' (total 11 characters)
      // ^\d{9}$ - Exactly 9 digits without '+'
      const phoneRegex = /^(\+\d{11}|\d{9})$/;

      return phoneRegex.test(cleanedPhone);
    },
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
  watch: {
    phoneNumberValidation() {
      if (!this.phoneNumberValidation && this.user.phone) {
        this.phoneError = true;
        this.errorMsg = "phone number";
      } else {
        this.phoneError = false;
      }
    },
    emailValidation() {
      if (!this.emailValidation && this.user.email) {
        this.emailError = true;
        this.errorMsg = "email";
      } else {
        this.emailError = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: 300;
  color: #eb5757;
  font-size: 10px;
  line-height: 1;
}
.editor {
  background-color: #f8f5fc;
  border-radius: 30px;
  min-height: 58px;
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

@media screen and (max-width: 850px) {
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

  @media screen and (max-width: 850px) {
    right: 0 !important;
  }
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
  border-bottom: 1px solid #d2d2d2;

  &:hover {
    border-bottom: 1px solid black;
  }
}

.input-error {
  border-bottom: 1px solid #eb5757 !important;
}
</style>
