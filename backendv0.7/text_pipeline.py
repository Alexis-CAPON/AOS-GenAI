from api_openapi import *

from embedchain import App
import os

os.environ["OPENAI_API_KEY"] = "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"
os.environ["QDRANT_API_KEY"]="b5LR-OJ6Vz7vt0KZhYS4_kEQxTlrg9_wEIj82MyLOnkI_lxDBAXQdw"
os.environ["QDRANT_URL"]="https://20a30b48-c659-48b3-90da-468bccf0777f.us-east4-0.gcp.cloud.qdrant.io:6333"


app = App.from_config(config_path="config.yaml")

def textPipeline(liveConversation):

    source = []
    
    
    #aiInstruction = f"""
    #You are an AI assistant. Your objectif is to answer people questions.
    #To help you to achieve this, you will be provided documents, use them if they are pertinent for the question.
    #You will be provided the conversation you had with the user if there is one. Answer to his last question.

    #Conversation:
    #{str(liveConversation)}

    #Answer:
    #"""
    
    #response = streamingConversation(aiInstruction, userAnswer=True)
    
    aiInstruction = f"""
    You are an AI assistant. Your objectif is to answer people questions.
    You will be provided the conversation you had with the user if there is one. Answer to his last question.
    Conversation:
    {str(liveConversation)}
    
    """
    
    response, sources = app.query(aiInstruction, citations=True)

    #liveConversation.append({"role": "assistant", "content": response.choices[0].message.content})
    liveConversation.append({"role": "assistant", "content": response})

    return liveConversation, sources

