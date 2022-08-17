import { connect } from "react-redux";
import { addNewMessageActionCreator } from "../../redux/ContactsReducer";
import Window from "./Window";


const mapStateToProps = (state) => {
    return {
        contactsData: state.contacts.contactsData,
        activeContactId: state.contacts.activeContactId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (messageText, contactId) => {
            dispatch(addNewMessageActionCreator(messageText, contactId))
          }
    }
}

const WindowContainer = connect(mapStateToProps, mapDispatchToProps)(Window);
export default WindowContainer;