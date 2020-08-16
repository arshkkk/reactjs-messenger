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
           <Card className={stylingForCard}>
             <CardContent className="message__cardContent">
               <Typography>
                <strong>{!isMessageFromUser?message.username:null}</strong> <Linkify>{message.text}</Linkify>
               </Typography>
             </CardContent>
          </Card>
          <TimeAgo className={timestampForMessage} date={message.timestamp?message.timestamp.toDate().toString():''}/>
        </div>
    )
})

export default Message
