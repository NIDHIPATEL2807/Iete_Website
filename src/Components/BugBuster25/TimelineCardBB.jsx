// import React from 'react';
// import styled from 'styled-components';

// // Styled Components for the card layout
// const CardContainer = styled.div`
//   width: 700px;
//   height: 350px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   margin: -175px 0 0 -350px;
// `;

// const Card = styled.div`
//   animation: backAn 60s infinite;
//   color: #fff;
//   padding: 30px;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: 1;
//   background: url('http://riccardotartaglia.it/img/deadpool/back.jpg') 100% bottom;
//   box-shadow: 0px 45px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1000px rgba(156, 27, 27, 0.6);
// `;

// const TextBlock = styled.div`
//   position: relative;
//   z-index: 2;
//   text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.7);
// `;

// const Title = styled.h1`
//   font-family: 'Rubik', sans-serif;
//   font-size: 3em;
//   margin: 0;
//   text-transform: uppercase;
//   font-weight: 700;
// `;

// const Date = styled.small`
//   font-size: 0.4em;
//   color: #ccc;
//   position: relative;
//   bottom: 10px;
// `;

// const Subtitle = styled.h3`
//   margin: 0;
//   font-weight: 700;
// `;

// const Description = styled.p`
//   font-weight: 300;
//   width: 60%;
// `;

// const Shine = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 60%);
//   z-index: 1;
// `;

// const Pg = styled.div`
//   position: absolute;
//   height: 400px;
//   width: 20%;
//   right: 10px;
//   bottom: 0px;
//   z-index: 2;
// `;

// const Img = styled.img`
//   height: 400px;
// `;

// const TimelineCardBB = ({ title, date, subtitle, description }) => {
//   return (
//     <CardContainer>
//       <Card>
//         <Shine />
//         <TextBlock>
//           <Title>
//             {title} <Date>({date})</Date>
//           </Title>
//           <Subtitle>{subtitle}</Subtitle>
//           <Description>{description}</Description>
//         </TextBlock>
//       </Card>
//       <Pg>
//         <Img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" alt="Deadpool" />
//       </Pg>
//     </CardContainer>
//   );
// };

// export default TimelineCardBB;



// // import React, { useEffect } from 'react';
// // import './TimelineCardBB.css';

// // const TimelineCardBB = ({ image, title, date, description, side }) => {
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       const poster = document.getElementById('card-container');
// //       const shine = document.querySelector('.shine');
// //       const w = window.innerWidth;
// //       const h = window.innerHeight;

// //       const offsetX = 0.5 - e.pageX / w;
// //       const offsetY = 0.5 - e.pageY / h;
// //       const dy = e.pageY - h / 2;
// //       const dx = e.pageX - w / 2;
// //       const theta = Math.atan2(dy, dx);
// //       let angle = (theta * 180) / Math.PI - 90;

// //       if (angle < 0) angle += 360;

// //       const offsetPoster = parseInt(poster.dataset.offset, 10);
// //       const transformPoster = `translateY(${-offsetX * offsetPoster}px) rotateX(${
// //         -offsetY * offsetPoster
// //       }deg) rotateY(${offsetX * offsetPoster * 2}deg)`;

// //       shine.style.background = `linear-gradient(${angle}deg, rgba(0,0,0,${
// //         e.pageY / h / 5
// //       }) 0%,rgba(0,0,0,.25) 80%)`;

// //       poster.style.transform = transformPoster;
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => {
// //       window.removeEventListener('mousemove', handleMouseMove);
// //     };
// //   }, []);

// //   return (
// //     <div id="card-container" data-offset="2" className={`timeline-card ${side}`}>
// //       <div className="pg">
// //         <img src={image} alt={title} />
// //       </div>
// //       <div id="card">
// //         <div className="shine"></div>
// //         <div className="text-block">
// //           <h1>{title}</h1>
// //           <h3>{date}</h3>
// //           <p>{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TimelineCardBB;


import React from 'react';
import styled,{keyframes} from 'styled-components';

// Define the keyframe animation for background zoom
const backAn = keyframes`
  0% { background-size: 100%; }
  50% { background-size: 250%; }
  100% { background-size: 100%; }
`;

// Styled Components for the card layout
const CardContainer = styled.div`
  width: 600px; /* Decreased width */
  height: 300px; /* Decreased height */
  position: absolute;
  top: ${(props) => `${props.index * 350 + 100}px`}; /* Vertical spacing */
  left: ${(props) => (props.side === 'left' ? '5%' : 'auto')}; /* Move left card to the left */
  right: ${(props) => (props.side === 'right' ? '5%' : 'auto')}; /* Move right card to the right */
  margin-left: ${(props) => (props.side === 'left' ? '0' : 'auto')};
  margin-right: ${(props) => (props.side === 'right' ? '0' : 'auto')};
  transition: transform 0.3s ease;
`;

const Card = styled.div`
  animation:  ${backAn} 60s infinite;
  color: #fff;
  padding: 30px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: url('http://riccardotartaglia.it/img/deadpool/back.jpg') 100% bottom;
  box-shadow: 0px 45px 100px rgba(0, 0, 0, 0.4), inset 0 0 0 1000px rgba(156, 27, 27, 0.6);
`;



const TextBlock = styled.div`
  position: relative;
  z-index: 2;
  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-size: 2.5em; /* Slightly smaller font size */
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
`;

const Date = styled.small`
  font-size: 0.4em;
  color: #ccc;
  position: relative;
  bottom: 10px;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-weight: 700;
`;

const Description = styled.p`
  font-weight: 300;
  width: 60%;
`;

const Shine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 60%);
  z-index: 1;
`;

const Pg = styled.div`
  position: absolute;
  height: 300px; /* Decreased height */
  width: 30%;
  right: -30px;
  bottom: 0px;
  z-index: 2;
`;

const Img = styled.img`
  height: 300px; /* Decreased height */
`;

const TimelineCardBB = ({ title, date, subtitle, description, side, index }) => {
  return (
    <CardContainer side={side} index={index}>
      <Card>
        <Shine />
        <TextBlock>
          <Title>
            {title} 
          </Title>
          <Date className=''>({date})</Date>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </TextBlock>
      </Card>
      <Pg>
        <Img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" alt="Deadpool" />
      </Pg>
    </CardContainer>
  );
};

export default TimelineCardBB;
