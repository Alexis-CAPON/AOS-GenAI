from api_redis import *
from main import *
from flask_cors import CORS
from flask import Flask, request, jsonify
import json
import time
import uuid
from api_rag import *

app = Flask(__name__)
CORS(app) # CHANGE THIS IN DEPLOYED SERVER
# CORS(app, resources={r"/*": {"origins": ["https://yourfrontend.com", "http://anotheralloweddomain.com"]}})


# PostgreSQL configuration
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/chat_db'
#db = SQLAlchemy(app)


#class Conversation(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    ConversationID = db.Column(db.String(255), nullable=False)
#    UserID = db.Column(db.String(255), nullable=False)
#    conversationContent = db.Column(db.JSON)
#    extractedResponse = db.Column(db.JSON)
#    last_modified = db.Column(db.DateTime, default=datetime.utcnow)


client = ragInitialisation()

@app.route('/')
def index():
    return 'Chat Backend is Up and Running!'


@app.route('/conversations/<user_id>', methods=['GET'])
def get_conversations(user_id):
    conversations = get_user_conversations(user_id)
    if not conversations:
        return jsonify(error="No conversations found"), 404
    return jsonify(conversations=conversations)

@app.route('/<user_id>/<conversation_id>', methods=['GET'])
def get_a_conversation(user_id, conversation_id):
    conversation = get_conversation(user_id, conversation_id)
    if not conversation:
        return jsonify(error="No conversations found"), 404
    return jsonify(conversation=conversation)

@app.route('/get-answer', methods=['POST'])
def get_answer():
    user_id = request.json.get('userId')
    user_input = request.json.get('message')
    conversation_id = request.json.get('conversationID')

    if not user_id or not user_input or not conversation_id:
        return jsonify(error="Both UserID and initial message and conversationID are required"), 400

    # Call main api
    liveConversation, retrievedDocuments, pipeline, extractedResponse, conversation_id = chatSystem(user_id, user_input, conversation_id)


    #Store conversation in redis
    update_conversation_to_redis(conversation_id, user_id, liveConversation, extractedResponse)

    if pipeline =="powerpoint":
        return ""
    if pipeline =="excel":
        return ""
    if pipeline =="word":
        return ""

    return jsonify(answer=liveConversation)

@app.route('/create-conversation', methods=['POST'])
def create_conversation():
    user_id = request.json.get('userId')
    user_input = request.json.get('message')

    if not user_id or not user_input:
        return jsonify(error="Both UserID and initial message are required"), 400



    # Call main api
    liveConversation, retrievedDocuments, pipeline, extractedResponse, conversationid = chatSystem(user_id, user_input)


    #Store conversation in redis
    update_conversation_to_redis(conversationid, user_id, liveConversation, extractedResponse)

    if pipeline =="powerpoint":
        return ""
    if pipeline =="excel":
        return ""
    if pipeline =="word":
        return ""

    conversationUpdated = {
        "conversation": {
            "conversationID" : conversationid,
            "conversationContent": liveConversation,
            "extractedResponse": extractedResponse,
        },
        "last_modified": time.time()  # Set the timestamp
    }

    return (jsonify(answer=conversationUpdated))

if __name__ == '__main__':
    app.run()
