function Contact({ name, number, contactId, onDeleteContact }) {
    return (
        <>
            <p>{name}<span>{number}</span></p>
            <button
                type="button"
                onClick={() => onDeleteContact(contactId)}
            >Delete</button>
        </>
    )
}
export default Contact;