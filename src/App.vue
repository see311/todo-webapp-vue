<template>
  <f7-app :params="f7Params">
    <f7-statusbar></f7-statusbar>
    <f7-panel left cover resizable>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
    <f7-panel right reveal resizable>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>
    <f7-view url="/" main :push-state="true" push-state-separator="#" class="safe-areas" :master-detail-breakpoint="800"></f7-view>
  </f7-app>
</template>
<script>
  import { f7App, f7Panel, f7View, f7Statusbar } from 'framework7-vue';
  import routes from './routes';
  export default {
    components: {
      f7App,
      f7Panel,
      f7View,
      f7Statusbar,
    },
    data() {
      let theme = 'ios';
      return {
        f7Params: {
          id: 'framework7.todolist',
          theme,
          routes,
          pushState: true,
          popup: {
            closeOnEscape: true,
          },
          sheet: {
            closeOnEscape: true,
          },
          popover: {
            closeOnEscape: true,
          },
          actions: {
            closeOnEscape: true,
          },
        },
      };
    },
  };
</script>
<style>
@font-face {
  font-family: 'Framework7 Icons';
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/Framework7Icons-Regular.eot");
  src: url("./assets/fonts/Framework7Icons-Regular.woff2") format("woff2"),
       url("./assets/fonts/Framework7Icons-Regular.woff") format("woff"),
       url("./assets/fonts/Framework7Icons-Regular.ttf") format("truetype");
}

.f7-icons {
  font-family: 'Framework7 Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 28px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  text-align: center;
}
#nprogress .bar{
  z-index: 20001 !important;
}
</style>
