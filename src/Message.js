import React,{forwardRef} from 'react'
import './Message.css'
import TimeAgo from 'react-timeago'
import {Card, CardContent, Typography} from '@material-ui/core'
import Linkify from 'react-linkify'

const Message = forwardRef(({username,message}, ref) => {
    const isMessageFromUser = message.username===username
    const stylingForCard = isMessageFromUser?'message__card--user':'message__card--nonuser'
    const stylingForDiv = isMessageFromUser?'message message--user':'message'
    const timestampForMessage = isMessageFromUser?'message__timestamp message__timestamp--user':'message__timestamp'


    return (
        <div ref={ref} className={stylingForDiv}>
         <div>
           <Card className={stylingForCard}>
             <CardContent className="message__cardContent">
               <Typography>
                 <p className="message__text">
                 <strong>{!isMessageFromUser?message.username:null}</strong> <Linkify>{message.text}</Linkify>
                 </p>
               </Typography>
             </CardContent>
          </Card>
        </div>
        <div className={timestampForMessage}>
        
            <TimeAgo live={false} date={message.timestamp?message.timestamp.toDate().toString():''}/>
          
        </div>
       
        </div>
      
    )

})

export default Message
