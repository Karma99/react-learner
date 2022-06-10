import React from "react";
import ToDoList from '../components/ToDoList.js';
import Faq from '../components/Faq.js';


const Home = (props) => {

    return (
        <div className="home-wrapper">

            <ToDoList toDoList={props.homeJson.toDoList} generateList={props.homeJson.generateList}/>

            <Faq faqList={props.homeJson.faqList} />
   
        </div>
    );
};

export default Home;