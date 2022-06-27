const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;
const MOTOG4_USERAGENT =
  "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse"; // eslint-disable-line max-len

const userAgents = {
  mobile: MOTOG4_USERAGENT,
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
        formFactor: "mobile",
        emulatedUserAgent: userAgents.mobile,
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2.625,
          disabled: false,
        },
        throttling: {
          rttMs: 150,
          throughputKbps: 1.6 * 1024,
          requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
          downloadThroughputKbps:
            1.6 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
          uploadThroughputKbps: 750 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
          cpuSlowdownMultiplier: 4,
        },
      },
      upload: {
        target: "temporary-public-storage",
        // target: "lhci",
        // serverBaseUrl: "http://localhost:9001",
        // token: "05257ee2-c7f0-4978-ba6d-3597b1492582",
      },
    },
  },
};
