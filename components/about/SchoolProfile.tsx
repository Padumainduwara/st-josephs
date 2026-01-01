"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SchoolProfile() {
  const profileData = [
    { label: "School Started Date", value: "08 August 1942" },
    { label: "Handed over to Govt", value: "15 April 1962" },
    { label: "School Type", value: "1AB (Super Grade)" },
    { label: "Census No (Sensor)", value: "00099" },
    { label: "Province", value: "Western" },
    { label: "District", value: "Colombo" },
    { label: "Zone", value: "Piliyandala" },
    { label: "Division", value: "Dehiwala" },
    { label: "Number of Grades", value: "15 (Grade 1 - 13)" },
    { label: "Number of Classes", value: "60" },
    { label: "School Colours", value: "Maroon & Silver" },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-brand-primary">School Profile</h2>
        
        {/* Table Container with Horizontal Scroll for Mobile */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 overflow-x-auto">
          <Table className="min-w-[600px] md:min-w-full">
            <TableBody>
              {profileData.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50 transition-colors text-sm md:text-lg">
                  <TableCell className="font-semibold text-gray-700 w-1/3 pl-6 md:pl-8 py-4 bg-gray-50/50 whitespace-nowrap md:whitespace-normal">
                    {item.label}
                  </TableCell>
                  <TableCell className="text-gray-900 font-medium py-4 px-6">
                    {item.label === "School Colours" ? (
                      <div className="flex gap-2 items-center">
                        <Badge className="bg-[#800000] hover:bg-[#600000] text-xs md:text-sm px-3 py-1">Maroon</Badge>
                        <Badge variant="outline" className="bg-gray-200 text-gray-800 border-gray-400 text-xs md:text-sm px-3 py-1">Silver</Badge>
                      </div>
                    ) : item.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}