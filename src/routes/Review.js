import React, { useRef } from 'react';
import useInput from '../components/hooks/useInput';
import Editable from '../components/reviews/Editable';

const Review = () => {
  const title = useRef('Title');
  const subTitle = useRef('SubTitle');
  const body = useRef('Body');
  const [titleHtml, setTitleHtml] = useInput('Title');
  const [subTitleHtml, setSubTitleHtml] = useInput('Sub Title');
  const [bodyHtml, setBodyHtml] = useInput('Review Body...');

  const onEnter = (e) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-veritcal is-parent">
              <div className="tile is-child">
                <Editable
                  innerHtml={titleHtml}
                  contentRef={title}
                  disabled={false}
                  onChange={setTitleHtml}
                  tagName="h1"
                  className="title is-1"
                  onEnter={onEnter}
                />
                <Editable
                  innerHtml={subTitleHtml}
                  contentRef={subTitle}
                  disabled={false}
                  onChange={setSubTitleHtml}
                  tagName="h2"
                  className="subtitle is-2"
                  onEnter={onEnter}
                />
                <div className="content is-medium">
                  <Editable
                    innerHtml={bodyHtml}
                    contentRef={body}
                    disabled={false}
                    onChange={setBodyHtml}
                    tagName="p"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
