<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form ref="form" class="">
            <f7-list-input
                ref="myInput"
                label="Username"
                type="text"
                placeholder="Your username"
                :value="username"
                @input="username = $event.target.value"
                validate
                required
            ></f7-list-input>
            <f7-list-input
                label="Password"
                type="password"
                placeholder="Your password"
                :value="password"
                @input="password = $event.target.value"
                validate
                required
            ></f7-list-input>
            <f7-list>
                <f7-list-button type="submit" @click="signIn">
                    Sign In
                </f7-list-button>
            </f7-list>
        </f7-list>
    </f7-page>
</template>
<script>
import {
    f7Page,
    f7LoginScreenTitle,
    f7List,
    f7ListItem,
    f7ListButton,
    f7BlockFooter,
    f7ListInput
} from "framework7-vue";

export default {
    components: {
        f7Page,
        f7LoginScreenTitle,
        f7List,
        f7ListItem,
        f7ListButton,
        f7BlockFooter,
        f7ListInput
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        signIn() {
            const self = this;
            const app = self.$f7;
            const router = self.$f7router;
            app.input.validateInputs("form");

            const inputs = Array.from(self.$refs.form.$el);
            let valid = true;
            inputs.forEach(e => {
                if (e.validity.valid !== true) valid = false;
            });
            if (valid)
                app.dialog.alert(
                    `Username: ${self.username}<br>Password: ${self.password}`,
                    () => {
                        router.navigate("/test");
                    }
                );
        }
    }
};
</script>
