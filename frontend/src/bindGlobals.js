import Vue from "vue";

const components = {};

function importComponents(context) {
  context
    .keys()
    .map((key) => ({
      key,
      component: key
        .replace(/^\.\//, "")
        .replace(/\.vue$/, "")
        .split(/\//)
        .pop(),
    }))
    .forEach(({ key, component }) => {
      components[component] = context(key).default;
    });
}

importComponents(require.context("@/components", true, /V[\w]+\.vue$/i));

for (const component in components) {
  Vue.component(component, components[component]);
}
