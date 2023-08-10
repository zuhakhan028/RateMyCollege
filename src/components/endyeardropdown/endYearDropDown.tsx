import React, { useState } from 'react';

interface EndDropdownProps {
  // You can add any props here if needed
}

const EndYearDropdown: React.FC<EndDropdownProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string | number>('');
  const currentYear = new Date().getFullYear();

  // Generate an array of the last 5 years, including the current year
  const yearOptions: (string | number)[] = ['End Year', ...Array.from({ length: 5 }, (_, index) => currentYear + index)];
 
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
  
      <select id="yearDropdown" value={selectedYear} onChange={handleYearChange} className="custom-select-year">
        {yearOptions.map((year) => (
          <option key={year} value={year} className="college-start-year">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EndYearDropdown;
