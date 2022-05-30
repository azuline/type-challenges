#!/usr/bin/env python

"""
# To test one or more exercises.
$ ./test.py ./questions/00001-path-to-exercise [...]

# To test all.
$ ./test.py ./questions
"""

import sys
import subprocess
from pathlib import Path

paths = [Path(p) for p in sys.argv[1:]]

returncode = 0
for p in paths:
    print(f"Testing {p}:")
    files = p.rglob("*.ts")
    filenames = [str(f) for f in files]

    res = subprocess.run(["yarn", "tsc", *filenames])
    if res.returncode != 0:
        returncode = res.returncode

    res = subprocess.run(["git", "clean", "-d", "--force", str(p)])

sys.exit(returncode)
