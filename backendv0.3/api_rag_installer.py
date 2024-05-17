from llama_index import download_loader
from llama_index import SimpleDirectoryReader
from llama_index import VectorStoreIndex, SimpleDirectoryReader, Document
from llama_index.vector_stores import QdrantVectorStore
from llama_index.storage.storage_context import StorageContext
from llama_index.service_context import ServiceContext
import qdrant_client
from llama_index.indices.multi_modal.base import MultiModalVectorStoreIndex
from llama_index.text_splitter import SentenceSplitter, TokenTextSplitter
from llama_index.extractors import TitleExtractor
from llama_index import (
    VectorStoreIndex,
    ServiceContext,
    SimpleDirectoryReader,
)
from llama_index.storage.storage_context import StorageContext
from llama_index.vector_stores.qdrant import QdrantVectorStore

import qdrant_client


print("Starting RAG initialisation...")
print("Loading Sharepoint Data...")

SharePointLoader = download_loader("SharePointReader")

loader = SharePointLoader(client_id = "4fde43c9-c163-469c-9211-9b2823e6c554", client_secret = "4g_8Q~are0OUGHeRkM6HynWKC0gwxEFWGjXiDbsx", tenant_id = "a62b600e-f8f3-4b75-888d-3dbbdb10962c")

documents = loader.load_data("Team 1","General",recursive = True)

documents = [
    doc.to_embedchain_format()
     for doc in documents
]
print("Done.")
print("Connecting to vector database...")
client = qdrant_client.QdrantClient(location=":memory:")


service_context=ServiceContext.from_defaults()

text_store = QdrantVectorStore(
    client=client, collection_name="sharepoint_collection"
)

storage_context = StorageContext.from_defaults(vector_store=text_store)




print("Indexing documents...")
index = VectorStoreIndex.from_documents(
    documents, storage_context=storage_context, service_context=service_context
)

print("Done")


def addDocumentToRag():
    return ""

# Create a local Qdrant vector store
#client = qdrant_client.QdrantClient("http://localhost:6333")
