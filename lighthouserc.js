module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      url: [
        "https://www.stanleygibbons.com/",
        "https://sg-website.staging.rawnet.com/",
      ],
    },
    assert: {
      assertions: {
        // "categories:performance": ["error", { minScore: 0.95 }],
        // "categories:accessibility": ["error", { minScore: 0.95 }],
        // "categories:best-practices": ["error", { minScore: 0.95 }],
        // "categories:seo": ["error", { minScore: 0.95 }],
        "categories:performance": ["error"],
        "categories:accessibility": ["error"],
        "categories:best-practices": ["error"],
        "categories:seo": ["error"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
