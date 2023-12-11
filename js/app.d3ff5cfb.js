(function(){"use strict";var t={9897:function(t,e,a){var s=a(7195),i=a(4359),o=a(7244);a(7024);s["default"].use(i.XG7),s["default"].use(o.X);var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{toggleable:"",sticky:""}},[e("div",{staticClass:"navbar-placeholder"}),e("b-navbar-brand",{staticClass:"mx-auto",attrs:{href:"#"}},[e("img",{attrs:{alt:"logo",src:a(9574)}})]),e("b-navbar-toggle",{attrs:{target:"#"}},[e("img",{attrs:{alt:"menu",src:a(3898)}})])],1),e("main",[e("LoanCalculator"),e("UserDetailsCard",{staticClass:"my-4"}),e("PersonalInformation"),e("PepForm"),e("b-row",{staticClass:"my-4"},[e("b-col",{staticClass:"d-flex justify-content-center",attrs:{cols:"12"}},[e("b-button",{staticClass:"btn-continue"},[t._v("Continue")])],1)],1)],1)],1)},l=[],r=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[t.selected?e("div",{key:"selected",staticClass:"loan-calculator loan-calculator_selected"},[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"align-items-center justify-content-between"},[e("b-col",{staticClass:"input-group d-flex align-items-center justify-content-center",attrs:{cols:"11"}},[e("div",{staticClass:"input-container mx-md-2 d-flex align-items-center"},[e("label",{staticClass:"label d-flex flex-column pr-1",attrs:{for:"amount"}},[e("span",[t._v("Amount")]),t.outOfRange?e("span",{staticClass:"error"},[t._v("Out of range")]):t._e(),t.isAmountFocused&&!t.outOfRange?e("span",{staticClass:"amount-range"},[t._v(t._s(t.minAmount)+" - "+t._s(t.maxAmount)+" €")]):t._e()]),e("b-form-input",{staticClass:"input",class:{"out-of-range":t.outOfRange},staticStyle:{"max-width":"80x"},attrs:{id:"amount",type:"number",min:"200",max:"10000"},on:{focus:t.onAmountFocus,blur:t.onAmountBlur},model:{value:t.amount,callback:function(e){t.amount=t._n(e)},expression:"amount"}}),e("span",{staticClass:"euro-symbol"},[t._v("€")]),e("b-dropdown",{staticClass:"amount-select-icon",attrs:{"no-caret":"",id:"amount-dropdown",offset:"-200"},on:{click:t.toggleAmountSelect},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticStyle:{width:"15px"},attrs:{src:a(239)}})]},proxy:!0}],null,!1,3218562031)},t._l(t.amountOptions,(function(a,s){return e("b-dropdown-item",{key:a.value,class:{"first-dropdown-item":0===s,"last-dropdown-item":s===t.amountOptions.length-1},on:{click:function(e){return t.selectAmount(a.value)}}},[e("span",{staticClass:"dropdown-item-value"},[t._v(t._s(a.text))]),0===s?e("span",{staticClass:"dropdown-item-text"},[t._v("Min allowed")]):t._e(),s===t.amountOptions.length-1?e("span",{staticClass:"dropdown-item-text"},[t._v("Max allowed")]):t._e()])})),1)],1),e("div",{staticClass:"input-container d-flex align-items-center mb-2 mb-md-0 mx-md-3"},[e("label",{staticClass:"label pr-1",attrs:{for:"duration"}},[t._v("Duration")]),e("b-dropdown",{staticClass:"my-2 my-md-0",attrs:{"no-caret":"",id:"amount-dropdown"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("span",[t._v(t._s(t.duration)+" months "),e("img",{staticStyle:{width:"15px"},attrs:{src:a(239)}})])]},proxy:!0}],null,!1,3965272971)},t._l(t.durationOptions,(function(a){return e("b-dropdown-item",{key:a.value,on:{click:function(e){return t.selectDuration(a.value)}}},[e("span",{staticClass:"dropdown-item-value"},[t._v(t._s(a.text))])])})),1)],1),e("div",{staticClass:"monthly-payment"},[e("span",{staticClass:"label"},[t._v("Monthly Payment")]),e("span",{staticClass:"monthly-payment_value"},[t._v(t._s(t.monthlyPayment)),e("span",{staticClass:"euro"},[t._v("€")])])])]),e("b-col",{staticClass:"px-0",attrs:{cols:"1"}},[e("b-button",{staticClass:"confirm-btn",attrs:{variant:"white"},on:{click:t.confirmSelection}},[e("img",{attrs:{alt:"confirm-button",src:a(1994)}})])],1)],1)],1)],1):e("div",{key:"deselected",staticClass:"loan-calculator loan-calculator_deselected"},[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"align-items-center justify-content-between",attrs:{"no-gutters":""}},[e("b-col",{attrs:{cols:"1"}},[e("b-button",{staticClass:"toggle-select p-0 m-0",staticStyle:{background:"none",border:"none","border-radius":"50%"},on:{click:t.toggleSelect}},[e("b-icon",{attrs:{icon:"chevron-left"}})],1)],1),e("b-col",{staticClass:"px-0",attrs:{cols:"10"}},[e("div",{staticClass:"loan-summary m-0 p-0 justify-content-center",staticStyle:{overflow:"hidden"}},[e("span",{staticStyle:{display:"inline-block","max-height":"100%","white-space":"nowrap"}},[t._v("Your loan application")]),e("span",{staticClass:"loan-summary_details",staticStyle:{display:"inline-block","max-height":"100%","white-space":"nowrap"}},[t._v(t._s(t.amount)),e("span",{staticClass:"euro"},[t._v("€")]),t._v(" / "+t._s(t.duration)+" months")])])]),e("b-col",{attrs:{cols:"1"}},[e("div",{staticStyle:{width:"20px",visibility:"hidden",display:"inline-block"}})])],1)],1)],1)])},c=[],u=(a(560),{data(){return{durationOptions:[{value:12,text:"12 months"},{value:24,text:"24 months"},{value:36,text:"36 months"},{value:48,text:"48 months"},{value:60,text:"60 months"}],selectedAmount:1e3,showAmountSelect:!1,isAmountFocused:!1,showAmountRange:!1,selected:!1,amount:2700,duration:36,minAmount:200,maxAmount:1e4,minDuration:6,maxDuration:60,amountRangeError:!1}},computed:{amountOptions(){console.log("generateAmountOptions");let t=[],e=1e3;t.push({value:this.minAmount,text:`${this.minAmount}€`});let a=1e3*Math.ceil(this.minAmount/1e3);for(let s=a;s<this.maxAmount;s+=e)t.push({value:s,text:`${s}€`});return this.maxAmount!==a&&t.push({value:this.maxAmount,text:`${this.maxAmount}€`}),console.log(t),t},outOfRange(){return this.amount<this.minAmount||this.amount>this.maxAmount},transitionName(){return this.selected?"slide-fade-forward":"slide-fade-backward"},monthlyPayment(){return this.amount&&this.duration?Number.isInteger(this.amount/this.duration)?this.amount/this.duration:(this.amount/this.duration).toFixed(2):0}},methods:{toggleAmountSelect(){this.showAmountSelect=!this.showAmountSelect},selectAmount(t){this.amount=t},selectDuration(t){this.duration=t},onAmountFocus(){this.isAmountFocused=!0},onAmountBlur(){console.log("onAmountBlur"),this.isAmountFocused=!1,this.amount<this.minAmount?this.amount=this.minAmount:this.amount>this.maxAmount&&(this.amount=this.maxAmount)},formatter(t){if(!t)return"0"},confirmSelection(){this.isAmountInRange(this.amount)?this.selected=!1:this.amountRangeError=!0},toggleSelect(){this.selected=!this.selected},isAmountInRange(t){return t>=this.minAmount&&t<=this.maxAmount},handleAmountInput(t){this.amount=t,this.amountRangeError=!this.isAmountInRange(t)}}}),m=u,d=a(1001),p=(0,d.Z)(m,r,c,!1,null,"4ab7b973",null),f=p.exports,b=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[t.editing?e("div",{key:"editing",staticClass:"editor py-3 px-3 px-md-4 d-flex flex-column flex-lg-row justify-content-between align-items-center"},[e("div",{staticClass:"editor-label-wrapper d-flex flex-column"},[e("span",{staticClass:"editor-label"},[t._v("Change your contact info")]),t.phoneError?e("span",{staticClass:"error"},[t._v("Incorrect phone number")]):t._e(),t.emailError?e("span",{staticClass:"error"},[t._v("Incorrect email")]):t._e()]),e("div",{staticClass:"d-flex my-2 my-lg-0"},[e("label",{staticClass:"d-flex align-items-center m-0",attrs:{for:"phone"}},[e("img",{attrs:{src:a(6289)}})]),e("b-form-input",{staticClass:"input px-1",class:{"input-error":t.phoneError},staticStyle:{width:"fit-content"},attrs:{id:"phone",type:"tel"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1),e("div",{staticClass:"d-flex my-2 my-lg-0"},[e("label",{staticClass:"d-flex align-items-center m-0",attrs:{for:"email"}},[e("img",{attrs:{src:a(2059)}})]),e("b-form-input",{staticClass:"input px-1",class:{"input-error":t.emailError},staticStyle:{width:"175px"},attrs:{id:"email",type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),e("b-button",{staticClass:"confirm-btn mt-2 mt-lg-0",attrs:{variant:"white"},on:{click:t.toggleEdit}},[e("img",{attrs:{alt:"confirm-button",src:a(6416)}})])],1):t._e(),t.editing?t._e():e("b-card",{key:"notEdiing",staticClass:"user-details"},[e("div",{staticClass:"card-top-half"},[e("span",{staticClass:"username"},[t._v(t._s(t.user.name))]),e("b-button",{staticClass:"back-btn",staticStyle:{background:"#fdfdfd",border:"none","border-radius":"50%",position:"absolute",right:"16px"},on:{click:t.toggleEdit}},[e("img",{attrs:{src:a(8119)}})])],1),e("div",{staticClass:"card-bottom-half"},[e("span",[e("img",{staticClass:"mr-1",attrs:{src:a(5730)}}),t._v(t._s(t.user.id))]),e("span",[e("img",{staticClass:"mr-1",attrs:{src:a(6289)}}),t._v(t._s(t.user.phone))]),e("span",[e("img",{staticClass:"mr-1",attrs:{src:a(2059)}}),t._v(t._s(t.user.email))])])])],1)},v=[],h={data(){return{editing:!1,errorMsg:"input",phoneError:!1,emailError:!1,user:{name:"Anna Maria Tamm Rodriguez Espinosa",id:38912052254,phone:"+372 5289 6572",email:"anna.tamm@gmail.com"}}},computed:{emailValidation(){const t=/\S+@\S+\.\S+/;return t.test(this.user.email)},phoneNumberValidation(){const t=this.user.phone.replace(/\s+/g,""),e=/^(\+\d{11}|\d{9})$/;return e.test(t)},transitionName(){return this.selected?"slide-fade-forward":"slide-fade-backward"},formattedPhone(){const t=this.user.phone.toString(),e=t.substring(0,3),a=t.substring(3,7),s=t.substring(7,11);return`${e} ${a} ${s}`}},methods:{toggleEdit(){this.editing=!this.editing}},watch:{phoneNumberValidation(){!this.phoneNumberValidation&&this.user.phone?(this.phoneError=!0,this.errorMsg="phone number"):this.phoneError=!1},emailValidation(){!this.emailValidation&&this.user.email?(this.emailError=!0,this.errorMsg="email"):this.emailError=!1}}},x=h,g=(0,d.Z)(x,b,v,!1,null,"6b38a194",null),y=g.exports,C=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"personal-information",attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"personal-information-header",attrs:{cols:"12"}},[t._v("Personal information")])],1),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-form-select",{attrs:{options:t.countries,disabled:!t.addAddressManually},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("Country")])]},proxy:!0}]),model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-form-select",{attrs:{options:t.counties,disabled:!t.addAddressManually},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("County")])]},proxy:!0}]),model:{value:t.form.county,callback:function(e){t.$set(t.form,"county",e)},expression:"form.county"}})],1),e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-form-select",{attrs:{options:t.cities,disabled:!t.addAddressManually},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("City / Parish")])]},proxy:!0}]),model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-form-select",{attrs:{options:t.villages,disabled:!t.addAddressManually},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("Village / Township")])]},proxy:!0}]),model:{value:t.form.village,callback:function(e){t.$set(t.form,"village",e)},expression:"form.village"}})],1),e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-form-input",{attrs:{disabled:!t.addAddressManually,placeholder:"Street",type:"text"},model:{value:t.form.street,callback:function(e){t.$set(t.form,"street",e)},expression:"form.street"}})],1),e("b-col",{staticClass:"my-1",attrs:{xs:"12",sm:"6"}},[e("b-row",[e("b-col",{staticStyle:{padding:"0 5px 0 15px"},attrs:{cols:"4"}},[e("b-form-input",{attrs:{disabled:!t.addAddressManually,placeholder:"House",type:"text"},model:{value:t.form.house,callback:function(e){t.$set(t.form,"house",e)},expression:"form.house"}})],1),e("b-col",{staticStyle:{padding:"0 5px"},attrs:{cols:"4"}},[e("b-form-input",{attrs:{disabled:!t.addAddressManually,placeholder:"Apartment",type:"text"},model:{value:t.form.apartment,callback:function(e){t.$set(t.form,"apartment",e)},expression:"form.apartment"}})],1),e("b-col",{staticStyle:{padding:"0 15px 0 5px"},attrs:{cols:"4"}},[e("b-form-input",{attrs:{disabled:!t.addAddressManually,placeholder:"Postal",type:"text"},model:{value:t.form.postal,callback:function(e){t.$set(t.form,"postal",e)},expression:"form.postal"}})],1)],1)],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",{staticClass:"d-flex justify-content-around",attrs:{cols:"12"}},[e("img",{staticClass:"mx-2",staticStyle:{"max-width":"35%"},attrs:{src:a(7531),alt:""}}),e("span",{staticStyle:{"font-style":"italic",color:"#dddddd","font-size":"14px"}},[t._v("Or")]),e("img",{staticClass:"mx-2",staticStyle:{"max-width":"35%"},attrs:{src:a(7531),alt:""}})])],1),e("b-row",{staticClass:"my-3"},[e("b-col",{attrs:{cols:"12"}},[e("b-form-checkbox",{attrs:{name:"add-address-manually",switch:""},model:{value:t.addAddressManually,callback:function(e){t.addAddressManually=e},expression:"addAddressManually"}},[e("span",{staticStyle:{color:"#413c3c","font-size":"14px"}},[t._v("Add address manually")])])],1)],1),e("b-row",{staticClass:"mb-3"},[e("b-col",{attrs:{cols:"12"}},[e("img",{staticStyle:{"max-width":"100%"},attrs:{src:a(3187),alt:""}})])],1)],1)},k=[],w={data(){return{form:{country:null,county:null,city:null,village:null,street:null,house:null,apartment:null,postal:null},addAddressManually:!0,countries:[{text:"Germany",value:"DE"},{text:"France",value:"FR"},{text:"Spain",value:"ES"},{text:"Italy",value:"IT"},{text:"Poland",value:"PL"},{text:"United Kingdom",value:"UK"}],counties:[{text:"Dolnośląskie",value:"Dolnośląskie"},{text:"Kujawsko-pomorskie",value:"Kujawsko-pomorskie"},{text:"Lubelskie",value:"Lubelskie"},{text:"Lubuskie",value:"Lubuskie"},{text:"Łódzkie",value:"Łódzkie"},{text:"Małopolskie",value:"Małopolskie"},{text:"Mazowieckie",value:"Mazowieckie"},{text:"Opolskie",value:"Opolskie"},{text:"Podkarpackie",value:"Podkarpackie"},{text:"Podlaskie",value:"Podlaskie"},{text:"Pomorskie",value:"Pomorskie"},{text:"Śląskie",value:"Śląskie"},{text:"Świętokrzyskie",value:"Świętokrzyskie"},{text:"Warmińsko-mazurskie",value:"Warmińsko-mazurskie"},{text:"Wielkopolskie",value:"Wielkopolskie"},{text:"Zachodniopomorskie",value:"Zachodniopomorskie"}],cities:[{text:"Białystok",value:"Białystok"},{text:"Bydgoszcz",value:"Bydgoszcz"},{text:"Gdańsk",value:"Gdańsk"},{text:"Gorzów Wielkopolski",value:"Gorzów Wielkopolski"},{text:"Katowice",value:"Katowice"},{text:"Kielce",value:"Kielce"},{text:"Kraków",value:"Kraków"},{text:"Lublin",value:"Lublin"},{text:"Łódź",value:"Łódź"},{text:"Olsztyn",value:"Olsztyn"},{text:"Opole",value:"Opole"},{text:"Poznań",value:"Poznań"},{text:"Rzeszów",value:"Rzeszów"},{text:"Szczecin",value:"Szczecin"},{text:"Toruń",value:"Toruń"},{text:"Warszawa",value:"Warszawa"},{text:"Wrocław",value:"Wrocław"},{text:"Zielona Góra",value:"Zielona Góra"}],villages:[{text:"Białystok",value:"Białystok"},{text:"Bydgoszcz",value:"Bydgoszcz"},{text:"Gdańsk",value:"Gdańsk"},{text:"Gorzów Wielkopolski",value:"Gorzów Wielkopolski"},{text:"Katowice",value:"Katowice"},{text:"Kielce",value:"Kielce"},{text:"Kraków",value:"Kraków"},{text:"Lublin",value:"Lublin"},{text:"Łódź",value:"Łódź"},{text:"Olsztyn",value:"Olsztyn"},{text:"Opole",value:"Opole"},{text:"Poznań",value:"Poznań"},{text:"Rzeszów",value:"Rzeszów"},{text:"Szczecin",value:"Szczecin"},{text:"Toruń",value:"Toruń"},{text:"Warszawa",value:"Warszawa"},{text:"Wrocław",value:"Wrocław"},{text:"Zielona Góra",value:"Zielona Góra"}]}}},P=w,_=(0,d.Z)(P,C,k,!1,null,"551661b6",null),A=_.exports,S=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"pep-form",attrs:{fluid:""}},[t.notAPep?e("div",{staticClass:"grid-container"},[e("div",{staticClass:"item1"},[e("b-form-checkbox",{attrs:{id:"not-a-pep",name:"not-a-pep"},model:{value:t.notAPep,callback:function(e){t.notAPep=e},expression:"notAPep"}})],1),e("div",{staticClass:"item2"},[t._v("Neither I nor my family member is PEP")]),e("div",{staticClass:"item3 d-flex align-items-center"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.pep-modal",modifiers:{"pep-modal":!0}}],staticClass:"info-button d-flex align-items-center"},[e("img",{attrs:{src:a(3759)}})])],1),e("div",{staticClass:"item4"},[e("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1","unchecked-value":"not_accepted"},model:{value:t.ultimateBeneficiary,callback:function(e){t.ultimateBeneficiary=e},expression:"ultimateBeneficiary"}})],1),e("div",{staticClass:"item5"},[t._v("I’m the ultimate beneficiary")]),e("div",{staticClass:"item6 d-flex align-items-center"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.pep-modal",modifiers:{"pep-modal":!0}}],staticClass:"info-button d-flex align-items-center"},[e("img",{attrs:{src:a(3759)}})]),e("b-modal",{attrs:{id:"pep-modal",centered:"","hide-footer":"",title:"PEP"},on:{show:t.onModalShow,hidden:t.onModalHide},scopedSlots:t._u([{key:"modal-header-close",fn:function(){return[e("b-icon",{attrs:{icon:"x",scale:"2.0"}})]},proxy:!0}],null,!1,716865363)},[e("p",{staticClass:"my-4"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tellus vel orci tempus vehicula non eget mauris. Suspendisse tempor ipsum arcu, vitae dictum mi vulputate maximus. Duis facilisis est vitae eros luctus, ac ullamcorper tortor blandit. Integer id felis risus. Cras id felis nec tortor egestas aliquet et ut elit. Ut faucibus pellentesque ligula, vitae egestas enim. Cras laoreet porta tortor, ut placerat est auctor vitae. Duis purus mi, tincidunt ultrices facilisis vel, posuere ut lacus. Aenean at consectetur nisl. ")])])],1)]):t._e(),t.notAPep?t._e():e("div",[e("div",{staticClass:"grid-container-2"},[e("div",{staticClass:"item1"},[e("b-form-checkbox",{attrs:{id:"not-a-pep",name:"not-a-pep"},model:{value:t.notAPep,callback:function(e){t.notAPep=e},expression:"notAPep"}})],1),e("div",{staticClass:"item2 mb-sm-1"},[t._v("Neither I nor my family member is PEP")]),e("div",{staticClass:"item3 d-flex align-items-center"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.pep-modal",modifiers:{"pep-modal":!0}}],staticClass:"info-button d-flex align-items-center"},[e("img",{attrs:{src:a(3759)}})])],1)]),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Relationship to the PEP"},model:{value:t.relationshipToPep,callback:function(e){t.relationshipToPep=e},expression:"relationshipToPep"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"PEP Region"},model:{value:t.pepRegion,callback:function(e){t.pepRegion=e},expression:"pepRegion"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"PEP Position"},model:{value:t.pepPosition,callback:function(e){t.pepPosition=e},expression:"pepPosition"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Duration as PEP or related to a PEP"},model:{value:t.durationAsPep,callback:function(e){t.durationAsPep=e},expression:"durationAsPep"}})],1)],1),e("div",{staticClass:"grid-container-2 my-2"},[e("div",{staticClass:"item4"},[e("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1","unchecked-value":"not_accepted"},model:{value:t.ultimateBeneficiary,callback:function(e){t.ultimateBeneficiary=e},expression:"ultimateBeneficiary"}})],1),e("div",{staticClass:"item5"},[t._v("I’m the ultimate beneficiary")]),e("div",{staticClass:"item6 d-flex align-items-center"},[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.pep-modal",modifiers:{"pep-modal":!0}}],staticClass:"info-button d-flex align-items-center"},[e("img",{attrs:{src:a(3759)}})]),e("b-modal",{attrs:{id:"pep-modal",centered:"","hide-footer":"",title:"PEP"},on:{show:t.onModalShow,hidden:t.onModalHide},scopedSlots:t._u([{key:"modal-header-close",fn:function(){return[e("b-icon",{attrs:{icon:"x",scale:"2.0"}})]},proxy:!0}],null,!1,716865363)},[e("p",{staticClass:"my-4"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget tellus vel orci tempus vehicula non eget mauris. Suspendisse tempor ipsum arcu, vitae dictum mi vulputate maximus. Duis facilisis est vitae eros luctus, ac ullamcorper tortor blandit. Integer id felis risus. Cras id felis nec tortor egestas aliquet et ut elit. Ut faucibus pellentesque ligula, vitae egestas enim. Cras laoreet porta tortor, ut placerat est auctor vitae. Duis purus mi, tincidunt ultrices facilisis vel, posuere ut lacus. Aenean at consectetur nisl. ")])])],1)]),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"First Name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Last Name"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Personal ID code"},model:{value:t.personalIdCode,callback:function(e){t.personalIdCode=e},expression:"personalIdCode"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Residency"},model:{value:t.residency,callback:function(e){t.residency=e},expression:"residency"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Birth place"},model:{value:t.birthPlace,callback:function(e){t.birthPlace=e},expression:"birthPlace"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Birth date"},model:{value:t.birthDate,callback:function(e){t.birthDate=e},expression:"birthDate"}})],1)],1),e("div",{staticClass:"grid-container-2 my-2"},[e("div",{staticClass:"item1"},[e("b-form-checkbox",{attrs:{id:"beneficial-owner-is-not-a-pep",name:"beneficial-owner-is-not-a-pep"},model:{value:t.beneficialOwnerIsNotAPep,callback:function(e){t.beneficialOwnerIsNotAPep=e},expression:"beneficialOwnerIsNotAPep"}})],1),e("div",{staticClass:"item2 mb-sm-1"},[t._v("The beneficial owner is not a PEP")]),e("div",{staticClass:"item3 d-flex align-items-center"})]),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Relationship to the PEP"},model:{value:t.beneificialOwnerRelationship,callback:function(e){t.beneificialOwnerRelationship=e},expression:"beneificialOwnerRelationship"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"PEP region"},model:{value:t.beneficialOwnerPepRegion,callback:function(e){t.beneficialOwnerPepRegion=e},expression:"beneficialOwnerPepRegion"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"PEP position"},model:{value:t.beneficialOwnerPepPosition,callback:function(e){t.beneficialOwnerPepPosition=e},expression:"beneficialOwnerPepPosition"}})],1),e("b-col",{staticClass:"my-1",attrs:{cols:"12",sm:"6"}},[e("b-form-input",{staticClass:"pep-input",attrs:{placeholder:"Duration as PEP or related to a PEP"},model:{value:t.beneficialOwnerDurationAsPep,callback:function(e){t.beneficialOwnerDurationAsPep=e},expression:"beneficialOwnerDurationAsPep"}})],1)],1)],1)])},O=[],z={data(){return{notAPep:!0,ultimateBeneficiary:!1,beneficialOwnerIsNotAPep:!1,relationshipToPep:"",pepRegion:"",pepPosition:"",durationAsPep:"",firstName:"",lastName:"",personalIdCode:"",residency:"",birthPlace:"",birthDate:"",beneificialOwnerRelationship:"",beneficialOwnerPepRegion:"",beneficialOwnerPepPosition:"",beneficialOwnerDurationAsPep:""}},methods:{onModalShow(){document.body.classList.add("blur-backdrop")},onModalHide(){document.body.classList.remove("blur-backdrop")}}},E=z,M=(0,d.Z)(E,S,O,!1,null,"41c17beb",null),R=M.exports,N={components:{LoanCalculator:f,UserDetailsCard:y,PersonalInformation:A,PepForm:R}},I=N,D=(0,d.Z)(I,n,l,!1,null,null,null),B=D.exports,$=a(2241);s["default"].use($.ZP);const j=[],T=new $.ZP({mode:"history",base:"/loan-app/",routes:j});var K=T,L=a(408);s["default"].use(L.ZP);var W=new L.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:K,store:W,render:t=>t(B)}).$mount("#app")},239:function(t,e,a){t.exports=a.p+"img/chevron-down.24bf597c.svg"},6416:function(t,e,a){t.exports=a.p+"img/chevron-right-white.3f804b89.svg"},1994:function(t,e,a){t.exports=a.p+"img/chevron-right.10c5465d.svg"},3187:function(t,e,a){t.exports=a.p+"img/horizontal-line-long.054ddf5c.svg"},7531:function(t,e,a){t.exports=a.p+"img/horizontal-line.01552f87.svg"},3759:function(t,e,a){t.exports=a.p+"img/info.3ed7f3f8.svg"},9574:function(t,e,a){t.exports=a.p+"img/logo.53a719ae.svg"},2059:function(t,e,a){t.exports=a.p+"img/mail.ad2d84a2.svg"},3898:function(t,e,a){t.exports=a.p+"img/menu.954df379.svg"},8119:function(t,e,a){t.exports=a.p+"img/pencil.7788da8d.svg"},6289:function(t,e,a){t.exports=a.p+"img/phone.405a3043.svg"},5730:function(t,e,a){t.exports=a.p+"img/user.c949cb00.svg"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],o=t[u][2];for(var l=!0,r=0;r<s.length;r++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[r])}))?s.splice(r--,1):(l=!1,o<n&&(n=o));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/loan-app/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,n=s[0],l=s[1],r=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(r)var u=r(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkloan_app"]=self["webpackChunkloan_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9897)}));s=a.O(s)})();
//# sourceMappingURL=app.d3ff5cfb.js.map