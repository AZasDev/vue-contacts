import {extend, localize} from "vee-validate";
import {alpha, digits, email, required} from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

extend("required", required);
extend("email", email);
extend("alpha", alpha);
extend("digits", digits);

localize({
	en
});
