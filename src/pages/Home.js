import React from "react";
import ImageSlider from '../components/ImageSlider.js';
import ToDoList from '../components/ToDoList.js';
import Faq from '../components/Faq.js';


const Home = (props) => {

    return (
        <div className="home-wrapper">

            <ImageSlider sliderImages={props.homePage.sliderImages} />

            <ToDoList toDoList={props.homePage.toDoList} generateList={props.homePage.generateList}/>

            <Faq faqList={props.homePage.faqList} />
   
        </div>
    );
};

export default Home;