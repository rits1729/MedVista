// import { List } from "@mui/material";
import "./Table.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SingleTable() {
  const rows = [
    {
      id: 113233,
      product: "Acer Nitro 5",
      img: "https://d28i4xct2kl5lp.cloudfront.net/product_images/329408_e1e5437e-5aeb-43f4-8d9b-951dcf1e571d.jpg",
      customerName: "Jon Snow",
      date: "16th March",
      amount: 83000,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 133114,
      product: "PlayStation 5",
      img: "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5BlackEdition.jpg",
      customerName: "Jamie Lannister",
      date: "2nd September",
      amount: 54000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 122333,
      product: "Keyboard",
      img: "",
      customerName: "Cersei Lannister",
      date: "26th Aug",
      amount: 12000,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 152233,
      product: "Mouse",
      img: "https://th.bing.com/th/id/OIP.8S7KGKQQkHOjbInhLPJYIgHaE5?w=279&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      customerName: "Arya Stark Bansal",
      date: "4th Dec",
      amount: 6000,
      method: "Online Payemnt",
      status: "Approved",
    },
    {
      id: 113543,
      product: "PSP",
      img: "https://th.bing.com/th/id/OIP.DqjwHsSDggRcFU4L5cLH6gHaGK?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      customerName: 'Daenerys Targaryen',
      date: "3rd Jan",
      amount: 33000,
      method: "Online Payment",
      status: "Rejected",
    },
  ];

  return (
    <div id="single-table">    
      {/* Table    */}
        <div id="table-container">

            <TableContainer component={Paper} id="table-table" >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='tableHead'>
                  <TableRow style={{backgroundColor:'black'}}>
                  
                    <TableCell style={{color:'gray'}}
                    className="tabelCellHeading tableCell">User ID</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">User</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Name</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Appointment Date</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Amount</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Payment Method</TableCell>
                    <TableCell style={{color:'gray'}} className="tabelCellHeading tableCell">Status</TableCell>    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (

                    <TableRow key={row.id} >
                      <TableCell className="tableCell tabelCellData tabelCellDataId" >{row.id}</TableCell>
                      {/* <TableCell className="tableCell" >{row.product}</TableCell> */}
                      <TableCell className="tableCell tabelCellData" >
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className="image" />
                            {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.customerName}</TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.date}</TableCell>
                      <TableCell className="tableCell tabelCellData" >Rs {row.amount}/-</TableCell>
                      <TableCell className="tableCell tabelCellData" >{row.method}</TableCell>
                      <TableCell className="tableCell tabelCellData" >
                        <span className={`status ${row.status}`}>{row.status}</span>
                      </TableCell>
                    </TableRow>
                ))}

                </TableBody>
              </Table>
            </TableContainer>

        </div>
    </div>
  );
}

export default SingleTable;
