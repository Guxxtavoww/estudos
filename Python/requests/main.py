import requests

url = "https://api.dev.pdahub.com.br/api/Common/TipoEstruturaEndereco?codigoCliente=11"

headers = {
	'Authorization': 'Bearer TOKEN',
    'content-type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text)