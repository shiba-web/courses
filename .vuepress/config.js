module.exports = {
  base: "/courses/",
  title: "市八 WEB",
  description: "上海市第八中学 WEB 社课程站",
  themeConfig: {
    search: true,
    repo: "https://github.com/shiba-web/courses",
    docsBranch: "master",
    repoLabel: "GitHub",
    editLinks: true,
    lastUpdated: "最后更新",
    sidebar: [
      {
        title: "Day 1",
        children: [
          "/day01/getting-started-with-html",
          "/day01/basic-html-structure",
        ],
      },
    ],
  },
  plugins: {
    redirect: {
      redirectors: [
        {
          alternative: ["/day01/getting-started-with-html"],
        },
      ],
    },
  },
};
