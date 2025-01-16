import React from 'react';
import styled from 'styled-components';

const HomeCard = ({ heading, content }) => {
    return (
      <StyledWrapper>
        <div className="card">
          <p className="heading">{heading}</p>
          <p>{content}</p>
        </div>
      </StyledWrapper>
    );
  };

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #080618; /* Darker background for contrast */
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 310px;
    height: 205px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #4f46e5 0%, #22d3ee 100%); /* Purple to Cyan */
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #3b82f6 0%, #06b6d4 100%); /* Blue to Light Cyan */
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 14px;
  }

  .card p:last-child {
    color: #22d3ee; /* Cyan */
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-30deg) scaleX(0.99) scaleY(0.77);
  }
`;

export default HomeCard;
