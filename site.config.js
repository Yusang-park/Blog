const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Yusang Park",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer & Entrepreneur",
    bio: "I develop everything using React.",
    email: "dfhilder@gmail.com",
    linkedin: "yusang-park",
    github: "yusang-park",
    instagram: "",
  },
  projects: [
    {
      name: `Next Sound`,
      href: "https://next-sound-fe-web.vercel.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "코딩으로 세계정복",
    description: "Software Engineer & Entrepreneur의 블로그",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://yusang.blog",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "21ec6d8302dd80fea495cccbe154c2e8",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: "G-JK45W3SHJZ",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: "JjG7cpZ75zemCQujFPA9_6eF4DVkm3srlBr5MIe2svo",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
