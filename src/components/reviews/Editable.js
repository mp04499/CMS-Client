import React from 'react';
import ContentEditable from 'react-contenteditable';
import PropTypes from 'prop-types';

const Editable = ({
  innerHtml, contentRef, disabled, onChange, tagName, className, onEnter = undefined,
}) => {
  const handleChange = (e) => {
    onChange(e);
  };

  const handleEnter = (e) => {
    onEnter(e);
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
      onKeyDown={onEnter ? handleEnter : null}
    />
  );
};

export default Editable;

Editable.defaultProps = {
  disabled: false,
  onEnter: undefined,
};

Editable.propTypes = {
  innerHtml: PropTypes.string.isRequired,
  contentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  tagName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
};
