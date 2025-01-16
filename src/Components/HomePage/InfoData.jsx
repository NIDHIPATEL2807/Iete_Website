import React from 'react';

// Icon component (SVG from your 'src' folder)
const Icon = ({ src }) => (
  <div style={{ width: '40px', height: '40px', marginBottom: '8px' }}>
    <img src={src} alt="icon" style={{ width: '100%', height: '100%' }} />
  </div>
);

// Info component
const InfoCard = ({ title, number, iconSrc }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px', padding: '10px' }}>
      <Icon src={iconSrc} />
      <div style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '5px' }}>
        {title}
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>
        {number}
      </div>
    </div>
  );
};

// Main Component
const InfoData = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <InfoCard title="Since IETE-SPIT Started" number="2007" iconSrc="src\assets\clock.gif" />
      <InfoCard title="Members" number="125,000+" iconSrc="src/Icons/members-icon.svg" />
      <InfoCard title="Centres across the Globe" number="64+" iconSrc="src/Icons/centres-icon.svg" />
    </div>
  );
};

export default InfoData;

