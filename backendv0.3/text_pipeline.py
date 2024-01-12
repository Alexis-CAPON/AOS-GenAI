from api_openapi import *
from server import *



def textPipeline(liveConversation):

    results = client.query(
        collection_name="sharepoint_collection",
        query_text=liveConversation,
        limit=3,
    )

    retrievedDocuments = results
    context = "\n".join(r.document for r in results)

    aiInstruction = f"""
    You are an AI assistant. Your objectif is to answer people questions.
    To help you to achieve this, you will be provided documents, use them if they are pertinent for the question.
    If you don't have the solution, return this text to the user : "I'm sorry, I can't find your solution, please refer to your proximity manager."
    You will be provided the conversation you had with the user if there is one. Answer to his last question.

    Documents:
    {context.strip()}

    Conversation:
    {str(liveConversation)}

    Answer:
    """
    
    response = streamingConversation(aiInstruction, userAnswer=True)

    liveConversation.append({"role": "assistant", "content": response.choice[0]["message"]["content"]})


    return liveConversation, retrievedDocuments
