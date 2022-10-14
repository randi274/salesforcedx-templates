/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const shell = require('shelljs');

interface Props {
  tag: string; // Next tag e.g. v1.12.3
  version: string; // Next version e.g. 1.12.3
}

export function preCommit(props: Props) {
  shell.exec(`yarn`);
  shell.exec(
    `yarn lerna version ${props.version} --force-publish --no-git-tag-version --exact --yes`
  );
  shell.exec(`yarn install --ignore-scripts --package-lock-only --no-audit`);
  shell.exec(`git add .`);
  shell.exec(
    `git commit --allow-empty -m "chore: updated version ${props.version} [ci skip]"`
  );
}
