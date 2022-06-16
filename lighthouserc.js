module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      url: [
        "https://www.stanleygibbons.com/shop/great-britain/queen-victoria",
        "https://www.stanleygibbons.com/shop/great-britain-stamps",
        "https://www.stanleygibbons.com/",
        "https://sg-website.staging.rawnet.com/shop/great-britain/queen-victoria",
        "https://sg-website.staging.rawnet.com/shop/great-britain-stamps",
        "https://sg-website.staging.rawnet.com/",
      ],
      chromeFlags: ["--incognito"],
    },
    assert: {
      assertions: {
        "categories:performance": ["warning", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "05257ee2-c7f0-4978-ba6d-3597b1492582",
    },
  },
};
