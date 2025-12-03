import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import axios from "axios";
import { FaFilePdf, FaFileExcel, FaSyncAlt } from "react-icons/fa";

function Demo() {
  const [contactData, setContactData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // for search reset

const api_url = import.meta.env.VITE_API_URL;

  // FETCH DATA
  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const res = await axios.get(`${api_url}/api/demo`);
      const dataArray = Array.isArray(res.data.data) ? res.data.data : [];

      setContactData(dataArray);
      setOriginalData(dataArray); // store backup for search
    } catch (err) {
      alert("Unable to fetch demo data! " + err);
    }
  };

  // ======================= SEARCH =======================
  const handleSearch = (value) => {
    const search = value.toLowerCase();

    if (search.trim() === "") {
      setContactData(originalData);
      return;
    }

    const filtered = originalData.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search) ||
        item.mobile.toLowerCase().includes(search) ||
        item.message.toLowerCase().includes(search)
    );

    setContactData(filtered);
  };

  // DELETE RECORD
  const deleteRow = async (id) => {
    try {
      await axios.delete(`${api_url}/api/demo/${id}`);
      setContactData(contactData.filter((item) => item._id !== id));
      setOriginalData(originalData.filter((item) => item._id !== id));
    } catch (err) {
      alert("Unable to delete!"+err);
    }
  };

  // ===================== EXCEL =====================
  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Demo Requests");

    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 35 },
      { header: "Mobile", key: "mobile", width: 18 },
      { header: "Message", key: "message", width: 60 },
    ];

    // HEADER
    sheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, size: 14, color: { argb: "FF000000" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFF00" }, // YELLOW
      };
      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // ROWS
    contactData.forEach((item) => {
      sheet.addRow({
        name: item.name,
        email: item.email,
        mobile: item.mobile,
        message: item.message,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "demo_messages.xlsx");
  };

  // ===================== PDF =====================
  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // HEADER BAR
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, 210, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("Demo Requests Report", 10, 12);

    let y = 30;
    doc.setTextColor(0, 0, 0);

    contactData.forEach((item, index) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`Record #${index + 1}`, 10, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Name: ${item.name}`, 10, y + 10);
      doc.text(`Email: ${item.email}`, 10, y + 18);
      doc.text(`Mobile: ${item.mobile}`, 10, y + 26);

      const messageLines = doc.splitTextToSize(item.message, 180);
      const boxHeight = messageLines.length * 6 + 8;

      doc.rect(10, y + 40, 190, boxHeight);
      doc.text(messageLines, 12, y + 45);

      y += boxHeight + 55;
    });

    doc.save("demo_messages.pdf");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
        <h1 className="text-3xl font-bold text-gray-800">Demo Requests</h1>

        {/* SEARCH + BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search here…"
            onChange={(e) => handleSearch(e.target.value)}
            className="px-4 py-2 w-60 border rounded-lg shadow-sm outline-none"
          />

          {/* BUTTONS GROUP */}
          <div className="flex gap-3">
            {/* REFRESH */}
            <button
              onClick={fetchContactData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md"
            >
              <FaSyncAlt size={20} />
              <span className="hidden md:block">Refresh</span>
            </button>

            {/* PDF */}
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md"
            >
              <FaFilePdf size={22} />
              <span className="hidden sm:block">PDF</span>
            </button>

            {/* EXCEL */}
            <button
              onClick={downloadExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md"
            >
              <FaFileExcel size={22} />
              <span className="hidden sm:block">Excel</span>
            </button>
          </div>
        </div>
      </div>

      {/* NO DATA */}
      {contactData.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-10">
          No Data Found
        </div>
      ) : (
        <div className="overflow-x-auto shadow-xl rounded-lg bg-white">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {contactData.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.mobile}</td>

                  <td className="p-3">
                    <div className="w-64 md:w-80 max-h-24 overflow-y-scroll p-2 border rounded-md bg-gray-50 shadow-inner">
                      {item.message}
                    </div>
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteRow(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 shadow-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Demo;
