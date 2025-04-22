
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const WhoCanApply = () => {
  const { t } = useLanguage();

  const eligibilityCriteria = [
    {
      title: t("age_requirement"),
      description: t("age_requirement_desc"),
      icon: CheckCircle2
    },
    {
      title: t("learning_attitude"),
      description: t("learning_attitude_desc"),
      icon: CheckCircle2
    },
    {
      title: t("background_check"),
      description: t("background_check_desc"),
      icon: CheckCircle2
    },
    {
      title: t("land_availability"),
      description: t("land_availability_desc"),
      icon: CheckCircle2
    },
    {
      title: t("focus_area"),
      description: t("focus_area_desc"),
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("who_can_apply")}
          </h1>
          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            {t("who_can_apply_desc")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-agrodark">{t("eligibility_criteria")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((criterion, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 flex items-start gap-4">
                  <criterion.icon className="h-6 w-6 text-agrodark flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{criterion.title}</h3>
                    <p className="text-gray-700">{criterion.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-agrodark">{t("additional_requirements")}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">{t("land_requirements_title")}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>{t("land_req1")}</li>
                      <li>{t("land_req6")}</li>
                      <li>{t("land_req4")}</li>
                      <li>{t("land_req3")}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">{t("documentation_needed")}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>{t("documentation1")}</li>
                      <li>{t("documentation2")}</li>
                      <li>{t("documentation3")}</li>
                      <li>{t("documentation4")}</li>
                      <li>{t("documentation5")}</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-agrolight rounded-md">
                    <h4 className="font-bold mb-2">{t("important_note")}</h4>
                    <p className="text-gray-700">{t("important_note_text")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoCanApply;
