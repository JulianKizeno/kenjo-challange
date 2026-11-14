# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 12, "moderate": 35, "high": 71, "critical": 17, "total": 135}. After remediation: {"info": 0, "low": 14, "moderate": 34, "high": 37, "critical": 0, "total": 85}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "kenjo-challange",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `@angular-devkit/build-angular`: high; requires dependency migration. 
- `@angular/animations`: moderate; requires dependency migration. 
- `@angular/cdk`: moderate; requires dependency migration. 
- `@angular/cli`: high; requires dependency migration. 
- `@angular/common`: high; requires dependency migration. https://github.com/advisories/GHSA-39pv-4j6c-2g6v https://github.com/advisories/GHSA-48r7-hpm6-gfxm https://github.com/advisories/GHSA-58c5-g7wp-6w37 https://github.com/advisories/GHSA-jfgx-762w-99vr https://github.com/advisories/GHSA-jhpw-976m-542j https://github.com/advisories/GHSA-p297-fm68-3q8c https://github.com/advisories/GHSA-p3vc-36g9-x9gr https://github.com/advisories/GHSA-q6f4-qqrg-jv6x
- `@angular/compiler`: high; requires dependency migration. https://github.com/advisories/GHSA-58w9-8g37-x9v5 https://github.com/advisories/GHSA-f3m7-gqxr-g87x https://github.com/advisories/GHSA-hh8m-fm6v-7cvg https://github.com/advisories/GHSA-jj27-h5hq-8x99 https://github.com/advisories/GHSA-jrmj-c5cx-3cw6 https://github.com/advisories/GHSA-v4hv-rgfq-gp49
- `@angular/compiler-cli`: moderate; requires dependency migration. 
- `@angular/core`: high; requires dependency migration. https://github.com/advisories/GHSA-692r-grfm-v8x7 https://github.com/advisories/GHSA-c75v-2vq8-878f https://github.com/advisories/GHSA-f3m7-gqxr-g87x https://github.com/advisories/GHSA-hh8m-fm6v-7cvg https://github.com/advisories/GHSA-jj27-h5hq-8x99 https://github.com/advisories/GHSA-jrmj-c5cx-3cw6 https://github.com/advisories/GHSA-prjf-86w9-mfqv https://github.com/advisories/GHSA-rgjc-h3x7-9mwg
- `@angular/forms`: moderate; requires dependency migration. 
- `@angular/material`: moderate; requires dependency migration. 
- `@angular/platform-browser`: moderate; requires dependency migration. 
- `@angular/platform-browser-dynamic`: moderate; requires dependency migration. 
- `@angular/router`: high; requires dependency migration. https://github.com/advisories/GHSA-62vg-58rm-qff7 https://github.com/advisories/GHSA-ff3f-86qr-9cv3
- `codelyzer`: moderate; requires dependency migration. 
- `karma`: moderate; review transitive dependency constraints. https://github.com/advisories/GHSA-7x7c-qm48-pq9c https://github.com/advisories/GHSA-rc3x-jf5g-xvc5
- `protractor`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.
