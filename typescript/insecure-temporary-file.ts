//{fact rule=insecure-temporary-file@v1.0 defects=1}

import fs from 'fs';
import os from 'os';
import path from 'path';

const file = path.join(os.tmpdir(), "test-" + (new Date()).getTime() + ".txt");
fs.writeFileSync(file, "content");

//{/fact}