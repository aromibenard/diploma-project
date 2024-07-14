'use client';

import { useEffect, useRef, useState } from 'react';
import { Message, continueConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import { Button, Input, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';


export default function Chat() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);


  return (
    <div className={'flex flex-col p-4 h-screen'}>
      <Paper className='flex-1 flex-col overflow-y-auto p-4 mb-4'
        elevation={3}
      >
          {conversation.map((message, index) => (
            <div key={index} 
              className={message.role === 'user' ? 
               'p-3 justify-end bg-blue-500 inline-block rounded-xl my-2 shadow-md' 
               : 'p-3 justify-start mb-4 bg-gray-500 my-2 rounded-xl shadow-md'}>
              {message.role}: {message.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
      </Paper>
        <div className='flex w-full space-x-4 p-4'>
          <Input
            placeholder="Describe injury or accident"
            type="text"
            value={input}
            onChange={event => {
              setInput(event.target.value);
            }}
            className='flex-1 mr-2'
          />
          <Button
            variant="outlined"
            className=''
            onClick={async () => {
              const { messages, newMessage } = await continueConversation([
                ...conversation,
                { role: 'user', content: input },
              ]);

              let textContent = '';

              for await (const delta of readStreamableValue(newMessage)) {
                textContent = `${textContent}${delta}`;

                setConversation([
                  ...messages,
                  { role: 'assistant', content: textContent },
                ]);
              }
              setInput('')
            }}
          >
            Send Message
            <span className='mx-2'><Send/></span>
          </Button>
        </div>

    </div>
  );
}