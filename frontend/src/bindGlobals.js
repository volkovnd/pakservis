import Vue from "vue";

const context = require.context("@/components", true, /V[\w]+\.vue$/i);

const components = context
  .keys()
  .map((key) => ({
    key,
    name: key
      .replace(/^\.\//, "")
      .replace(/\.vue$/, "")
      .split(/\//)
      .pop(),
  }))
  .reduce(
    (components, { key, name }) => ({
      [name]: context(key).default,
      ...components,
    }),
    {}
  );

for (const component in components) {
  Vue.component(component, components[component]);
}
