import React from 'react';

function AdsMiddle() {
    return (
        <div className="container">
            <div style={{height: "30px"}}></div>
            <div align="center" style={{
                    display: "flex",
                    backgroundColor: "#d9d9d9",
                    color: "#666666",
                    height: "250px",
                    width: "970px",
                    margin: "auto",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <h2>Horizontal 970x50<br/>(Internal Campaign Only)</h2>
            </div>
            <div style={{height: "50px"}}></div>
        </div>
    )
}

export default AdsMiddle;