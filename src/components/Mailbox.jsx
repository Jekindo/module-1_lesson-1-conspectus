const Mailbox = ({ username, unreadMessages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {/* <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : 'No unread messages'}
      </p> */}
      {unreadMessages.length > 0 ? (
        <div>
          <p>You have {unreadMessages.length} unread messages</p>
          {/* <MessageList messages={messages} /> */}
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default Mailbox;
