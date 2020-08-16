import React,{useState, useEffect} from 'react';
import './App.css';
import  {Button, IconButton, TextField} from '@material-ui/core'
import Message from './Message'
import {db} from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";






function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  const [openEmoji, setOpenEmoji] = useState(true)

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
       setMessages(snapshot.docs.map( doc =>{ return { message: doc.data(), id: doc.id }}))
    })
  },[])

  useEffect(()=>{
    setUsername(prompt('Please Enter Your Name: '))

  }, [] )

  const sendMessage = e => {
    e.preventDefault()
    db.collection('messages').add({
      text: message,
      username : username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('')
    setOpenEmoji(true)
  }



  return (
    <div className="App">
     <h2> Hello {username}, Welcome from Messenger</h2>
     <form className="app__form" onSubmit={e => sendMessage(e)}>
     <IconButton onClick={() => setOpenEmoji(openEmoji?false:true)}>
     <EmojiEmotionsIcon/>
     </IconButton>
     <TextField  label="Enter your message...." className="app__form__input" value={message} variant="filled" onChange = {e => setMessage(e.target.value)}/>
     <IconButton variant="contained" color="primary" type="submit" disabled={message===''}>
        <SendIcon fontSize="large"/>
     </IconButton>
     </form>  
     <div hidden={openEmoji} className="app__emojiBox">
     <Picker onSelect={emoji => setMessage(message+emoji.native)} />
     </div>
    <div className="app__messages">
      <FlipMove>
        {
          messages.map(({message, id}) => (<Message key={id} username={username} message={message}/>))
        }
      </FlipMove>
    </div>
     </div>
  );
}

export default App;
