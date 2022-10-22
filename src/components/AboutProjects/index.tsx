import React from "react";
import './styles.scss';

const steps = [1, 2, 3, 4, 5];

export const AboutProjects: React.FC = () => {

  return (
    <>
      {steps.map((item, index) =>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          <div key={index}>
            <div className='stepContainer'>
              <h2>{item}</h2>
              {item < steps.length && (
                <div className="step" />
              )}
            </div>
            <div className="stepHeight" />
          </div>
          <div style={{
            margin: 8,
          }}>
            <h3>Talabat</h3>
            <div style={{
              width: '70%',
            }}>
              <p>This is the end This is the end This is the end This
                is the end This is the end This is the end This is the end This is the end
                This is the end This is the end This is the end This is the end This is the end This is
                the end This is the end This is the end This is the end This is the end This is the end</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}