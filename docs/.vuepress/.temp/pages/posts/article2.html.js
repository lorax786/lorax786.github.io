import comp from "/home/dev/development/alimalikdotme/docs/.vuepress/.temp/pages/posts/article2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article2.html\",\"title\":\"Article 2\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1743315291000,\"contributors\":[{\"name\":\"Ali Malik\",\"username\":\"\",\"email\":\"ali.m.malik@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"8068e6d2bf078284c02676905339fbe87e6fce71\",\"time\":1743315291000,\"email\":\"ali.m.malik@gmail.com\",\"author\":\"Ali Malik\",\"message\":\"rebase repo with vuepress\"}]},\"filePathRelative\":\"posts/article2.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
