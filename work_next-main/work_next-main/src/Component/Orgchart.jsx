import React from "react";
import { User } from "lucide-react";

export default function OrgChart() {
  const departments = [
    {
      title: "Operations Team",
      roles: [
        "Operation Manager",
        "Project Co-ordinator",
        "Client Communication Executive",
      ],
    },
    {
      title: "IT & Development Team",
      roles: [
        "Website Developers",
        "App Developers",
        "Software Engineer",
        "AI & Automation Specialists",
        "Backend/Database Engineers",
      ],
    },
    {
      title: "Sales & Marketing Team",
      roles: ["Digital Marketing & Advertising", "Sales & Lead Acquisition"],
    },
    {
      title: "Graphic Designing & Creative Team",
      roles: [
        "Graphic Designers",
        "UI/UX Designers",
        "Motion Graphics / Video Editors",
      ],
    },
    {
      title: "Business Setup & Market Research Team",
      roles: [
        "Business Consultant",
        "PRO Services Executive",
        "Market Research Analyst",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-1">
            Organization Structure
          </h2>
          <p className="text-gray-600 font-medium">Our Team Hierarchy</p>
        </div>

        {/* Founder */}
        <div className="flex flex-col items-center mb-6">
          <NodeCard title="Founder" iconSize={28} cardSize={14} />
        </div>

        {/* Connector Line to MD */}
        <ConnectorLine height="h-12" />

        {/* Managing Director */}
        <div className="flex flex-col items-center mb-6">
          <NodeCard title="Managing Director" iconSize={24} cardSize={12} />
        </div>

        {/* Connector Line from MD to Departments */}
        <ConnectorLine height="h-12" />

        {/* Horizontal Line connecting departments */}
        <div className="relative mb-8  ">
          <div className="absolute left-0 right-0 top-0.5 border-t-[3px] border-dashed border-gray-800"></div>
          <div className="flex justify-between max-w-5xl mx-auto relative">
            {departments.map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow"
              ></div>
            ))}
          </div>
        </div>

        {/* Vertical lines from horizontal line to department cards */}
        <div className="flex justify-between max-w-5xl mx-auto mb-6">
          {departments.map((_, i) => (
            <div key={i} className="flex justify-center">
              <div className="w-0.5 h-6 border-l-[3px] border-dashed border-gray-800"></div>
            </div>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} title={dept.title} roles={dept.roles} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Node Card (Founder / MD)
function NodeCard({ title, iconSize, cardSize }) {
  return (
    <div className="bg-green-100 rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-200">
      <div className="flex flex-col items-center">
        <div
          className={`w-${cardSize} h-${cardSize} bg-green-600 rounded-full flex items-center justify-center mb-2`}
        >
          <User className="text-white" size={iconSize} />
        </div>
        <h3 className="text-md font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

// Vertical Connector Line
function ConnectorLine({ height }) {
  return (
    <div className="flex justify-center mb-6">
      <div
        className={`w-0.5 ${height} border-l-[3px] border-dashed border-gray-800`}
      ></div>
    </div>
  );
}

// Department Card
function DepartmentCard({ title, roles }) {
  return (
    <div className="bg-green-100 rounded-xl p-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-200">
      {/* Department Head */}
      <div className="flex flex-col items-center mb-3">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-1">
          <User className="text-white" size={20} />
        </div>
        <h4 className="text-center font-bold text-sm text-gray-800">{title}</h4>
      </div>

      {/* Roles */}
      <div className="space-y-1">
        {roles.map((role, i) => (
          <div key={i}>
            {i > 0 && (
              <div className="flex justify-center my-1">
                <div className="w-0.5 h-4 border-l-[3px] border-dashed border-gray-800"></div>
              </div>
            )}
            <div className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-200 border border-green-100">
              <div className="flex items-center justify-center gap-1">
                <User size={12} className="text-green-600 flex-shrink-0" />
                <p className="text-xs font-semibold text-gray-700 text-center">
                  {role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
