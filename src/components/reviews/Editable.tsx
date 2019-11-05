import React from 'react';
import { EditableInterface } from 'interface';
import ContentEditable from 'react-contenteditable';

const Editable: React.FC<EditableInterface> = ({
  innerHtml,
  contentRef,
  disabled,
  onChange,
  tagName,
  className,
  onEnter = null
}) => {
  const handleChange = (e: React.SyntheticEvent): void => {
    onChange(e);
  };

  const handleEnter = (e: React.KeyboardEvent): void => {
    if (onEnter) onEnter(e);
  };

  return (
    <ContentEditable
      innerRef={contentRef}
      html={innerHtml}
      disabled={disabled}
      onChange={handleChange}
      tagName={tagName}
      className={className}
      style={{ outline: 'none' }}
      onKeyDown={onEnter ? handleEnter : undefined}
    />
  );
};

export default Editable;
