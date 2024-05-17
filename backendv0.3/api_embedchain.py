import os
from llama_index import download_loader
from embedchain import App

os.environ["OPENAI_API_KEY"] = "sk-xxx"

SharePointLoader = download_loader("SharePointReader")

loader = SharePointLoader(client_id = "4fde43c9-c163-469c-9211-9b2823e6c554", client_secret = "4g_8Q~are0OUGHeRkM6HynWKC0gwxEFWGjXiDbsx", tenant_id = "a62b600e-f8f3-4b75-888d-3dbbdb10962c")

documents = loader.load_data("Team 1","General",recursive = True)

documents = [
  doc.to_embedchain_format()
  for doc in documents
]

app = App()
app.add("./elon-musk", data_type="directory")
response = app.query("list all files")
print(response)
# Answer: Files are elon-musk-1.txt, elon-musk-2.pdf.
