//{fact rule=insecure-temporary-file@v1.0 defects=0}

import fs from 'fs';
import tmp from 'tmp';

const file = tmp.fileSync().name;
fs.writeFileSync(file, "content");

//{/fact}