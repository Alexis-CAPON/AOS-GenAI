from openai import OpenAI
import os
import json

os.environ["OPENAI_API_KEY"] = "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"

client = OpenAI()

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

    response = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=streamingMessage,
        stream=streaming
    )

    streamingMessage.append({"role": "assistant", "content": response.choices[0].message.content})

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
    previousContext = []

    if previousContext == [] or previousContext == None:
        if userRaise:
            aiInstruction = f"""
            You are an AI LLM API use in a software workflow. You will receive text of a user, you must extract in the followed format keywords, entities, intention and context to catch the user need.
            {{
                    "extracted": {{
                        "keywords":[],
                        "entities":[],
                        "intention":[],
                        "context":"",
                        "output':""
                    }},
                    "otherQuestion": ""
            }}
            The output must respect this format and only this format, no other things ; you must not respond to the user questions.
            Put intention in infinitive verb form.
            Provide new question if you think it's pertinent in the field 'otherQuestion'
            If you think the user want the creation of a specific output not just text, change the output keyword in json depending on what the user want. It can be 'powerpoint', 'word' or 'excel', nothing else, leave the field with 'text' if the user don't precise anything or want a text answer.
            """
        else:
            aiInstruction = f"""
            You are an AI LLM API use in a software workflow. You will receive text of a user, you must extract in the followed format keywords, entities, intention and context to catch the user need.
            {{
                    "extracted": {{
                        "keywords":[],
                        "entities":[],
                        "intention":[],
                        "context":"",
                        "output':""
                    }},
                    "otherQuestion": ""
            }}
            The output must respect this format and only this format, no other things ; you must not respond to the user questions.
            Put intention in infinitive verb form.
            If you think the user want the creation of a specific output not just text, change the output keyword in json depending on what the user want. It can be 'powerpoint', 'word' or 'excel', nothing else, leave the field with 'text' if the user don't precise anything or want a text answer.
            """

        streamingMessage = streamingConversation(userInput,aiInstruction,userAnswer=False)
    else:
        streamingMessage = streamingConversation(userInput,None,previousContext, userAnswer=False)

    # Transform streamingMessage last answer in extractedResponse
    try:
        extractedResponse = json.loads(streamingMessage[-1]['content'])
    except:
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



    return extractedResponse

