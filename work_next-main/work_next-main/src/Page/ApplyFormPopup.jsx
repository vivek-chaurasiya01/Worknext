import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function CareerPage() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <div>
            {/* Apply Now Button */}
            <button 
                onClick={() => setOpenForm(true)} 
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Apply Now
            </button>

            {/* Popup */}
            <Dialog 
                header="Apply Now" 
                visible={openForm} 
                style={{ width: '50vw' }}
                onHide={() => setOpenForm(false)}
            >
                <p>Your Form Content Here</p>
            </Dialog>
        </div>
    );
}
