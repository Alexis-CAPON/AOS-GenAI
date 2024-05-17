import os
from qdrant_client import QdrantClient
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain import hub
from langchain_community.vectorstores import Qdrant

os.environ["OPENAI_API_KEY"] = "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"

client = QdrantClient(
    url="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw",
)

embeddings = OpenAIEmbeddings(model="text-embedding-ada-002")
qdrant = Qdrant(client, "Sharepoint1", embeddings)

query = "Explain what is agile manifesto"
found_docs = qdrant.similarity_search_with_score(query)

document, score = found_docs[0]
print(document.page_content)
print(f"\nScore: {score}")