<template>
    <div id="contacts-us" class="contacts-us">
        <div class="container">
            <div class="title title--section title--white">Contacts Us</div>
            <div class="row row--revert">
                <div class="col col--6">
                    <div class="contacts-us-text">
                        Please tell us more about your request and give us info about your company and country
                    </div>
                </div>
                <div class="col col--6">
                    <ValidationObserver ref="observer" class="contacts-us-form" v-slot="{ passes }" tag="div">
                        <form class="form" @submit.prevent="passes(submitForm)">
                            <ValidationProvider class="form-field"
                                                name="name"
                                                tag="div"
                                                rules="required|alpha"
                                                v-slot="{ errors }"
                            >
                                <label class="form-field__label" for="name">Name</label>
                                <input class="form-field__input"
                                       v-model="fields.name"
                                       id="name"
                                       name="name"
                                       :class="{'is-error': errors.length > 0}"
                                       type="text"
                                       inputmode="text"
                                >
                                <div class="form-field__line"></div>
                                <div class="form-field__error">{{ errors[0] }}</div>
                            </ValidationProvider>
                            <ValidationProvider class="form-field"
                                                tag="div"
                                                name="phone"
                                                rules="required|digits:11"
                                                v-slot="{ errors }"
                            >
                                <label class="form-field__label" for="phone">Phone</label>
                                <input class="form-field__input"
                                       v-model="fields.phone"
                                       id="phone"
                                       name="phone"
                                       :class="{'is-error': errors.length > 0}"
                                       type="tel"
                                       inputmode="tel"
                                >
                                <div class="form-field__line"></div>
                                <div class="form-field__error">{{ errors[0] }}</div>
                            </ValidationProvider>
                            <ValidationProvider class="form-field"
                                                tag="div"
                                                name="email"
                                                rules="required|email"
                                                v-slot="{ errors }"
                            >
                                <label class="form-field__label" for="email">Email</label>
                                <input class="form-field__input"
                                       v-model="fields.email"
                                       id="email"
                                       name="email"
                                       :class="{'is-error': errors.length > 0}"
                                       type="email"
                                       inputmode="email"
                                >
                                <div class="form-field__line"></div>
                                <div class="form-field__error">{{ errors[0] }}</div>
                            </ValidationProvider>
                            <ValidationProvider class="form-field form-field--last"
                                                name="agree"
                                                tag="div"
                                                :rules="{ required: { allowFalse: false } }"
                                                v-slot="{ errors }"
                            >
                                <label class="form-field__check">
                                    <input v-model="fields.agree"
                                           name="agree"
                                           type="checkbox"
                                           :class="{'is-error': errors.length > 0}"
                                    >
                                    <span>I agree the processing of personal data</span>
                                </label>
                                <div class="form-field__error">{{ errors[0] }}</div>
                            </ValidationProvider>

                            <button class="button button--large" :disabled="isSending">Get in touch</button>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import 'sweetalert2/src/sweetalert2.scss';
	import Swal from 'sweetalert2/dist/sweetalert2.js';
	import {ValidationObserver, ValidationProvider} from "vee-validate";
	import axios from 'axios';

	export default {
		name: "ContactsUs",
		components: {
			ValidationObserver,
			ValidationProvider
		},
		data: () => ({
			isSending: false,
			fields: {
				name: '',
				phone: '',
				email: '',
				agree: false
			}
		}),
		methods: {
			submitForm () {
				this.isSending = true;

				axios
				.post('https://httpbin.org/post', this.fields)
				.then(result => {
					if (result.status === 200 && result.statusText === "OK") {
						Swal.fire({
							title: result.status + ' ' + result.statusText,
							type: 'success',
							confirmButtonText: 'Ok'
						}).then(() => {
							this.clearForm();
						});
					}
				})
				.catch((error) => {
					Swal.fire({
						type: 'error',
						title: error.message,
						toast: true,
						position: 'top-end',
						showConfirmButton: false,
						timer: 3000
					});
				}).then(() => {
					this.isSending = false;
				});
			},
			clearForm () {
				for (let field in this.fields) {
					if (field === 'agree') {
						this.fields[field] = false;
						continue;
					}
					this.fields[field] = '';
                }
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
			}
		}
	};
</script>

<style scoped lang="scss">
    .contacts-us {
        background-color: $theme-color-2;
        margin-bottom: 1px;
        padding-top: em(100);
        padding-bottom: em(130);
        @include media($screen-def) {
            padding-top: em(140);
            padding-bottom: em(176);
        }
    }

    .contacts-us-form {
        @include media($screen-md) {
            max-width: 93%;
        }
    }

    .contacts-us-text {
        font-size: em(25);
        line-height: 1.5;
        margin-bottom: rem(20);
        @include media($screen-md) {
            max-width: 93%;
            margin-left: auto;
        }
    }
</style>
