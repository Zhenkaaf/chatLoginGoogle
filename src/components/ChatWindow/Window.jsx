import React, { useEffect, useState } from 'react';
import s from './Window.module.css';


const Window = (props) => {



    let activeItem = props.contactsData.filter(item => {
        if (props.activeContactId == item.id) {
            return item;
        }
    })
    let dataForDisplay;
    let activeItemId = activeItem[0].id;
    if (localStorage.getItem(activeItemId) == null) {
        dataForDisplay = activeItem[0].messages;
    }
    else {
        let returnedObj = localStorage.getItem(activeItemId);
        let localStorageArr = JSON.parse(returnedObj);
        dataForDisplay = localStorageArr;
    }

    /* useEffect(() => {
    if (localStorage.getItem(activeItemId) != null) {
        alert('ty');
        let returnedObj = localStorage.getItem(activeItemId);
        let localStorageArr = JSON.parse(returnedObj);
        for (let i = 0; i < localStorageArr.length; i++) {
            activeItem[0].messages.push(localStorageArr[i]);
            alert(localStorageArr[i]);
        }
    }
}) */
    /*  else {
         let returnedObj = localStorage.getItem(activeItemId);
         let localStorageArr = JSON.parse(returnedObj);
         for (let i = 0; i < localStorageArr.length; i++) {
             activeItem[0].messages.push(localStorageArr[i]);
             alert(localStorageArr[i]);
         }
     } */





    let messages = /* activeItem[0].messages */dataForDisplay.map((item, index) => {
        return <ActiveItemMessage key={index} text={item.text} type={item.type} ava={activeItem[0].photoURL} ></ActiveItemMessage>;
    })

    let myRef = React.createRef();
    let scrollTo = () => {
        myRef.current.scrollIntoView();
    }
    useEffect(() => {
        scrollTo();
    }, [messages])



    return (
        <div>
            <div className={s.windowBody}>
                <div className={s.windowContactInfo}>
                    <div><img className={s.itemAva} src={`${activeItem[0].photoURL ? activeItem[0].photoURL : 'https://secure.gravatar.com/avatar/177d59eb5e60f5183be02ab03a4911c7?s=250&d=mm&r=g'}`}></img></div>
                    <div className={s.windowContactName}>{activeItem[0].name}</div>
                </div>
                <div className={s.messagesBody}>
                    <div>{messages}<div ref={myRef}></div></div>
                </div>

            </div>
            <TypeMessage fn={props.fn} addNewMessage={props.addNewMessage} activeContactId={props.activeContactId}></TypeMessage>
        </div>
    )
}

const ActiveItemMessage = (props) => {
    return (
        /*  <div className={s.activeItemMessageBody}>
            <div><img className={s.itemAva} src={`${props.ava ? props.ava : 'https://secure.gravatar.com/avatar/177d59eb5e60f5183be02ab03a4911c7?s=250&d=mm&r=g'}`}></img></div>
             <div className={props.type == 'question' ? s.messageBody : ''}>
                 <div className={props.type == 'answer' ? s.messageTextAnswer : s.messageTextQuestion}>{props.text}</div>
             </div>
         </div> */

        <div className={s.activeItemMessageBody}>
            {props.type == 'question'
                ? <div className={s.questionBody}><div className={s.messageTextQuestion}>{props.text}</div></div>

                : <div className={s.answerBody}><div><img className={s.itemAva} src={`${props.ava ? props.ava : 'https://secure.gravatar.com/avatar/177d59eb5e60f5183be02ab03a4911c7?s=250&d=mm&r=g'}`}></img></div><div className={s.messageTextAnswer}>{props.text}</div></div>}
        </div>

    )
}

const TypeMessage = (props) => {
    let [newMessage, setNewMessageText] = useState('');

    let stateBtn = true;
    if (newMessage.length > 0) {
        stateBtn = false;
    }

    const textChange = (event) => {
        setNewMessageText(event.currentTarget.value);
    }

    const clearInputValue = () => {
        setNewMessageText('');
    }



    return (
        <div>
            <div className={s.typeYourMessageBody}>
                <div className={s.typeYourMessageBlock}>
                    <input className={s.typeYourMessageField} type="text" placeholder='Type your message' value={newMessage} onChange={textChange} />
                    <button className={s.typeYourMessageArrow} disabled={stateBtn} onClick={() => { props.addNewMessage(newMessage, props.activeContactId); clearInputValue(); props.fn(props.activeContactId) }}>➤</button>
                </div>

            </div>
        </div>
    )
}

export default Window;