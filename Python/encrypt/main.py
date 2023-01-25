import os

files = []

for file in os.listdir():
    if file == 'main.py' or file == 'thekey.key':
        continue
    if os.path.isfile():
        files.append(file)  


print(files)