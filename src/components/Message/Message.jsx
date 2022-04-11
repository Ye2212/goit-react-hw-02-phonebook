import propTypes from 'prop-types';
function Message ({ message }){
    return (
        <p>{ message }</p>
    )
}

Message.propTypes = {
message: propTypes.string.isRequired,
}
export default Message;