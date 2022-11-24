import requests

url = "api_url"

headers = {
	'Authorization': 'Bearer TOKEN',
    'content-type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text)