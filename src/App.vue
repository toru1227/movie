<template>
  <div id="app">
    <HeaderAuth />
    <router-view :key="$route.fullPath"/>
    <div v-if="this.$route.path == '/'">
      <FooterAuth />
    </div>
    <div v-else>
      <FooterNormal />
    </div>
  </div>
</template>
<script>
import HeaderAuth from "./components/HeaderAuth.vue";
import FooterAuth from "./components/FooterAuth.vue";
import FooterNormal from "./components/FooterNormal.vue";
export default {
  data() {
    return {
      footer: true,
    };
  },
  components: {
    HeaderAuth,
    FooterAuth,
    FooterNormal,
  },
  methods: {
    createPageTitle: function(to) {
      if (to.meta.title) {
        var setTitle = to.meta.title;
        document.title = setTitle;
      } else {
        document.title = "映画レビューサイト";
      }
    },
  },
  mounted: function() {
    var to = this.$route;
    this.createPageTitle(to);
  },
  watch: {
    $route(to) {
      this.createPageTitle(to);
    },
  },
};
</script>

<style>
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  box-sizing: border-box;
}

body {
  line-height: 1;
  margin: 0;
  height: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

html {
  background-color: #f0f0f0;
}
* {
  color: #414b5b;
  font-family: "Noto Sans JP";
}

button:focus {
  outline: 0;
}

</style>
