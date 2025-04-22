
import { useLanguage } from "@/contexts/LanguageContext";
import ProfitCalculatorComponent from "@/components/ProfitCalculator";

const ProfitCalculator = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("profit_calculator")}
          </h1>
          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            {t("calculator_desc")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <ProfitCalculatorComponent />

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-agrodark">{t("calculator_usage")}</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>{t("calculator_step1")}</li>
              <li>{t("calculator_step2")}</li>
              <li>{t("calculator_step3")}</li>
              <li>{t("calculator_step4")}</li>
            </ol>
            
            <div className="mt-8 p-4 bg-agrolight rounded-md">
              <h3 className="font-bold mb-2">{t("calculator_notes")}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>{t("calculator_note1")}</li>
                <li>{t("calculator_note2")}</li>
                <li>{t("calculator_note3")}</li>
                <li>{t("calculator_note4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfitCalculator;
