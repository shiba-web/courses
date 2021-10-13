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
        title: "HTML",
        children: ["/html/getting-started", "/html/basic-structure"],
      },
    ],
  },
  plugins: {
    redirect: {
      redirectors: [
        {
          alternative: ["/html/getting-started"],
        },
      ],
    },
  },
};
