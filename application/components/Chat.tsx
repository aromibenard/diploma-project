'use client';

import { useEffect, useRef, useState } from 'react';
import { Message, continueConversation } from '@/app/actions';
import { readStreamableValue } from 'ai/rsc';
import { Button, Input, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Illustrations } from './Illustrations';


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
    <div className={'flex flex-col p-4 my-3'}>
      <Tabs defaultValue="chat" className="w-full h-full" color='purple'>
          <TabsList className='bg-violet-200'>
            <TabsTrigger value="chat" className=''>First Aid</TabsTrigger>
            <TabsTrigger value="illustration">Illustrations</TabsTrigger>
          </TabsList> 
          <TabsContent value="chat">  
            <h1 className='m-2 px-2 font-semibold text-xl text-gray-700'>Describe Animal&apos;s condition below:</h1>
            <Paper className='flex-1 flex-col overflow-y-auto p-4 mb-4 h-[26rem]'
              elevation={3}
            >
                {conversation.map((message, index) => (
                  <div key={index} 
                    className={message.role === 'user' ? 
                    'p-3 px-4 justify-end bg-purple-500 inline-block rounded-xl my-2 shadow-md text-white' 
                    : 'p-3 px-4 justify-start mb-4 bg-gray-200 my-2 rounded-xl shadow-md'}>
                    {message.role}: {message.content}
                  </div>
                ))}
                <div ref={messagesEndRef} />
            </Paper>
            <div className='flex w-full space-x-4 p-4'>
              <Input
                placeholder="try cuts on dogs ears"
                type="text"
                value={input}
                onChange={event => {
                  setInput(event.target.value);
                }}
                className='flex-1 mr-2'
              />
              <Button
                variant="outlined"
                className='bg-purple-400'
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
                <Send/>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value='illustration'>
                <Illustrations/>
          </TabsContent>
        </Tabs>
    </div>
  );
}