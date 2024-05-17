import os

os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = ""
os.environ["OPENAI_API_KEY"] = "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"

from langchain_community.document_loaders import WebBaseLoader
from langchain_community.document_loaders import DirectoryLoader
import bs4


from langchain.text_splitter import RecursiveCharacterTextSplitter

from langchain_community.vectorstores import Qdrant
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import SQLRecordManager, index

from qdrant_client import QdrantClient


#Load the documents from the web
"""
bs_strainer = bs4.SoupStrainer(class_=("post-content", "post-title", "post-header"))
loader = WebBaseLoader(
   web_paths=("https://fr.wikipedia.org/wiki/Napol%C3%A9on_Ier",),
)
docs = loader.load()
"""

#Load temporary files in RAM
current_directory = os.getcwd()
#Go to temp folder
os.chdir('./temp/')
loader = DirectoryLoader('./', show_progress=True, silent_errors=True)
docs = loader.load()
os.chdir(current_directory)

#Remove loaded files
for k in docs:
    #os.remove("./temp/"+k.metadata['source'])
    print(k.metadata['source']+" removed")


#Split the documents into chunks
## NEED TO BE IMPROVED cf. langchain to go futher
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200, add_start_index=True)
all_splits = text_splitter.split_documents(docs)


#Use OpenAIEmbeddings
embeddings = OpenAIEmbeddings(model="text-embedding-ada-002")



client = QdrantClient(
    url="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw",
)


collection_name = "Sharepoint1"

print("Load record manager")
namespace = f"qdrant/{collection_name}"
record_manager = SQLRecordManager(
    namespace, db_url="sqlite:///record_manager_cache.sql"
)

#Check if collection exists

if collection_name in str(client.get_collections()):
    print("Collection already exists")
else:
    print("Creating collection")
    from qdrant_client.http import models


    client.create_collection(
        collection_name=collection_name,
        vectors_config=models.VectorParams(
        size=1536,
        distance=models.Distance.COSINE
        )
    )
    
    print("Creating schema")
    record_manager.create_schema()

#Invoke Qdrant
qdrant = Qdrant(client, collection_name, embeddings)

# Index new splits
index(all_splits, record_manager, qdrant, cleanup="full", source_id_key="source")
print("Indexing done")

"""

qdrant = Qdrant.from_documents(
    documents=all_splits,
    embedding=embeddings,
    url="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333",
    prefer_grpc=True,
    api_key="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw",
    collection_name=collection_name,
)
"""

#index(docs, record_manager, embeddings=embeddings, cleanup="full", source_id_key="source")
