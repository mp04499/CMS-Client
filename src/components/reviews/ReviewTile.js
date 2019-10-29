import React from 'react';
import Editable from './Editable';

const ReviewTile = () => (
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
);
