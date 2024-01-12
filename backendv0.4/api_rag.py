from llama_index import download_loader
import qdrant_client

def ragInitialisation():
    print("Starting RAG initialisation...")
    print("Connecting to vector database...")
    client = qdrant_client.QdrantClient(":memory:")
    print("Done")

    print("Loading Sharepoint Data...")

    SharePointLoader = download_loader("SharePointReader")

    loader = SharePointLoader(client_id = "4fde43c9-c163-469c-9211-9b2823e6c554", client_secret = "4g_8Q~are0OUGHeRkM6HynWKC0gwxEFWGjXiDbsx", tenant_id = "a62b600e-f8f3-4b75-888d-3dbbdb10962c")

    documents = loader.load_data("Team 1","General",recursive = True)

    documents = [
      doc.to_embedchain_format()
      for doc in documents
    ]

    docs = []
    metadata = []
    ids = []

    for d in documents:
        docs.append(d['data']['content'])
        metadata.append(d['data']['meta_data'])
        ids.append(d['doc_id'])


    # Use the new add method
    client.add(
        collection_name="sharepoint_collection",
        documents=docs,
        metadata=metadata,
        ids=ids
    )

    print("Indexed.")
    return client

