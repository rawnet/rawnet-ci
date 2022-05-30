module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      startServerCommand: "npm start",
      url: ["https://stanleygibbons.com/"],
      settings: {
        onlyCategories: ["performance"],
        chromeFlags: "--no-sandbox",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": [
          "warn",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
