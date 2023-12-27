import React, { useState } from 'react'

export default function About(props) {

  const aboutParaTextStyle = {
    backgroundColor: props.mode === 'dark' ? '#1b1f22' : 'white',
    color: props.mode === 'dark' ? '#dee2e6' : 'black'
  } 

  const accordionExpandedStyle = {
    backgroundColor: props.mode === 'dark' ? '#031633' : '#cfe2ff',
    color: props.mode === 'dark' ? '#277ff8' : 'black'
  }

  return (
    <>
      <div className="container my-5">
        <h1 style={{ color: props.mode === 'dark' ? '#dee2e6' : 'black' }}>About Us</h1>

        <div className="accordion my-3" id="accordionExample">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" 
              style={aboutParaTextStyle}>
                TextUtils revolutionizes text analysis with an array of user-friendly features. Easily convert your text to uppercase or lowercase for emphasis or subtlety. Obtain word and character counts effortlessly, helping you meet specific requirements. Hit the reset button with the clear text field option, enabling a fresh start. Simplify sharing with the copy to clipboard feature, streamlining your interaction with other applications. Enhance your user experience by toggling dark mode, adapting to your preferences and surroundings seamlessly.
              </div>
            </div>
          </div>


          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"
              style={aboutParaTextStyle}>
                TextUtils is your cost-free companion for text manipulation. Enjoy unlimited access to all features without any subscription fees or hidden charges. The user-friendly interface ensures a seamless experience for both beginners and seasoned writers alike. TextUtils is committed to transparency, providing a trustworthy tool without limitations on usage.
              </div>
            </div>
          </div>


          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body"
              style={aboutParaTextStyle}>
                TextUtils prioritizes accessibility by being compatible with popular browsers. Whether you use Chrome, Firefox, Safari, or Edge, TextUtils offers a consistent and reliable experience across platforms. Cross-browser consistency is at the core of TextUtils, ensuring that you can unleash its full potential regardless of your preferred browser. Upgrade your writing journey with TextUtils - where precision, creativity, and a seamless experience converge.
              </div>

            </div>
          </div>


        </div>

      </div>
    </>
  );
}

