import os
from qdrant_client import QdrantClient
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain import hub
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_community.vectorstores import Qdrant

os.environ["OPENAI_API_KEY"] = "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"

client = QdrantClient(
    url="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333",
    api_key="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw",
)

embeddings = OpenAIEmbeddings()
qdrant = Qdrant(client, "Sharepoint1", embeddings)

retriever = qdrant.as_retriever()
prompt = hub.pull("rlm/rag-prompt")
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)



rag_chain = (
    {"context": retriever , "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)


print(rag_chain.invoke("You are an expert in marketing, make a detailled plan for a powerpoint presentation on Napoleon."))