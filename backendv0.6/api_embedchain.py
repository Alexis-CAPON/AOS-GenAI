import os
from llama_index import download_loader
from embedchain import App
import tempfile
import requests

print("Starting RAG initialisation...")
print("Connecting to vector database...")
"""
os.environ["OPENAI_API_KEY"] = "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"
os.environ["QDRANT_URL"] = "https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333"
os.environ["QDRANT_API_KEY"] = "b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw"


from office365.runtime.auth.client_credential import ClientCredential
from office365.sharepoint.client_context import ClientContext

def get_sharepoint_context_using_app():
 
    # Get sharepoint credentials
    sharepoint_url = 'https://alexiscapon.sharepoint.com'

    # Initialize the client credentials
    client_credentials = ClientCredential("4fde43c9-c163-469c-9211-9b2823e6c554", "c2g8Q~I03P.NGU54mDUYsM1YifequgrQXGAiTbUH")

    # create client context object
    ctx = ClientContext(sharepoint_url).with_credentials(client_credentials)

    return ctx

ctx = get_sharepoint_context_using_app()

from office365.runtime.auth.client_credential import ClientCredential
from office365.sharepoint.client_context import ClientContext

def get_files(file_url):
    try:
        
        # file_url is the sharepoint url from which you need the list of files
        list_source = ctx.web.get_folder_by_server_relative_url(file_url)
        files = list_source.files
        ctx.load(files)
        ctx.execute_query()

        return files

    except Exception as e:
        print(e)

files = get_files("https://graph.microsoft.com/v1.0/drives/b!-7yRouaVtkaB6-lxHk5aKeJQdPkEjQFGiwVfAthzoFUOBvYfD3BUTqbaJEwIdBZV")

print("Done")

"""
print("Loading Sharepoint Data...")

SharePointLoader = download_loader("SharePointReader")

loader = SharePointLoader(client_id = "4fde43c9-c163-469c-9211-9b2823e6c554", client_secret = "c2g8Q~I03P.NGU54mDUYsM1YifequgrQXGAiTbUH", tenant_id = "a62b600e-f8f3-4b75-888d-3dbbdb10962c")

documents = loader.load_data("Team1","Test",recursive = True)
print(len(documents))
print(documents)
documents = [docs.to_langchain_format() for docs in documents]

print(len(documents))
print("Loading Done")


"""
app = App()

print("Connecting qdrant")

app = App.from_config(config_path="config.yaml")

for k in documents:
    app.add(k)
"""