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
        "categories:performance": ["warning"],
        "categories:accessibility": ["warning"],
        "categories:best-practices": ["warning"],
        "categories:seo": ["warning"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
