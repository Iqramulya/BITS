import './ChatItem.css'

const ChatItem = ({ isByAdmin, text, time }) => {
    return (
        <div id={isByAdmin ? 'chat-bubble' : 'chat-bubble-sender'}>
            <p id='text'>{text}</p>
            <p id='time'>{time}</p>
        </div>
    );
};

export default ChatItem;
