
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type FarmType = "dairy" | "biofloc";

const FarmLayout = () => {
  const { t } = useLanguage();
  const [farmType, setFarmType] = useState<FarmType>("dairy");

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("farm_layout")}
          </h1>
          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            {t("farm_layout_desc")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Tabs
            defaultValue="dairy"
            value={farmType}
            onValueChange={(value) => setFarmType(value as FarmType)}
            className="w-full max-w-4xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="dairy">{t("dairy")}</TabsTrigger>
              <TabsTrigger value="biofloc">{t("biofloc")}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dairy">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    <div className="aspect-video bg-gray-100 relative rounded-md overflow-hidden">
                      {/* Placeholder for farm layout diagram */}
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("cow_shed")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("feed_storage")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("manure_pit")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("water_supply")}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-agrodark">{t("dairy_components")}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("cow_shed")}</h3>
                          <p className="text-gray-700">{t("cow_shed_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("feed_storage")}</h3>
                          <p className="text-gray-700">{t("feed_storage_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("manure_pit")}</h3>
                          <p className="text-gray-700">{t("manure_pit_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("water_supply")}</h3>
                          <p className="text-gray-700">{t("water_supply_desc")}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-agrolight rounded-md">
                      <h3 className="font-bold mb-2">{t("land_requirements")}:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>{t("land_req1")}</li>
                        <li>{t("land_req2")}</li>
                        <li>{t("land_req3")}</li>
                        <li>{t("land_req4")}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="biofloc">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    <div className="aspect-video bg-gray-100 relative rounded-md overflow-hidden">
                      {/* Placeholder for biofloc layout diagram */}
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("fish_tanks")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("aeration")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("water_filters")}</span>
                        </div>
                        <div className="bg-agrolight rounded-md p-4 flex items-center justify-center">
                          <span className="font-bold text-agrodark text-center">{t("drainage")}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-agrodark">{t("biofloc_components")}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("fish_tanks")}</h3>
                          <p className="text-gray-700">{t("fish_tanks_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("aeration")}</h3>
                          <p className="text-gray-700">{t("aeration_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("water_filters")}</h3>
                          <p className="text-gray-700">{t("water_filters_desc")}</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h3 className="font-bold mb-2">{t("drainage")}</h3>
                          <p className="text-gray-700">{t("drainage_desc")}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-agrolight rounded-md">
                      <h3 className="font-bold mb-2">{t("land_requirements")}:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>{t("land_req1")}</li>
                        <li>{t("land_req5")}</li>
                        <li>{t("land_req6")}</li>
                        <li>{t("land_req7")}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default FarmLayout;
