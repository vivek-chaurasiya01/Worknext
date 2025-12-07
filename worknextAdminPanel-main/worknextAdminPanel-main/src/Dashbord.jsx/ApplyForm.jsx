import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import axios from "axios";
import { FaFilePdf, FaFileExcel, FaSyncAlt } from "react-icons/fa";

function ApplyData() {
  const [applyData, setApplyData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchApplyData();
  }, []);

  const fetchApplyData = async () => {
    try {
      const res = await axios.get(`${api_url}/api/applications`);
      const arr = Array.isArray(res.data.data) ? res.data.data : [];
      setApplyData(arr);
      setOriginalData(arr);
    } catch (error) {
      alert("Unable to fetch! " + error);
    }
  };

  // SEARCH
  const handleSearch = (value) => {
    const search = value.toLowerCase();

    if (search.trim() === "") {
      setApplyData(originalData);
      return;
    }

    const filtered = originalData.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search) ||
        item.mobile.toLowerCase().includes(search) ||
        item.qualification.toLowerCase().includes(search) ||
        item.message.toLowerCase().includes(search)
    );

    setApplyData(filtered);
  };

  // DELETE
  const deleteRow = async (id) => {
    try {
      await axios.delete(`${api_url}/api/delete/${id}`);
      setApplyData(applyData.filter((item) => item._id !== id));
      setOriginalData(originalData.filter((item) => item._id !== id));
    } catch (error) {
      alert("Unable to delete! " + error);
    }
  };

  // EXCEL
  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Apply Form");

    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 35 },
      { header: "Mobile", key: "mobile", width: 18 },
      { header: "Qualification", key: "qualification", width: 18 },
      { header: "Message", key: "message", width: 50 },
      { header: "CV", key: "cv", width: 30 },
    ];

    applyData.forEach((item) => {
      sheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "apply_form.xlsx");
  };

  // PDF
  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, 210, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("Apply Form Report", 10, 12);

    let y = 30;

    applyData.forEach((item, index) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(14);
      doc.text(`Record #${index + 1}`, 10, y);

      doc.setFontSize(12);
      doc.text(`Name: ${item.name}`, 10, y + 10);
      doc.text(`Email: ${item.email}`, 10, y + 18);
      doc.text(`Mobile: ${item.mobile}`, 10, y + 26);
      doc.text(`Qualification: ${item.qualification}`, 10, y + 34);

      const msgLines = doc.splitTextToSize(item.message, 180);
      const height = msgLines.length * 6 + 8;

      doc.rect(10, y + 45, 190, height);
      doc.text(msgLines, 12, y + 50);

      y += height + 60;
    });

    doc.save("apply_form.pdf");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Apply Form Applications
        </h1>

        {/* SEARCH + BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => handleSearch(e.target.value)}
            className="px-4 py-2 w-64 border rounded-lg shadow-sm"
          />

          {/* BUTTONS */}
          <div className="flex gap-3">
            {/* REFRESH */}
            <button
              onClick={fetchApplyData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
            >
              <FaSyncAlt size={20} />
              <span className="hidden md:block">Refresh</span>
            </button>

            {/* PDF */}
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md"
            >
              <FaFilePdf size={22} />
              <span className="hidden md:block">PDF</span>
            </button>

            {/* EXCEL */}
            <button
              onClick={downloadExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md"
            >
              <FaFileExcel size={22} />
              <span className="hidden md:block">Excel</span>
            </button>
          </div>
        </div>
      </div>

      {/* TABLE */}
      {applyData.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-10">
          No Applications Found
        </div>
      ) : (
        <div className="overflow-x-auto shadow-xl rounded-lg bg-white">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Qualification</th>
                <th className="p-3">Message</th>
                <th className="p-3">CV</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {applyData.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.mobile}</td>
                  <td className="p-3">{item.qualification}</td>

                  <td className="p-3">
                    <div className="w-64 md:w-80 max-h-24 overflow-y-scroll p-2 border bg-gray-50 rounded-md">
                      {item.message}
                    </div>
                  </td>

                  <td className="p-3">
                    {item.cv ? (
                      <a
                        href={`${api_url}/uploads/${item.cv}`}
                        download
                        className="px-3 py-2 bg-blue-600 text-white rounded-md"
                      >
                        Download
                      </a>
                    ) : (
                      "No CV"
                    )}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteRow(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
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

export default ApplyData;
