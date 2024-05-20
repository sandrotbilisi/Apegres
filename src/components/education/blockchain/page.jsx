import React from 'react';
import UnderConstructionImage from '../../../assets/coming_soon.png'; // Replace with the correct path to your image

const FullScreenUnderConstruction = () => {
    return (
        <>
            <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
                <img
                    src={UnderConstructionImage}
                    alt="Under Construction"
                    style={{ margin: 'auto', width: '70%', objectFit: 'cover' }}
                />
                {/* Optionally add an overlay with text */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    {/* <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Education Section</h1> */}
                </div>
            </div>
        </>

    );
};

export default FullScreenUnderConstruction;
