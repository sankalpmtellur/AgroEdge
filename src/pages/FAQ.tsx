
import { useLanguage } from "@/contexts/LanguageContext";
import FAQAccordion from "@/components/FAQAccordion";

const FAQ = () => {
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
    {
      question: t("faq_emi"),
      answer: t("faq_emi_answer")
    },
    {
      question: t("faq_experience"),
      answer: t("faq_experience_answer")
    },
    {
      question: t("faq_cost"),
      answer: t("faq_cost_answer")
    },
    {
      question: t("faq_included"),
      answer: t("faq_included_answer")
    },
    {
      question: t("faq_rented"),
      answer: t("faq_rented_answer")
    },
    {
      question: t("faq_training"),
      answer: t("faq_training_answer")
    },
    {
      question: t("faq_women"),
      answer: t("faq_women_answer")
    },
    {
      question: t("faq_visit"),
      answer: t("faq_visit_answer")
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("frequently_asked")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
