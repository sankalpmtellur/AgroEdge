import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ProfitCalculator from "@/components/ProfitCalculator";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQAccordion from "@/components/FAQAccordion";

const Index = () => {
  const { t } = useLanguage();
  
  const faqItems = [
    {
      question: t("faq_fail"),
      answer: t("faq_fail_answer")
    },
    {
      question: t("faq_both"),
      answer: t("faq_both_answer")
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-agrolight py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-agrodark leading-tight">
                {t("hero_headline")}
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                {t("hero_subtext")}
              </p>
              <p className="text-sm md:text-base bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <strong>Note:</strong> {t("hero_note")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button size="lg" className="bg-agrodark hover:bg-agrodark/90 text-white w-full sm:w-auto">
                    {t("apply_now")}
                  </Button>
                </Link>
                <Link to="/success-stories">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {t("watch_success")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" 
                  alt="Profitable farming" 
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-agrodark">
            {t("how_it_works")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative hover-scale">
              <div className="w-16 h-16 bg-agrolight rounded-full flex items-center justify-center text-agrodark text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-agrodark">{t("step_training")}</h3>
              <p className="text-gray-600">{t("step_training_desc")}</p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <svg className="w-8 h-8 text-agrodark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative hover-scale">
              <div className="w-16 h-16 bg-agrolight rounded-full flex items-center justify-center text-agrodark text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-agrodark">{t("step_loan")}</h3>
              <p className="text-gray-600">{t("step_loan_desc")}</p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <svg className="w-8 h-8 text-agrodark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative hover-scale">
              <div className="w-16 h-16 bg-agrolight rounded-full flex items-center justify-center text-agrodark text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-agrodark">{t("step_setup")}</h3>
              <p className="text-gray-600">{t("step_setup_desc")}</p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                <svg className="w-8 h-8 text-agrodark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="w-16 h-16 bg-agrolight rounded-full flex items-center justify-center text-agrodark text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-agrodark">{t("step_earn")}</h3>
              <p className="text-gray-600">{t("step_earn_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profit Calculator Section */}
      <section className="section-padding bg-agrolight">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-agrodark">
                {t("profit_calculator")}
              </h2>
              <p className="text-gray-700">
                {t("calculator_desc")}
              </p>
              <Link to="/calculator">
                <Button className="bg-agrodark hover:bg-agrodark/90 text-white">
                  {t("view_calculator")}
                </Button>
              </Link>
            </div>
            <div>
              <ProfitCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Loan & EMI Details */}
      <section className="section-padding bg-agrolight">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-agrodark">
            {t("loan_details")}
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                <h3 className="font-medium text-gray-600">{t("total_investment")}</h3>
                <p className="text-xl font-bold text-agrodark">₹8,00,000</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                <h3 className="font-medium text-gray-600">{t("monthly_emi")}</h3>
                <p className="text-xl font-bold text-agrodark">₹15,640</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                <h3 className="font-medium text-gray-600">{t("duration")}</h3>
                <p className="text-xl font-bold text-agrodark">6 Years</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-md bg-gray-50">
                <h3 className="font-medium text-gray-600">{t("includes")}</h3>
                <p className="text-base font-medium text-agrodark">6 Cattle + Training + Setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-agrodark">
            {t("frequently_asked")}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
            
            <div className="mt-8 text-center">
              <Link to="/faq">
                <Button variant="outline">
                  {t("view_all_faqs")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
