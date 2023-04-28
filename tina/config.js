import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "master",
  clientId: "328afd58-eebb-4e2b-a012-45b2b84a9e1b", // Get this from tina.io
  token: "92557c945549ea31e188a0cf01a91c356e6cbaf8", // Get this from tina.io

  build: {
    outputFolder: "pages/admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
        // router: ({ document }) => `/posts/${document._sys.slug}`,
        },
      },
    ],
  },
});
