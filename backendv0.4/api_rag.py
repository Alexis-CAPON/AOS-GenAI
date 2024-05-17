from llama_index import download_loader
import qdrant_client

def ragInitialisation():
    print("Starting RAG initialisation...")
    print("Connecting to vector database...")
    client = qdrant_client.QdrantClient(":memory:")
    print("Done")

    print("Loading Sharepoint Data...")

    SharePointLoader = download_loader("SharePointReader")

    loader = SharePointLoader(client_id = "adf465c0-8843-4cce-81cf-dff60b9d2c1b", client_secret = "TDK8Q~yyBWAjQh1_F6qW3dX66kzECjDBwQiEXcMB", tenant_id = "a62b600e-f8f3-4b75-888d-3dbbdb10962c")

    documents = loader.load_data("Team 1","Test",recursive = True)

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

