import styled from 'styled-components/macro';
import { Link } from '@reach/router';

const Anchor = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
`;

const Details = styled.section`
  flex: 1;
`;

const Cover = styled.div`
  width: 150px;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  & > a > img {
    max-width: 100%;
    max-height: 240px;
    display: block;
  }
`;

const Wrapper = styled.article`
  font-family: Palatino, serif;
  display: flex;
  justify-content: flex-start;
  width: 270px;
  padding: 50px 10px;

  ${({ view }) => {
    if (view === 'list') {
      return `
      align-items: flex-start;
      width: 100%;
      padding: 10px;
      ${Cover} {
          margin-right: 78px;
      }
    `;
    }
    return `
    &&, ${Details} {
      display: flex;
      align-items: center;
      flex-direction: column;
        text-align: center;
    }
`;
  }}
`;

const Title = styled.h3`
  color: #242a35;
  font-family: Palatino, serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin: 0 0 8px 0;
  text-transform: capitalize;
`;

const Author = styled.p`
  font-family: Palatino, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 8px 0;
  color: #717883;
`;

const Description = styled.p`
  color: #242a35;
  font-family: Palatino, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin: 1em 0 2em 0;
`;

export { Anchor, Author, Description, Title, Wrapper, Cover, Details };
