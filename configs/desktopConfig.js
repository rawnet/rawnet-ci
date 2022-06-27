const DESKTOP_USERAGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Safari/537.36 Chrome-Lighthouse"; // eslint-disable-line max-len

const userAgents = {
  desktop: DESKTOP_USERAGENT,
};

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        "https://www.stanleygibbons.com/shop/great-britain/queen-victoria",
        // "https://www.stanleygibbons.com/shop/great-britain-stamps",
        // "https://www.stanleygibbons.com/",
        // "https://sg-website.staging.rawnet.com/shop/great-britain/queen-victoria",
        // "https://sg-website.staging.rawnet.com/shop/great-britain-stamps",
        // "https://sg-website.staging.rawnet.com/",
      ],
      settings: {
        chromeFlags: ["--incognito", "--no-sandbox", "--headless"],
        onlyCategories: ["performance"],
        formFactor: "desktop",
        emulatedUserAgent: userAgents.desktop,
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0, // 0 means unset
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
      },
    },
    upload: {
      target: "temporary-public-storage",
      // target: "lhci",
      // serverBaseUrl: "http://localhost:9001",
      // token: "05257ee2-c7f0-4978-ba6d-3597b1492582",
    },
  },
};
