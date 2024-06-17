import React from 'react'
import './Patients_list.css'
import EnhancedTable from '../../components/All_List/EnhancedTable'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Patients_list = () => {
  return (
    <div id='patients-list'>

    {/* <p>This page shows all patients lists.</p> */}


        <div id="top-navbar">
            <Navbar />
        </div>

        
        <div id="bottom-main">
            <div id="left-sidebar">
                <Sidebar />
                {/* Left Side  */}
            </div>

            <div id="right-main-content">

                

                <div id="Patients-list-table">
                    <EnhancedTable />
                </div>

            </div>


        </div>


    
    </div>
  )
}

export default Patients_list
