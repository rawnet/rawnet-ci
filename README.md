# [Lighthouse](https://developers.google.com/web/tools/lighthouse/) CI for Local Auditing.
Lighthouse is a tool for auditing web pages for accessibility and performance.

---

## Installation

1. Navigate to your projects/dev/code directory.
1. `git clone https://github.com/rawnet/rawnet-ci.git`
2. `cd rawnet-ci`
3. `nvm use 16+` or lighthouse packages will not audit pages.
4. `npm install`

---

## Usage

1. In your editor open `lighthouserc.js`
2. Set the `numberOfRuns` per url you want to audit.
3. Amend the `url: []` array to contain the pages you want to audit.
4. `npm run lhci:server` starts the Lighthouse CI server.
5. `npm run lhci:wizard` starts the Lighthouse CI wizard.
   
   - Will prompt you with questions regarding the audit.
   - Generates a build token in the CLI (store this somewhere safe).
   - Generates an admin token in the CLI (store this somewhere safe).
   - Replace the current token here with the one just generated: `upload: { token: "###" }`.
     - This is required so that lhci can generate a new project on the local server for different urls passed through in the steps above.

6. If it has not already, navigate to `http://localhost:9001/`.

---

## Todo

- [ ] Add Lighthouse CI Server so we can persist running Lighthouse audits long term.
- [ ] Host externally so our audits don;t affect normal CI-CD.
- [ ] Refactor into an npm package we can import into each of our projects to audit.
- [ ] Fix concurrently script command.
- [ ] Add budgets.json to the config.

---

## Notes

Currently using the `--additive` flag to audit all the pages in the url array rather than using `lhci autorun` as we need to gather the results for desktop and mobile separately.

This means that we need to `lhci collect` as specified in the `npm run lhci:mobile || npm run lhci:desktop` commands which run the `--additive` flags respectively.

I have grouped these commands under `npm run lhci:all` which run both `mobile` and `desktop` audits.

We then need to run `lhci upload` to upload the results to the server or our specified solution.

1. `lhci collect`
2. `lhci assert`
3. `lhci upload`

Instead of

1. `lhci autorun`