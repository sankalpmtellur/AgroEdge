
import React, { useState, useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, PieChart, Wallet } from "lucide-react";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
);

const ProfitCalculatorComponent = () => {
  const { t } = useLanguage();
  const [farmType, setFarmType] = useState<'dairy' | 'biofloc'>('dairy');
  const [numUnits, setNumUnits] = useState(6); // Cows or Tanks
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyEMI] = useState(15640); // Fixed EMI amount
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  useEffect(() => {
    // Calculate income based on new logic
    let income = 0;
    if (farmType === 'dairy') {
      income = numUnits * 15000; // ₹15,000 income per cow
    } else {
      income = numUnits * 22000; // ₹22,000 income per tank
    }
    setMonthlyIncome(income);
    setMonthlyProfit(income - monthlyEMI); // Profit is income minus EMI
  }, [farmType, numUnits, monthlyEMI]);

  // Generate monthly data for 12 months
  const generateMonthlyData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const monthIndex = i + 1;
      // Add slight variations to make chart more interesting
      const variationFactor = 0.95 + (Math.random() * 0.1); // 0.95 to 1.05 variation
      return {
        month: t("month") + ` ${monthIndex}`,
        income: Math.round(monthlyIncome * variationFactor),
        profit: Math.round((monthlyIncome * variationFactor) - monthlyEMI),
        emi: monthlyEMI
      };
    });
  };

  const monthlyData = generateMonthlyData();

  // Bar chart configuration
  const barChartData = {
    labels: monthlyData.map(d => d.month),
    datasets: [
      {
        label: t("monthly_income"),
        data: monthlyData.map(d => d.income),
        backgroundColor: 'rgba(53, 162, 75, 0.7)',
        borderColor: 'rgba(53, 162, 75, 1)',
        borderWidth: 1
      },
      {
        label: t("monthly_emi"),
        data: monthlyData.map(d => d.emi),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: t("monthly_profit"),
        data: monthlyData.map(d => d.profit),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t("monthly_breakdown")
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '₹'
        }
      }
    }
  };

  // Pie chart for income distribution
  const pieChartData = {
    labels: [t("monthly_emi"), t("monthly_profit")],
    datasets: [
      {
        data: [monthlyEMI, Math.max(0, monthlyProfit)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t("income_distribution")
      }
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("setup_options")}</h3>
              <div className="space-y-6">
                <Select 
                  value={farmType}
                  onValueChange={value => setFarmType(value as 'dairy' | 'biofloc')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("select_farm_type")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dairy">{t("dairy")}</SelectItem>
                    <SelectItem value="biofloc">{t("biofloc")}</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="unit-slider" className="text-sm font-medium text-gray-700">
                      {farmType === 'dairy' ? t("number_of_cows") : t("number_of_tanks")}
                    </label>
                    <span className="text-sm text-gray-500">{numUnits}</span>
                  </div>
                  <Slider
                    id="unit-slider"
                    min={1}
                    max={12}
                    step={1}
                    value={[numUnits]}
                    onValueChange={(value) => setNumUnits(value[0])}
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-agrolight rounded-md flex flex-col items-center">
                  <Wallet className="text-agrodark mb-2" />
                  <h3 className="font-semibold mb-1">{t("monthly_income")}</h3>
                  <p className="text-xl font-bold text-agrodark">₹{monthlyIncome.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-agrolight rounded-md flex flex-col items-center">
                  <BarChart className="text-agrodark mb-2" />
                  <h3 className="font-semibold mb-1">{t("monthly_profit")}</h3>
                  <p className="text-xl font-bold text-agrodark">₹{Math.max(0, monthlyProfit).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("income_distribution")}</h3>
              <div className="h-64 w-full">
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">{t("monthly_forecast")}</h3>
            <div className="h-80 w-full">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t("month")}</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t("monthly_income")}</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t("monthly_emi")}</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t("monthly_profit")}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {monthlyData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2 whitespace-nowrap">{item.month}</td>
                    <td className="px-4 py-2 text-right whitespace-nowrap">₹{item.income.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right whitespace-nowrap">₹{item.emi.toLocaleString()}</td>
                    <td className="px-4 py-2 text-right whitespace-nowrap">₹{Math.max(0, item.profit).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfitCalculatorComponent;
