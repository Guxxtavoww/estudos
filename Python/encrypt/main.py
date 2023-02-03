#! /usr/bin/python

import os
from cryptography.fernet import Fernet

files = []

for file in os.listdir():
    if file == 'main.py' or file == 'thekey.key':
        continue
    if os.path.isfile():
        files.append(file)

newKey = Fernet.generate_key()

print(files, newKey)