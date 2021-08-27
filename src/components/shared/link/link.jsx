import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const commonClassNames = 'font-bold leading-none text-sm tracking-wider uppercase group';

const themeClassNames = {
  text: {
    common: 'transition-colors duration-200',
    primary: 'text-primary-1',
  },
  arrow: {
    common: 'inline-flex items-center',
    primary: 'text-primary-1',
  },
};

const Link = ({ className: additionalClassName, to, type, theme, children, ...otherProps }) => {
  const className = classNames(
    type && theme && commonClassNames,
    themeClassNames[type]?.common,
    themeClassNames[type]?.[theme],
    additionalClassName
  );

  const content = type === 'arrow' ? <span>{children}</span> : children;
  const arrow = type === 'arrow' && (
    <ArrowIcon className="transition-transform ease-out duration-150 ml-2.5 group-hover:translate-x-2" />
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...otherProps}>
        {content}
        {arrow}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...otherProps}>
      {content}
      {arrow}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(themeClassNames)),
  theme: PropTypes.oneOf(
    [
      ...new Set([...Object.keys(themeClassNames.text), ...Object.keys(themeClassNames.arrow)]),
    ].filter((themeName) => themeName !== 'common')
  ),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  type: null,
  theme: null,
};

export default Link;