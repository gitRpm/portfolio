'use client';

import UpRightArrow from '@/ui/arrow/up-right-arrow.component';
import { useChat } from '@ai-sdk/react';
import TextareaAutosize from 'react-textarea-autosize';
import { useRef, useEffect } from 'react';
import MemoizedMarkdown from '@/ui/markdown/markdown.component';

const Chat: React.FC = () => {
  const {
    messages,
    input,
    handleSubmit,
    handleInputChange,
    status
  } = useChat({
    api: '/chat/api',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: '',
        parts: [
          {
            type: 'text',
            text: '**Hello, I\'m Ryan\'s AI assistant, _Rybot_!**\n\nAsk me about his experience.'
          }
        ]
      }
    ],
    maxSteps: 2
  });

  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textarea.current?.focus();
  }, [messages, status]);

  return (
    <div className="flex flex-col w-full max-w-xl">
      {messages.map(message => (
        <div
          key={message.id}
          className={message.role === 'assistant' ?
            `py-4 mb-4 self-start lg:px-4` :
            `bg-[var(--foreground)] text-[var(--color-background)] py-2 px-8 rounded-full mb-2 self-end [&_p]:leading-6 `}>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case 'text':
                return <MemoizedMarkdown key={`${message.id}-${index}`} id={`${message.id}-${index}`} content={part.text} />;

              // other cases can handle images, tool calls, etc
            }
          })}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="flex items-end justify-between lg:w-full py-2 px-4 rounded-lg border border-[var(--foreground)]">
          <TextareaAutosize
            value={input}
            placeholder="Send a message..."
            onChange={handleInputChange}
            disabled={status !== 'ready'}
            className="focus:outline-none h-0 resize-none w-full"
            ref={textarea}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <div>
            <button
              className="group/link font-bold text-[var(--color-white)] hover:text-[var(--color-mint-400)] hover:cursor-pointer"
              disabled={status !== 'ready' || !input.trim()}
              onClick={handleSubmit}
            >
              <span className="inline-block">
                <UpRightArrow />
              </span>
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default Chat;
