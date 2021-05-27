import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Atom/Icon';
import {
  Content,
  ActiveLink,
  ViewLink,
  Filters,
  FlexGroup,
  Headline,
  Wrapper,
} from './style';

export default function Page({ className, pageTitle, filters, children }) {
  const [, view] = window.location.search.match(/view=(grid|list)/) || [];

  const ListView = (
    <FlexGroup>
      <ActiveLink>
        <Icon icon="th-list" />
      </ActiveLink>
      <ViewLink to="?view=grid">
        <Icon icon="th" />
      </ViewLink>{' '}
    </FlexGroup>
  );

  const FlatView = (
    <FlexGroup>
      <ViewLink to="?view=list">
        <Icon icon="th-list" />
      </ViewLink>
      <ActiveLink>
        <Icon icon="th" />
      </ActiveLink>
    </FlexGroup>
  );

  return (
    <Wrapper className={className}>
      <Headline>{pageTitle ? <h1>{pageTitle}</h1> : ''}</Headline>
      <Content>
        {filters && (
          <Filters>
            {filters} {view === 'list' ? ListView : FlatView}
          </Filters>
        )}
        {children}
      </Content>
    </Wrapper>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  pageTitle: PropTypes.string,
  filters: PropTypes.node,
  children: PropTypes.node,
};
