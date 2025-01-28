import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const newsData = [
  // ... (same as above)
];

const NewsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 4, boxShadow: 3, height: "810px" }}
    >
      <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
        Latest News
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((news) => (
              <TableRow key={news.id}>
                <TableCell>{news.title}</TableCell>
                <TableCell>{news.date}</TableCell>
                <TableCell>{news.category}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={newsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default NewsTable;
