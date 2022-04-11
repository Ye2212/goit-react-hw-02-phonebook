// import propTypes from 'prop-types';
import { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        // console.log({ [e.currentTarget.name]: e.currentTarget.value });
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("form: ", this.state);
        this.props.onSubmitProp(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    render() {
        // const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    <span>Number</span>
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {};

export default ContactForm;
