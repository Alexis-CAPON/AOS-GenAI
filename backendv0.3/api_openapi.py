import openai
import os

os.environ["OPENAI_API_KEY"] = "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"

def streamingConversation(userInput, instruction=None, previousContext=[], streaming=False, userAnswer=False):

    if not userInput or userInput=="":
        return -1

    if instruction:
        streamingMessage = [
            {"role": "system", "content": instruction},
            {"role": "user", "content": userInput}
        ]
    else:
        if previousContext != []:
            streamingMessage = previousContext.copy()
            streamingMessage.append(
                {"role": "user", "content": userInput}
            )
        else:
            streamingMessage = [{"role": "system", "content": userInput}]


    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        messages=streamingMessage,
        stream=streaming
    )

    streamingMessage.append({"role": "assistant", "content": response.choice[0]["message"]["content"]})

    if userAnswer:
        return response
    else:
        return streamingMessage



def extractUserKeywords(userInput, previousContext = [], userRaise=False):
    #Context creation
    extractedResponse = {
        "extracted": {
            "keywords":[],
            "entities":[],
            "intention":[],
            "context":"",
            "output":""
        },
        "otherQuestion": ""
    }

    if previousContext == [] or previousContext == None:
        if userRaise:
            aiInstruction = "You are an AI  \n" \
                + "\n" \
                + "Extract in json format keywords, entites,... based on all user input to really catch the user need\n" \
                + "\n" \
                + "Put intention in infitive verb form" \
                + "\n" \
                + "Provide new question if you think it's pertinent in the field 'otherQuestion'" \
                + "If you think the user want the creation of a specific output not just text, change the output keyword in json depending on what the user want. It can be 'powerpoint', 'word' or 'excel', nothing else, leave the field with 'text' if the user don't precise anything or want a text answer"

        else:
            aiInstruction = "You are a ... \n" \
                + "\n" \
                + "Extract in json format keywords, entites,... based on all user input to really catch the user need\n" \
                + "\n" \
                + "Put intention in infinitive verb form" \
                + "If you think the user want the creation of a specific output not just text, change the output keyword in json depending on what the user want. It can be 'powerpoint', 'word' or 'excel', nothing else, leave the field with 'text' if the user don't precise anything or want a text answer"

        streamingMessage = streamingConversation(userInput,aiInstruction,userAnswer=False)
    else:
        streamingMessage = streamingConversation(userInput,None,previousContext, userAnswer=False)

    # Transform streamingMessage last answer in extractedResponse
    #extractedResponse = streamingMessage[-1]['content']




    return extractedResponse
