import requests

url = "https://www.thunderclient.com/welcome"

headers = {
    'content-type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text)