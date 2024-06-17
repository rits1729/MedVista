import React, { useEffect, useRef, useState } from 'react'
import './Sidebar.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Login from '../screens/Login';
import Homepage from '../screens/Homepage';

const Sidebar = () => {

    const ddOne = useRef();
    const ddTwo = useRef();

    // const [checkActive, setCheckActive] = useState()

    // const [dropDowns, setdropDowns] = useState('');

    // useEffect( ()=> {

    //     if(dropDowns.current.style.display === 'none') {
    //         dropDowns.current.style.display = 'block';
    //     }

    //     else {
    //         dropDowns.current.style.display = 'none';
    //     }

    // }, [dropDowns])



    function dropDownOne() {
        if (ddOne.current.style.display === 'none') {
            ddOne.current.style.display = 'block';
        }

        else {
            ddOne.current.style.display = 'none';
        }
    }

    function dropDownTwo() {

        if (ddTwo.current.style.display === 'none') {
            ddTwo.current.style.display = 'block';
        }

        else {
            ddTwo.current.style.display = 'none';
        }
    }

    function dropDownThree() {
        if (ddThree.current.style.display === 'none') {
            ddThree.current.style.display = 'block';
        }

        else {
            ddThree.current.style.display = 'none';
        }
    }


    function dropDownFour() {
        if (ddFour.current.style.display === 'none') {
            ddFour.current.style.display = 'block';
        }

        else {
            ddFour.current.style.display = 'none';
        }
    }


    function dropDownFive() {
        if (ddFive.current.style.display === 'none') {
            ddFive.current.style.display = 'block';
        }

        else {
            ddFive.current.style.display = 'none';
        }
    }


    return (
        <div id='sidebar'>
            {/* THis is Sidebar */}

            {/* <NavLink to='/'>Patients</NavLink> */}


            {/* <select name="Patients" id="">
        <option value="Patients List">Patients List</option>
        <option value="Patients List">pok List</option>
        <option value="Patients List">new List</option>
        <option value="Patients List">Patients List</option>
      </select> */}

            <div id="dashboard" >
                <NavLink to='/homepage'>
                    <i class="fa-solid fa-hospital-user"></i>
                    <p class="padding">Dashboard</p>
                </NavLink>
                {/* <i class="fa-solid fa-angle-down"></i>   */}
            </div>


            <div id="dropDown-one" onClick={dropDownOne}>
                <i class="fa-solid fa-hospital-user"></i>
                <p class="padding">Patients</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>

            <ul id='patients-ul' ref={ddOne}>
                <li><NavLink to='/patients-list'>Patients List</NavLink></li>
                {/* <li><NavLink to='/pok'>pok</NavLink></li> */}
                <li><NavLink to='/new-list'>New List</NavLink></li>
            </ul>


            <div id="dropDown-two" onClick={dropDownTwo}>
                <i class="fa-regular fa-calendar-check"></i>
                <p class="padding">Appointments</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>

            <ul id='appointments-ul' ref={ddTwo}>
                <li><NavLink to='/appointments-list'>Appointments List</NavLink></li>

                {/* <li><NavLink to='/pok'>pok</NavLink></li> */}
                <li><NavLink to='/new-list'>New List</NavLink></li>
            </ul>

            <div id="dropDown-three">
                <i class="fa-regular fa-comment-dots"></i>
                <p class="padding">Message</p>
                {/* <i class="fa-solid fa-angle-down"></i>   */}
            </div>

            <div id="dropDown-four">
                <i class="fa-solid fa-file-prescription"></i>
                <p class="padding">Medications</p>
                {/* <i class="fa-solid fa-angle-down"></i>   */}
            </div>

            <div id="dropDown-five">
                <i class="fa-solid fa-wallet"></i>
                <p class="padding" style={{ "padding": "10px" }}>Wallet</p>
                {/* <i class="fa-solid fa-angle-down"></i>   */}
            </div>

            {/* <NavLink to='/homepage'>Appointments</NavLink> */}


            <div id="theme">
                <div id="dark">
                    {/* Dark Theme  */}
                </div>

                <div id="light">
                    {/* Light Theme  */}
                </div>
            </div>




        </div>
    )
}

export default Sidebar
