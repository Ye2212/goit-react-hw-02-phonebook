function Contact({ name, number }) {
    return (
        <>
            <p>{name}<span>{number}</span></p>
            <button type="button">Delete</button>
        </>
    )
}
export default Contact;