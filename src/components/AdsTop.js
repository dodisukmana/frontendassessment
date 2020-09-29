import React from 'react';

function AdsTop() {
    return (
        <div className="container">
            <div style={{height: "10px"}}></div>
            <div align="center" style={{
                    display: "flex",
                    backgroundColor: "#d9d9d9",
                    color: "#666666",
                    height: "50px",
                    width: "970px",
                    margin: "auto",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <h2>Top Frame 970x50</h2>
            </div>
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
                <h2>Billboard 970x50</h2>
            </div>
            <div style={{height: "50px"}}></div>
        </div>
    )
}

export default AdsTop;