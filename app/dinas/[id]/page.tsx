"use client";
import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  type MRT_ColumnDef,
  useMaterialReactTable,
  MRT_Row,
  MaterialReactTable,
  MRT_Table,
} from "material-react-table";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  type CollegeStudent,
  dataCollege,
} from "../../mockData/CollegeStudentData";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { useRef, useState } from "react";

const citiesList: any = ["D11111118", "D11111119", "D11111117"];

const columns: MRT_ColumnDef<CollegeStudent>[] = [
  {
    accessorKey: "no",
    header: "No",
    Cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "namemahasiswa",
    header: "Nama mahasiswa",
  },
  {
    accessorKey: "nim",
    header: "Nim",
  },
  {
    accessorKey: "nilai",
    header: "Nilai",
  },
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",

  useKeysAsHeaders: true,
});

const DinasData = () => {
  const [selectedNIM, setSelectedNIM] = useState("");
  const componentRef = useRef(null);

  const filteredData = selectedNIM
    ? dataCollege.filter((item) => item.nim === selectedNIM)
    : dataCollege;

  const handleSelectChange = (event: any) => {
    const nim = event.target.value;
    setSelectedNIM(nim);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(dataCollege);

    download(csvConfig)(csv);
  };

  const handleExportRows = (rows: MRT_Row<CollegeStudent>[]) => {
    const doc = new jsPDF();

    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("bolata-pdf.pdf");
  };

  const table = useMaterialReactTable({
    columns,
    data: filteredData,
    initialState: {
      pagination: { pageSize: 15, pageIndex: 0 },
      showGlobalFilter: true,
    },
    enablePagination: true,
    paginationDisplayMode: "pages",
  });

  return (
    <main>
      <Navbar />
      <h1 className="py-8 w-full text-center text-orange text-heading-m font-bold">
        Bagian Organisasi
      </h1>
      <Stack className="flex flex-col gap-8 px-14">
        <Box
          sx={{
            display: "flex",
            gap: "36px",
            justifyContent: "space-between",
          }}
        >
          <section className="flex flex-col gap-8">
            <select
              value={selectedNIM}
              onChange={handleSelectChange}
              className="w-60 p-4 rounded-lg bg-white border-2 border-black"
            >
              <option value="" className="cursor-pointer">Pilih Kategori</option>
              {citiesList.map((nim: any) => (
                <option key={nim} value={nim}>
                  {nim}
                </option>
              ))}
            </select>
            <select
              value={selectedNIM}
              onChange={handleSelectChange}
              className="w-60 p-4 rounded-lg bg-white border-2 border-black"
            >
              <option value="">Pilih Tahun</option>
              {citiesList.map((nim: any) => (
                <option key={nim} value={nim}>
                  {nim}
                </option>
              ))}
            </select>
          </section>

          <section className="flex flex-col gap-8">
            <MRT_GlobalFilterTextField table={table} />
            <section className="flex gap-4 justify-end">
              <button
                className="bg-[#46BF0E] rounded-lg w-14 h-14 p-2"
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                onClick={() =>
                  handleExportRows(table.getPrePaginationRowModel().rows)
                }
              >
                <Image src="/icons/csv.svg" width={60} height={60} alt="tes" />
              </button>

              <button
                className="bg-[#C13636] rounded-lg w-14 h-14 p-2"
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                onClick={handleExportData}
              >
                <Image src="/icons/pdf.svg" width={60} height={60} alt="tes" />
              </button>

              <ReactToPrint
                trigger={() => {
                  return (
                    <button
                      className="bg-[#9B9999] rounded-lg w-14 h-14 p-2"
                      disabled={
                        table.getPrePaginationRowModel().rows.length === 0
                      }
                    >
                      <Image
                        src="/icons/print.svg"
                        width={60}
                        height={60}
                        alt="tes"
                      />
                    </button>
                  );
                }}
                content={() => componentRef.current}
              />
            </section>
          </section>
        </Box>

        <TableContainer className="rounded-xl border">
          <Table ref={componentRef}>
            <TableHead className="bg-blue-dark">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell align="center" variant="head" key={header.id}>
                      {header.isPlaceholder ? null : (
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: "15px",
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.Header ??
                              header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody
              sx={{
                //stripe the rows, make odd rows a darker color
                "& tr:nth-of-type(even) > td": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} selected={row.getIsSelected()}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell align="center" variant="body" key={cell.id}>
                      {/* Use MRT's cell renderer that provides better logic than flexRender */}
                      <MRT_TableBodyCellValue cell={cell} table={table} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <MRT_TablePagination table={table} />
        <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
      </Stack>
      <Footer />
    </main>
  );
};

export default DinasData;
