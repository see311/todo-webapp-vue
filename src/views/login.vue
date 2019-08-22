<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen>
        <f7-login-screen-title>登陆</f7-login-screen-title>
        <f7-list form ref="form" class="">
            <f7-list-input
                label="邮箱"
                type="email"
                :value="email"
                @input="email = $event.target.value"
                validate
                required
                clear-button
                placeholder="你的邮箱"
            ></f7-list-input>
            <f7-list-input
                label="密码"
                type="password"
                :value="password"
                @input="password = $event.target.value"
                validate
                required
                clear-button
                placeholder="你的密码"
            ></f7-list-input>
            <f7-list>
                <f7-list-button type="submit" @click="signIn">
                    登陆
                </f7-list-button>
                <f7-block-footer>
                    还没有账号？<a href="/signup">注册</a>
                </f7-block-footer>
            </f7-list>
        </f7-list>
    </f7-page>
</template>
<script>
import {
    f7Page,
    f7LoginScreenTitle,
    f7List,
    f7ListButton,
    f7BlockFooter,
    f7ListInput,
    f7Button
} from "framework7-vue";

export default {
    components: {
        f7Page,
        f7LoginScreenTitle,
        f7List,
        f7ListButton,
        f7BlockFooter,
        f7ListInput,
        f7Button
    },
    data() {
        return {
            email: "test@qq.com",
            password: "123456"
        };
    },
    methods: {
        signIn() {
            const app = this.$f7;
            const router = this.$f7router;
            app.input.validateInputs("form");

            const inputs = Array.from(this.$refs.form.$el);
            let valid = true;
            inputs.forEach(e => {
                if (e.validity.valid !== true) valid = false;
            });
            if (valid) {
                this.$rqu({
                    url: "/api/login",
                    method: "post",
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
                    .then(({ data }) => {
                        console.log(data);

                        this.$store.commit("login", { token: data.message });
                        router.back();
                    })
                    .catch(err => {
                        app.dialog.alert("用户名或密码错误", "登陆失败");
                    });
            }
        }
    }
};
</script>
