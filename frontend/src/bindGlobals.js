import Vue from "vue";

function loadComponents() {
  const context = require.context("@/components", true, /V.*\.vue$/);

  const components = context
    .keys()
    .map((key) => ({
      key,
      component: key
        .replace(/^\.\//, "")
        .replace(/\.vue$/, "")
        .split(/\//)
        .pop(),
    }))
    .reduce(
      (components, { key, component }) => ({
        [component]: context(key).default,

        ...components,
      }),
      {}
    );

  return { context, components };
}

const { components } = loadComponents();

for (const component in components) {
  Vue.component(component, components[component]);
}
