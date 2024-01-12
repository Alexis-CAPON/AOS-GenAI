
import ChatRoom from './ChatRoom'; // Adjust the path as needed

function ConversationPage({userId, selectedConversationId}) {

  return (
    <ChatRoom userId={userId} conversation_id={selectedConversationId} />
  );
}

export default ConversationPage;
