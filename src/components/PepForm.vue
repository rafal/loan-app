<template>
  <b-container fluid class="pep-form">
    <div class="grid-container" v-if="notAPep">
      <div class="item1">
        <b-form-checkbox id="not-a-pep" v-model="notAPep" name="not-a-pep">
        </b-form-checkbox>
      </div>
      <div class="item2">Neither I nor my family member is PEP</div>
      <div class="item3 d-flex align-items-center">
        <b-button
          v-b-modal.pep-modal
          class="info-button d-flex align-items-center"
          ><img src="@/assets/info.svg"
        /></b-button>
      </div>
      <div class="item4">
        <b-form-checkbox
          id="checkbox-1"
          v-model="ultimateBeneficiary"
          name="checkbox-1"
          unchecked-value="not_accepted"
        >
        </b-form-checkbox>
      </div>
      <div class="item5">I’m the ultimate beneficiary</div>
      <div class="item6 d-flex align-items-center">
        <b-button
          v-b-modal.pep-modal
          class="info-button d-flex align-items-center"
          ><img src="@/assets/info.svg"
        /></b-button>
        <b-modal
          id="pep-modal"
          centered
          hide-footer
          title="PEP"
          @show="onModalShow"
          @hidden="onModalHide"
        >
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            tellus vel orci tempus vehicula non eget mauris. Suspendisse tempor
            ipsum arcu, vitae dictum mi vulputate maximus. Duis facilisis est
            vitae eros luctus, ac ullamcorper tortor blandit. Integer id felis
            risus. Cras id felis nec tortor egestas aliquet et ut elit. Ut
            faucibus pellentesque ligula, vitae egestas enim. Cras laoreet porta
            tortor, ut placerat est auctor vitae. Duis purus mi, tincidunt
            ultrices facilisis vel, posuere ut lacus. Aenean at consectetur
            nisl.
          </p>
          <template #modal-header-close>
            <b-icon icon="x" scale="2.0"></b-icon>
          </template>
        </b-modal>
      </div>
    </div>
    <div v-if="!notAPep">
      <div class="grid-container-2">
        <div class="item1">
          <b-form-checkbox id="not-a-pep" v-model="notAPep" name="not-a-pep">
          </b-form-checkbox>
        </div>
        <div class="item2 mb-sm-1">Neither I nor my family member is PEP</div>
        <div class="item3 d-flex align-items-center">
          <b-button
            v-b-modal.pep-modal
            class="info-button d-flex align-items-center"
            ><img src="@/assets/info.svg"
          /></b-button>
        </div>
      </div>

      <b-row>
        <b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Relationship to the PEP"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="PEP Region"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="PEP Position"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Duration as PEP or related to a PEP"
          ></b-form-input></b-col
      ></b-row>
      <div class="grid-container-2 my-2">
        <div class="item4">
          <b-form-checkbox
            id="checkbox-1"
            v-model="ultimateBeneficiary"
            name="checkbox-1"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </div>
        <div class="item5">I’m the ultimate beneficiary</div>
        <div class="item6 d-flex align-items-center">
          <b-button
            v-b-modal.pep-modal
            class="info-button d-flex align-items-center"
            ><img src="@/assets/info.svg"
          /></b-button>
          <b-modal
            id="pep-modal"
            centered
            hide-footer
            title="PEP"
            @show="onModalShow"
            @hidden="onModalHide"
          >
            <p class="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget tellus vel orci tempus vehicula non eget mauris. Suspendisse
              tempor ipsum arcu, vitae dictum mi vulputate maximus. Duis
              facilisis est vitae eros luctus, ac ullamcorper tortor blandit.
              Integer id felis risus. Cras id felis nec tortor egestas aliquet
              et ut elit. Ut faucibus pellentesque ligula, vitae egestas enim.
              Cras laoreet porta tortor, ut placerat est auctor vitae. Duis
              purus mi, tincidunt ultrices facilisis vel, posuere ut lacus.
              Aenean at consectetur nisl.
            </p>
            <template #modal-header-close>
              <b-icon icon="x" scale="2.0"></b-icon>
            </template>
          </b-modal>
        </div>
      </div>
      <b-row>
        <b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="First Name"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Last Name"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Personal ID code"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Residency"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Birth place"
          ></b-form-input
        ></b-col>
        <b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Birth date"
          ></b-form-input></b-col
      ></b-row>
      <div class="grid-container-2 my-2">
        <div class="item1">
          <b-form-checkbox
            id="not-a-pep"
            v-model="beneficialOwnerIsNotAPep"
            name="beneficial-owner-is-not-a-pep"
          >
          </b-form-checkbox>
        </div>
        <div class="item2 mb-sm-1">The beneficial owner is not a PEP</div>
        <div class="item3 d-flex align-items-center"></div>
      </div>
      <b-row>
        <b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Relationship to the PEP"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="PEP region"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="PEP position"
          ></b-form-input></b-col
        ><b-col cols="12" sm="6" class="my-1"
          ><b-form-input
            class="pep-input"
            v-model="text"
            placeholder="Duration as PEP or related to a PEP"
          ></b-form-input></b-col
      ></b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      notAPep: true,
      ultimateBeneficiary: false,
    };
  },
  methods: {
    onModalShow() {
      document.body.classList.add("blur-backdrop");
    },
    onModalHide() {
      document.body.classList.remove("blur-backdrop");
    },
  },
};
</script>

<style lang="scss" scoped>
.pep-form {
  color: #413c3c;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columns */
  grid-template-rows: auto auto; /* 2 rows */
  gap: 10px; /* Optional: gap between grid items */
}

.grid-container-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 columns */
  grid-template-rows: auto;
  gap: 10px; /* Optional: gap between grid items */
}

/* Aligning content of each cell */

.item1,
.item4 {
  /* First column items */
  justify-self: end; /* Aligns content to the right */
}

.item2,
.item5 {
  /* Middle column items */
  justify-self: start; /* Aligns content to the left */
  white-space: nowrap; /* Prevents text from wrapping */
}

.item3,
.item6 {
  /* Last column items */
  justify-self: start; /* Aligns content to the left */
}

.blur-backdrop {
  backdrop-filter: blur(5px);
}

.info-button {
  border: none;
  background: none;
  padding: 0;
  border-radius: 50%;
  box-shadow: none !important; /* Removes box-shadow */

  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active {
    box-shadow: none !important; /* Removes box-shadow for focus and active states */
    outline: none !important; /* Removes outline */
  }
}
</style>
