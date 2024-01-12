
##ARE STOCKED IN REDIS, ConversationID, UserID, conversationContent : [{"role":"user","content":"message"}, {"role":"user","content":"message"}, ...]
## and ALSO last extractedResponse corresponding to the last conversation
import time
import json
from flask import jsonify
from rejson import Client

# Redis configuration
redis_host = "localhost"
redis_port = 6379
redis_password = ""
r = Client(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)


def get_user_conversations(user_id):
    # Pattern to match all conversations of a user
    print(user_id)
    pattern = f"user_id:{user_id}:conversation_id:*"
    all_keys = r.keys(pattern)

    conversations = [r.jsonget(keys) for keys in all_keys]

    # Sort by last_modified timestamp in descending order
    sorted_conversations = sorted(conversations, key=lambda x: x['last_modified'], reverse=True)

    # Return the sorted conversations or just their IDs, depending on your needs
    return sorted_conversations


def get_conversation(user_id, conversation_id):
    # Create Redis key
    redis_key = f"user_id:{user_id}:conversation_id:{conversation_id}"

    # Fetch from Redis
    conversation = r.jsonget(redis_key)
    print("get_conversation: "+conversation_id+" - Conversation successfully retrieved")

    # If not in Redis, fetch from PostgreSQL
    #if not conversation:
    #    conversation_db = Conversation.query.filter_by(ConversationID=conversation_id).first()
    #    if conversation_db:
    #        conversation = {
    #            "ConversationID": conversation_db.ConversationID,
    #            "UserID": conversation_db.UserID,
    #            "conversationContent": conversation_db.conversationContent,
    #            "extractedResponse": conversation_db.extractedResponse
    #        }
    #        # Store this in Redis for subsequent faster fetches
    #        r.set(conversation_id, json.dumps(conversation))
    #    else:
    #        return jsonify({"status": "error", "message": "Conversation not found"}), 404

    return conversation



def update_conversation_to_redis(conversation_id, user_id, conversationContent, extractedResponse):

    # Create Redis key
    redis_key = f"user_id:{user_id}:conversation_id:{conversation_id}"

    conversationUpdated = {
        "conversation": {
            "conversationID" : conversation_id,
            "conversationContent": conversationContent,
            "extractedResponse": extractedResponse,
        },
        "last_modified": time.time()  # Set the timestamp
    }

    print("update_conversation_to_redis: "+conversation_id+" - Conversation successfully updated")

    # Update Redis
    r.jsonset(redis_key, '$' ,conversationUpdated)



def deleteConversation(conversationID):
    #Delete conversation in Redis and cash
    return ""


def autoCache(userID):
    #Retrieve conversation from user cash and push them to redis every a certain
    #amount of time
    return ""
