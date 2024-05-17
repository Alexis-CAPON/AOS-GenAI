import os
from langchain_community.document_loaders.sharepoint import SharePointLoader


os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = ""
os.environ["OPENAI_API_KEY"] = "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"
os.environ['O365_CLIENT_ID'] = "904540ca-ba45-4eff-970a-3012ee43c3a4"
os.environ['O365_CLIENT_SECRET'] = "j-p8Q~DmmG1JLxOqyMRoA6brR8ouMZVREgYIic4f"


from langchain_community.document_loaders import WebBaseLoader
import bs4


from langchain_community.document_loaders.sharepoint import SharePointLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter


loader = SharePointLoader(document_library_id="b!BTt35M-Mj0WZtJcWAWjAysIJHQ6e74ZClRooFy92E1i8kMPE91AfRKf_1YxQua_1")
docs = loader.load()



#bs_strainer = bs4.SoupStrainer(class_=("post-content", "post-title", "post-header"))
#loader = WebBaseLoader(
#   web_paths=("https://fr.wikipedia.org/wiki/Napol%C3%A9on_Ier",),
#)
#docs = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(docs)
print(splits)

from langchain_community.vectorstores import Qdrant
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import SQLRecordManager, index
from langchain.schema import Document
from qdrant_client import QdrantClient


client = QdrantClient(
    url="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw",
)

embeddings = OpenAIEmbeddings()

collection_name = "Sharepoint1"


from qdrant_client.http import models

"""
client.create_collection(
    collection_name=collection_name,
    vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),
)
"""

qdrant = Qdrant(client, collection_name, embeddings)
"""
qdrant = Qdrant.__init__(
    embeddings=embeddings,
    url=url,
    prefer_grpc=True,
    api_key=api_key,
    collection_name=collection_name,
)
"""

namespace = f"qdrant/{collection_name}"
record_manager = SQLRecordManager(
    namespace, db_url="sqlite:///record_manager_cache.sql"
)
record_manager.create_schema()

index(docs, record_manager, qdrant, cleanup="full", source_id_key="source")