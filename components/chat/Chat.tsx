'use client';

import { useEffect, useRef } from 'react';
import { AutoResizingTextarea } from './AutoResizingTextarea';
import { Empty } from './Empty';
import { Message } from './Message';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { useModelStore } from '@/app/store/model';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const model = useModelStore((state) => state.model);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {messages.length === 0 ? (
          <Empty />
        ) : (
          <>
            {messages.map((message) => (
              <Message
                key={message.id}
                name={'user'}
                content={message.content}
                role={message.role}
              />
            ))}
          </>
        )}
      </div>

      <div className="pb-5 sticky bottom-0 bg-white">
        <form
          className="flex items-center justify-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e, { data: { model } });
          }}
        >
          <AutoResizingTextarea value={input} onChange={handleInputChange} />
          <Button type="submit" size="icon">
            <ArrowUp />
          </Button>
        </form>
      </div>
      <div ref={scrollRef} />
    </div>
  );
}
