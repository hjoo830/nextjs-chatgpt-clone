'use client';

import { useEffect, useRef } from 'react';
import { AutoResizingTextarea } from './AutoResizingTextarea';
import { Empty } from './Empty';
import { Message } from './Message';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { Message as TMessage } from 'ai/react';
import { useModelStore } from '@/app/store/model';
import { useParams, useRouter } from 'next/navigation';
import { addMessages, createConversation } from '@/app/actions/conversation';
import { CHAT_ROUTES } from '@/constants/routes';

type Props = {
  initialMessages?: TMessage[];
};

export function Chat({ initialMessages }: Props) {
  const router = useRouter();
  const params = useParams<{ conversationId: string }>();
  const { messages, setMessages, input, handleInputChange, handleSubmit } =
    useChat({
      onFinish: async (message) => {
        // conversationId가 없으면 새로운 대화 페이지
        if (!params.conversationId) {
          // 대화 생성
          const conversation = await createConversation(input);
          // 메시지 추가
          await addMessages(conversation.id, input, message.content);

          router.push(`${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`);
        } else {
          // conversationId가 있으면 기존 대화페이지
          // 메시지 추가
          await addMessages(params.conversationId, input, message.content);
        }
      },
    });
  const model = useModelStore((state) => state.model);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages, setMessages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {!params.conversationId && messages.length === 0 ? (
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
