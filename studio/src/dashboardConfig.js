export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63acc7f30caebf15011b4b25",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6basfzjj",
                  apiId: "5d4f9fe2-22bc-4dc6-baab-d59f22c4b205",
                },
                {
                  buildHookId: "63acc7f45ad13e16cf6e06f9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-nyjfinin",
                  apiId: "fbc4afce-185b-4657-a6d5-19e0d709f366",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NormalAndrew/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-nyjfinin.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
