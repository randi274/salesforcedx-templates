/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const shell = require('shelljs');

exports.preCommit = (props) => {
  if (props && props.version) {
    shell.exec(`yarn`);
    shell.exec(
      `yarn lerna version ${props.version} --force-publish --no-git-tag-version --exact --yes`
    );
    shell.exec(`yarn install --ignore-scripts --package-lock-only --no-audit`);
    shell.exec(`git add .`);
  }
}
