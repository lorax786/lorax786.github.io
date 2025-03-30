import { CodeTabs } from "/home/dev/development/alimalikdotme/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/dev/development/alimalikdotme/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/dev/development/alimalikdotme/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
