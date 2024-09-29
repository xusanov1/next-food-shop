"use client";
import React from 'react';
import Image from "next/image";
import introImage from '../../assets/images/hg4-removebg-preview.png'
import './intro.css';

const Index: React.FC = () => {


  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <h1>
            Tasty Food <span className="text-[#90E051]">Collections</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <div id="btnn" className="flex gap-4">
            <button className="btn">See All</button>
            <button className="btn2">Menu</button>
          </div>
        </div>
        <div className="right">
          <div className="big"></div>
          <div className="card">
          <Image className='intro-image' src={introImage} alt="" />
          </div>
          <div className="small">
            <div className="price">
              <span>$22.53</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
