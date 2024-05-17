from elasticsearch import Elasticsearch
import json

chatCBC = json.load(open('config.json'))

def getElasticConnected():
    client = Elasticsearch(
      "https://9633137e92894235b31ae5bd0492d96e.eastus2.azure.elastic-cloud.com:443",
      api_key=chatCBC["elasticToken"]
    )

    if chatCBC["debugMode"]:
        print("Connected to Elasticsearch")

    return client


#Rajouter dans la pipeline des documents, l'identité numérique de document pour éviter la redondance

def getDocuments(extractedKeys = {}):
    retrievedDocuments = []
    return retrievedDocuments

def indexNewLocalFiles(pathMainFolder):
    return ""

def indexNewSharepointFiles():
    return ""


def ElasticRequest():

    documents = [
      { "index": { "_index": "search-poc1", "_id": "9780553351927"}},
      {"name": "Snow Crash", "author": "Neal Stephenson", "release_date": "1992-06-01", "page_count": 470, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
      { "index": { "_index": "search-poc1", "_id": "9780441017225"}},
      {"name": "Revelation Space", "author": "Alastair Reynolds", "release_date": "2000-03-15", "page_count": 585, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
      { "index": { "_index": "search-poc1", "_id": "9780451524935"}},
      {"name": "1984", "author": "George Orwell", "release_date": "1985-06-01", "page_count": 328, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
      { "index": { "_index": "search-poc1", "_id": "9781451673319"}},
      {"name": "Fahrenheit 451", "author": "Ray Bradbury", "release_date": "1953-10-15", "page_count": 227, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
      { "index": { "_index": "search-poc1", "_id": "9780060850524"}},
      {"name": "Brave New World", "author": "Aldous Huxley", "release_date": "1932-06-01", "page_count": 268, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
      { "index": { "_index": "search-poc1", "_id": "9780385490818"}},
      {"name": "The Handmaid's Tale", "author": "Margaret Atwood", "release_date": "1985-06-01", "page_count": 311, "_extract_binary_content": True, "_reduce_whitespace": True, "_run_ml_inference": False},
    ]

    client.bulk(documents, pipeline="ent-search-generic-ingestion")
