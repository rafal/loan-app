<template>
  <transition :name="transitionName" mode="out-in">
    <div
      v-if="selected"
      class="loan-calculator loan-calculator_selected"
      key="selected"
    >
      <b-container fluid>
        <b-row class="align-items-center justify-content-between">
          <b-col cols="11" class="input-group justify-content-center">
            <b-form inline>
              <label for="amount" class="label">Amount</label>
              <b-form-input
                id="amount"
                v-model.number="amount"
                type="number"
                class="input"
                min="200"
                max="10000"
                style="max-width: 70px"
              ></b-form-input>
              <div v-if="showAmountRange" class="range-info">
                {{ amountRangeInfo }}
              </div>

              <label for="duration" class="label">Duration</label>
              <b-form-input
                id="duration"
                v-model.number="duration"
                class="input"
                style="width: 50px"
                type="number"
              ></b-form-input>
            </b-form>
            <div class="monthly-payment">
              <span class="label">Monthly Payment</span>
              <span class="monthly-payment_value"
                >{{ monthlyPayment }}<span class="euro">€</span></span
              >
            </div>
          </b-col>

          <b-col cols="1" class="px-0">
            <b-button
              variant="white"
              class="confirm-btn"
              @click="confirmSelection"
            >
              <img alt="confirm-button" src="@/assets/chevron-right.svg" />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div
      v-else
      class="loan-calculator loan-calculator_deselected"
      key="deselected"
    >
      <b-container fluid>
        <b-row no-gutters class="align-items-center justify-content-between">
          <b-col cols="1">
            <b-button
              @click="toggleSelect"
              class="toggle-select p-0 m-0"
              style="background: none; border: none; border-radius: 50%"
            >
              <b-icon icon="chevron-left"></b-icon>
            </b-button>
          </b-col>

          <b-col cols="10" class="px-0">
            <div
              class="loan-summary m-0 p-0 justify-content-center"
              style="overflow: hidden"
            >
              <span
                style="
                  display: inline-block;
                  max-height: 100%;
                  white-space: nowrap;
                "
                >Your loan application</span
              >
              <span
                style="
                  display: inline-block;
                  max-height: 100%;
                  white-space: nowrap;
                "
                class="loan-summary_details"
                >{{ amount }}<span class="euro">€</span> /
                {{ duration }} months</span
              >
            </div>
          </b-col>

          <b-col cols="1">
            <div
              style="width: 20px; visibility: hidden; display: inline-block"
            ></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      showAmountRange: false,
      selected: true,
      amount: 2700,
      duration: 36,
      amountOptions: this.generateAmountOptions(),
      durationOptions: this.generateDurationOptions(),
      minAmount: 200, // Minimum loan amount
      maxAmount: 10000, // Maximum loan amount
      minDuration: 6, // Minimum duration in months
      maxDuration: 60, // Maximum duration in months
      amountRangeError: false, // Flag for amount range error
    };
  },
  computed: {
    transitionName() {
      return this.selected ? "slide-fade-forward" : "slide-fade-backward";
    },
    monthlyPayment() {
      if (!this.amount || !this.duration) {
        return 0;
      }
      return Number.isInteger(this.amount / this.duration)
        ? this.amount / this.duration
        : (this.amount / this.duration).toFixed(2);
    },
  },
  methods: {
    formatter(value) {
      if (!value) return "0";
    },
    confirmSelection() {
      if (this.isAmountInRange(this.amount)) {
        this.selected = false;
      } else {
        this.amountRangeError = true;
      }
    },
    toggleSelect() {
      this.selected = !this.selected;
    },
    generateAmountOptions() {
      let options = [];
      for (let i = this.minAmount; i <= this.maxAmount; i += 500) {
        options.push({ value: i, text: `${i}€` });
      }
      return options;
    },
    generateDurationOptions() {
      let options = [];
      for (let i = this.minDuration; i <= this.maxDuration; i++) {
        options.push({ value: i, text: `${i} months` });
      }
      return options;
    },
    isAmountInRange(amount) {
      return amount >= this.minAmount && amount <= this.maxAmount;
    },
    handleAmountInput(value) {
      this.amount = value;
      this.amountRangeError = !this.isAmountInRange(value);
    },
    onAmountFocus() {
      this.amountRangeError = false;
    },
  },
};
</script>
<style scoped>
@media screen and (max-width: 850px) {
  /* Adjust breakpoint as needed */
  .loan-calculator_selected {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to the start of the container */
    padding: 24px; /* Add some padding for better spacing */
  }

  .editor-label,
  .input,
  .confirm-btn {
    width: 100%; /* Make elements take full width */
    margin-bottom: 10px; /* Add some space between elements */
  }
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

.loan-calculator {
  background-color: #2b0a57;
  border-radius: 30px;
  min-height: 58px;
  color: #fdfdfd;
  transition: all 0.3s ease;
}

.loan-calculator_selected,
.loan-calculator_deselected {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-wrapper {
  margin-right: 15px;
}

.label {
  font-weight: 300;
  color: #dddddd;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.input {
  color: #fdfdfd;
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #d2d2d2aa;
  &:hover {
    border-bottom: 1px solid white;
  }
}

.input::after {
  content: "€";
  position: absolute;
  right: 5px; /* Adjust as needed */
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none; /* Makes it unclickable */
  /* Other styling as needed */
}

.monthly-payment {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 40px;
  background-color: #3a156c;
  border-radius: 30px;
  padding: 0 10px;
  overflow: hidden;
  max-width: 220px;
  min-width: 220px;
}

.monthly-payment_value {
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.confirm-btn,
.back-btn {
  border: none;
  background-color: white;
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

.loan-summary {
  font-size: 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  vertical-align: bottom;
  line-height: 32px;

  /* make the font smaller for mobile */
  @media (max-width: 450px) {
    font-size: 14px;
  }
}

.loan-summary_details {
  font-weight: 300;
  font-size: 16px;

  /* make the font smaller for mobile */
  @media (max-width: 450px) {
    font-size: 12px;
  }
}

.range-info {
  color: #f44336; /* Red color for error messages */
  font-size: 0.8em;
  margin-top: 5px;
}

/* Error styling for amount out of range */
.amount-range-error {
  border-color: #f44336; /* Red border for error input */
}

/* Add responsive design adjustments as needed */
@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }

  .input-wrapper {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .toggle-select {
    border-radius: 50%;
    border: none !important;
    background: none !important;

    @media (max-width: 768px) {
      font-size: 0.8em;
      border-radius: 50%;
      border: none !important;
      background: none !important;
    }
  }
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

.euro-symbol {
  position: absolute;
  right: 5px; /* Adjust as needed */
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none; /* Makes it unclickable */
  /* Other styling as needed */
}

.euro {
  font-size: 12px;
  vertical-align: text-top;
  line-height: 16px;

  @media (max-width: 600px) {
    font-size: 10px;
    line-height: 12px;
    vertical-align: text-top;
  }
}
</style>
