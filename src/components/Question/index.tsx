import { ReactNode } from 'react'
import cx from 'classnames';

import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div
          //className={`question ${isAnswered ? 'answered' : ''} {${isHighLighted ? 'highLighted' : ''}`}
          className={cx(
            'question',
            { answered: isAnswered },
            { highLighted: isHighLighted && !isAnswered }
          )}
        >
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}