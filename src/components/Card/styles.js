import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 10rem;

  border-radius: 10px;

  background-color: #35353b;

  overflow: hidden;
`;

export const Image = styled.div`
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 1rem;

  height: 100%;

  p:nth-child(3) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #5e5e64;
  }
`;
