from api_openapi import *
from api_redis import *
from api_elastic import getDocuments
from text_pipeline import textPipeline
from powerpoint_pipeline import powerpointPipeline
import uuid


def chatRequest(userID, userInput, conversationID=-1, conversation={}):
    #When user start a new conversation in the app, it create a new conversation that will
    #be stocked in redis with an id, and the conversation and the userID (mail address)

    #Make some transfo?
    transformedUserInput = userInput

    extractedResponse = {}

    if conversationID ==-1:
        # Generate a unique conversation ID
        conversationID = str(uuid.uuid4())
        extractedResponse = extractUserKeywords(transformedUserInput)
    else:
        extractedResponse = extractUserKeywords(transformedUserInput, conversation['conversation']['conversationContent'], userRaise=False)


    return extractedResponse, conversationID

def chatSystem(userID, userInput, conversationID=-1, pipeline=-1):
    #Called initially from front, routed from server pull request and started when ready
    #need return of the response to be showns
    conversation = {}
    if conversationID==-1:
        liveConversation = []
    else:
        conversation = get_conversation(userID, conversationID)
        liveConversation = conversation['conversation']['conversationContent']

    extractedResponse, conversationID = chatRequest(userID, userInput, conversationID, conversation)

    liveConversation.append({"role": "user", "content": userInput})

    if extractedResponse["otherQuestion"] != "":
        #The last extractedResponse contain another question so we return the question to user
        liveConversation.append({"role": "assistant", "content": extractedResponse["otherQuestion"] })
        return liveConversation,[],[],[],conversationID


    if pipeline != -1:
        if pipeline == "powerpoint":
            extractedResponse["extracted"]["output"] = "powerpoint"
        if pipeline == "excel":
            extractedResponse["extracted"]["output"] = "excel"
        if pipeline == "word":
            extractedResponse["extracted"]["output"] = "word"

    textAnswer = ""
    #Call pipeline ouput
    match extractedResponse["extracted"]["output"]:
        case "powerpoint":
            #call powerpoint function
            liveConversation = powerpointPipeline(liveConversation)
            pipeline = "powerpoint"
        case "excel":
            #call powerpoint function
            pipeline = "excel"
        case "word":
            #call word function
            pipeline = "word"

        case default:
            #default intention (text)
            liveConversation, retrievedDocuments = textPipeline(liveConversation)
            pipeline = "text"
            extractedResponse["extracted"]["output"] = "text"


    return liveConversation, retrievedDocuments, pipeline, extractedResponse, conversationID
