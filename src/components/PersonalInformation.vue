<template>
  <b-container fluid class="personal-information">
    <b-row
      ><b-col cols="12" class="personal-information-header"
        >Personal information</b-col
      ></b-row
    >
    <b-row>
      <b-col xs="12" sm="6" class="my-1">
        <b-form-select
          v-model="form.country"
          :options="countries"
          :disabled="!addAddressManually"
          ><template #first>
            <b-form-select-option :value="null" disabled
              >Country</b-form-select-option
            >
          </template></b-form-select
        > </b-col
      ><b-col xs="12" sm="6" class="my-1"
        ><b-form-select
          v-model="form.county"
          :options="counties"
          :disabled="!addAddressManually"
          ><template #first>
            <b-form-select-option :value="null" disabled
              >County</b-form-select-option
            >
          </template></b-form-select
        ></b-col
      ><b-col xs="12" sm="6" class="my-1"
        ><b-form-select
          v-model="form.city"
          :options="cities"
          :disabled="!addAddressManually"
          ><template #first>
            <b-form-select-option :value="null" disabled
              >City / Parish</b-form-select-option
            >
          </template></b-form-select
        ></b-col
      ><b-col xs="12" sm="6" class="my-1"
        ><b-form-select
          v-model="form.village"
          :options="villages"
          :disabled="!addAddressManually"
          ><template #first>
            <b-form-select-option :value="null" disabled
              >Village / Township</b-form-select-option
            >
          </template></b-form-select
        ></b-col
      ><b-col xs="12" sm="6" class="my-1">
        <b-form-input
          :disabled="!addAddressManually"
          v-model="form.street"
          placeholder="Street"
          type="text"
        ></b-form-input> </b-col
      ><b-col xs="12" sm="6" class="my-1"
        ><b-row
          ><b-col cols="4" style="padding: 0 5px 0 15px"
            ><b-form-input
              :disabled="!addAddressManually"
              v-model="form.house"
              placeholder="House"
              type="text"
            ></b-form-input> </b-col
          ><b-col cols="4" style="padding: 0 5px"
            ><b-form-input
              :disabled="!addAddressManually"
              v-model="form.apartment"
              placeholder="Apartment"
              type="text"
            ></b-form-input> </b-col
          ><b-col cols="4" style="padding: 0 15px 0 5px"
            ><b-form-input
              :disabled="!addAddressManually"
              v-model="form.postal"
              placeholder="Postal"
              type="text"
            ></b-form-input> </b-col></b-row></b-col
    ></b-row>
    <b-row class="mt-3">
      <b-col cols="12" class="d-flex justify-content-around">
        <img src="@/assets/horizontal-line.svg" alt="" style="max-width: 35%" />
        <span style="font-style: italic; color: #dddddd; font-size: 14px"
          >Or</span
        >
        <img src="@/assets/horizontal-line.svg" alt="" style="max-width: 35%" />
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col cols="12">
        <b-form-checkbox
          v-model="addAddressManually"
          name="add-address-manually"
          switch
        >
          <span style="color: #413c3c; font-size: 14px"
            >Add address manually</span
          >
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col cols="12"
        ><img
          src="@/assets/horizontal-line-long.svg"
          alt=""
          style="max-width: 100%" /></b-col
    ></b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        country: null,
        county: null,
        city: null,
        village: null,
        street: null,
        house: null,
        apartment: null,
        postal: null,
      },
      addAddressManually: false,
      countries: [
        { text: "Germany", value: "DE" },
        { text: "France", value: "FR" },
        { text: "Spain", value: "ES" },
        { text: "Italy", value: "IT" },
        { text: "Poland", value: "PL" },
        { text: "United Kingdom", value: "UK" },
      ],
      counties: [
        { text: "Dolnośląskie", value: "Dolnośląskie" },
        { text: "Kujawsko-pomorskie", value: "Kujawsko-pomorskie" },
        { text: "Lubelskie", value: "Lubelskie" },
        { text: "Lubuskie", value: "Lubuskie" },
        { text: "Łódzkie", value: "Łódzkie" },
        { text: "Małopolskie", value: "Małopolskie" },
        { text: "Mazowieckie", value: "Mazowieckie" },
        { text: "Opolskie", value: "Opolskie" },
        { text: "Podkarpackie", value: "Podkarpackie" },
        { text: "Podlaskie", value: "Podlaskie" },
        { text: "Pomorskie", value: "Pomorskie" },
        { text: "Śląskie", value: "Śląskie" },
        { text: "Świętokrzyskie", value: "Świętokrzyskie" },
        { text: "Warmińsko-mazurskie", value: "Warmińsko-mazurskie" },
        { text: "Wielkopolskie", value: "Wielkopolskie" },
        { text: "Zachodniopomorskie", value: "Zachodniopomorskie" },
      ],
      cities: [
        { text: "Białystok", value: "Białystok" },
        { text: "Bydgoszcz", value: "Bydgoszcz" },
        { text: "Gdańsk", value: "Gdańsk" },
        { text: "Gorzów Wielkopolski", value: "Gorzów Wielkopolski" },
        { text: "Katowice", value: "Katowice" },
        { text: "Kielce", value: "Kielce" },
        { text: "Kraków", value: "Kraków" },
        { text: "Lublin", value: "Lublin" },
        { text: "Łódź", value: "Łódź" },
        { text: "Olsztyn", value: "Olsztyn" },
        { text: "Opole", value: "Opole" },
        { text: "Poznań", value: "Poznań" },
        { text: "Rzeszów", value: "Rzeszów" },
        { text: "Szczecin", value: "Szczecin" },
        { text: "Toruń", value: "Toruń" },
        { text: "Warszawa", value: "Warszawa" },
        { text: "Wrocław", value: "Wrocław" },
        { text: "Zielona Góra", value: "Zielona Góra" },
      ],
      villages: [
        { text: "Białystok", value: "Białystok" },
        { text: "Bydgoszcz", value: "Bydgoszcz" },
        { text: "Gdańsk", value: "Gdańsk" },
        { text: "Gorzów Wielkopolski", value: "Gorzów Wielkopolski" },
        { text: "Katowice", value: "Katowice" },
        { text: "Kielce", value: "Kielce" },
        { text: "Kraków", value: "Kraków" },
        { text: "Lublin", value: "Lublin" },
        { text: "Łódź", value: "Łódź" },
        { text: "Olsztyn", value: "Olsztyn" },
        { text: "Opole", value: "Opole" },
        { text: "Poznań", value: "Poznań" },
        { text: "Rzeszów", value: "Rzeszów" },
        { text: "Szczecin", value: "Szczecin" },
        { text: "Toruń", value: "Toruń" },
        { text: "Warszawa", value: "Warszawa" },
        { text: "Wrocław", value: "Wrocław" },
        { text: "Zielona Góra", value: "Zielona Góra" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.personal-information-header {
  color: #413c3c;
  font-size: 16px;
  text-align: left;
}

input:focus {
  outline: 2px solid #2b0a57 !important; /* Change the outline color */
  box-shadow: none !important;
}

select:focus {
  outline: 2px solid #2b0a57 !important; /* Change the outline color */
  box-shadow: none !important;
}
</style>
