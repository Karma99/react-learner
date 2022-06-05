import React from "react";
import ImageSlider from '../components/ImageSlider.js';
import ToDoList from '../components/ToDoList.js';
import Faq from '../components/Faq.js';


export default function Home(props){

    return (
        <div className="home-container">

            <ImageSlider sliderImages={props.homePage.sliderImages} />

            <ToDoList toDoList={props.homePage.toDoList} generateList={props.homePage.generateList}/>

            <Faq faqList={props.homePage.faqList} />
   
        </div>
    );
}