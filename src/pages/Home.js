import React from "react";
import { menuItems, sliderImages, toDoList, faqList } from '../json/homeJson.js';
import { generateList } from '../utils/CommonFunctions.js';
import HeaderMenu from '../components/HeaderMenu.js';
import ImageSlider from '../components/ImageSlider.js';
import ToDoList from '../components/ToDoList.js';
import Faq from '../components/Faq.js';
import Footer from '../components/Footer.js';

export default function Home(){

    return (
        <div className="home-container">
            <HeaderMenu menuItems={menuItems} />

            <ImageSlider sliderImages={sliderImages} />

            <ToDoList toDoList={toDoList} generateList={generateList}/>

            <Faq faqList={faqList} />

            <Footer />
        </div>
    );
}