<template>
    <f7-page>
        <f7-navbar title="Test" backLink="Back">
            <f7-nav-right>
                <f7-link icon-f7="home" href="/"></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-block strong>
            <p>Test</p>
        </f7-block>
    </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7Block, f7NavRight, f7Link } from "framework7-vue";
export default {
    components: {
        f7Page,
        f7Navbar,
        f7Block,
        f7NavRight,
        f7Link
    }
};
</script>

<style>
</style>