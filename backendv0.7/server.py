from api_redis import *
from main import *
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import json
import time
import uuid
from api_rag import *

app = Flask(__name__)
CORS(app) # CHANGE THIS IN DEPLOYED SERVER
#CORS(app, resources={r"/*": {"origins": ["https://yourfrontend.com", "http://anotheralloweddomain.com"]}})

limiter = Limiter(
    get_remote_address,
    app=app
)

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



@app.route('/')
def index():
    return 'Chat Backend is Up and Running!'


@app.route('/conversations/<user_id>', methods=['GET'])
def get_conversations(user_id):
    conversations = get_user_conversations(user_id)
    print("Get "+user_id+ " conversations")
    if not conversations:
        return jsonify(error="No conversations found"), 404
    return jsonify(conversations=conversations)

@app.route('/<user_id>/<conversation_id>', methods=['GET'])
@limiter.limit("1/second", override_defaults=False)
def get_a_conversation(user_id, conversation_id):
    conversation = get_conversation(user_id, conversation_id)
    print("Get conversation")
    if not conversation:
        return jsonify(error="No conversations found"), 404
    return jsonify(conversation=conversation)

@app.route('/get-answer', methods=['POST'])
@limiter.limit("1/second", override_defaults=False)
def get_answer():
    user_id = request.json.get('userId')
    user_input = request.json.get('message')
    conversation_id = request.json.get('conversationID')

    if not user_id or not user_input or not conversation_id:
        return jsonify(error="Both UserID and initial message and conversationID are required"), 400

    # Call main api
    liveConversation, retrievedDocuments, pipeline, extractedResponse, conversation_id = chatSystem(user_id, user_input, conversation_id, -1, ragClient)


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
@limiter.limit("1/second", override_defaults=False)
def create_conversation():
    user_id = request.json.get('userId')
    user_input = request.json.get('message')

    if not user_id or not user_input:
        return jsonify(error="Both UserID and initial message are required"), 400

    print("Creating conversation...")

    # Call main api
    liveConversation, retrievedDocuments, pipeline, extractedResponse, conversationid = chatSystem(user_id, user_input, -1, -1, ragClient)

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
    app.run(host='0.0.0.0')
