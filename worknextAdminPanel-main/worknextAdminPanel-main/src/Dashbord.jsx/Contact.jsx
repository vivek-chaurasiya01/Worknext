import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import axios from "axios";
import { FaFilePdf, FaFileExcel, FaSyncAlt } from "react-icons/fa";

function Contact() {
  const [contactData, setContactData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
 const api_url = import.meta.env.VITE_API_URL;

  // FETCH DATA
  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const res = await axios.get(`${api_url}/api/contact/contact`);
      
      const dataArray = Array.isArray(res.data.data) ? res.data.data : [];

      setContactData(dataArray);
      setOriginalData(dataArray); // For search reset
    } catch (err) {
      alert("Unable to fetch contact data! " + err);
    }
  };

  // DELETE RECORD
  const deleteRow = async (id) => {
    try {
      await axios.delete(`${api_url}/api/contact/contact/${id}`);
      setContactData(contactData.filter((item) => item._id !== id));
      setOriginalData(originalData.filter((item) => item._id !== id));
    } catch (err) {
      alert("Unable to delete!" + err);
    }
  };

  // ===================== SEARCH =====================
  const handleSearch = (value) => {
    const search = value.toLowerCase();

    if (search.trim() === "") {
      setContactData(originalData);
      return;
    }

    const filtered = originalData.filter((item) =>
      item.name.toLowerCase().includes(search) ||
      item.email.toLowerCase().includes(search) ||
      item.mobile.toLowerCase().includes(search) ||
      item.service.toLowerCase().includes(search) ||
      item.message.toLowerCase().includes(search)
    );

    setContactData(filtered);
  };

  // ===================== EXCEL =====================
  const downloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Contacts");

    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 35 },
      { header: "Mobile", key: "mobile", width: 18 },
      { header: "Service", key: "service", width: 20 },
      { header: "Message", key: "message", width: 60 },
    ];

    // HEADER Style
    sheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF0A1A2F" },
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    contactData.forEach((item) => {
      sheet.addRow({
        name: item.name,
        email: item.email,
        mobile: item.mobile,
        service: item.service,
        message: item.message,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "contact_messages.xlsx");
  };

  // ===================== PDF =====================
  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    doc.setFillColor(10, 26, 47); // dark blue
    doc.rect(0, 0, 210, 18, "F");
    doc.setTextColor(255, 255, 255);

    doc.setFontSize(16);
    doc.text("Contact Messages Report", 10, 12);

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
      doc.text(`Service: ${item.service}`, 10, y + 34);

      const messageLines = doc.splitTextToSize(item.message, 180);
      doc.rect(10, y + 40, 190, messageLines.length * 6 + 8);
      doc.text(messageLines, 12, y + 45);

      y += messageLines.length * 6 + 55;
    });

    doc.save("contact_messages.pdf");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">

        <h1 className="text-3xl font-bold text-gray-800">
          Contact Messages
        </h1>

        {/* SEARCH + BUTTONS ROW */}
        <div className="flex flex-col sm:flex-row items-center gap-3">

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search here…"
            onChange={(e) => handleSearch(e.target.value)}
            className="px-4 py-2 w-60 border rounded-lg shadow-sm outline-none"
          />

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={fetchContactData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 shadow-md"
            >
              <FaSyncAlt size={20} />
              <span className="hidden md:block">Refresh</span>
            </button>

            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md"
            >
              <FaFilePdf size={22} />
              <span className="hidden sm:block">PDF</span>
            </button>

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
        <div className="overflow-x-auto shadow-2xl rounded-xl bg-white">
          <table className="min-w-full border border-gray-200">

            {/* DARK BLUE HEADER */}
            <thead style={{ background: "#0A1A2F" }} className="text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Service</th>
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
                  <td className="p-3">{item.service}</td>

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

export default Contact;
