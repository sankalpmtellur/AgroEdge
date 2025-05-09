
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, X } from "lucide-react";
import { useState } from "react";

const SuccessStories = () => {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const successStories = [
    {
      id: 1,
      name: t("name_1"),
      age: 28,
      location: t("location_1"),
      farmType: t("dairy"),
      earningBefore: t("earningBefore_1"),
      earningAfter: t("earningAfter_1"),
      story: t("success_story_1"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video URL
    },
    {
      id: 2,
      name: t("name_2"),
      age: 32,
      location: t("location_2"),
      farmType: t("dairy"),
      earningBefore: t("earningBefore_2"),
      earningAfter: t("earningAfter_2"),
      story: t("success_story_2"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" // Example video URL
    },
    {
      id: 3,
      name: t("name_3"),
      age: 25,
      location: t("location_3"),
      farmType: t("biofloc"),
      earningBefore: t("earningBefore_3"),
      earningAfter: t("earningAfter_3"),
      story: t("success_story_3"),
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      hasVideo: false,
      videoUrl: ""
    },
    {
      id: 4,
      name: t("name_4"),
      age: 30,
      location: t("location_4"),
      farmType: t("dairy"),
      earningBefore: t("earningBefore_4"),
      earningAfter: t("earningAfter_4"),
      story: t("success_story_4"),
      image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      hasVideo: true,
      videoUrl: "./rekha.mp4"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("success_stories")}
          </h1>
          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            {t("success_stories_desc")}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative">
                      <div className="aspect-square">
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {story.hasVideo && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                          onClick={() => setActiveVideo(story.videoUrl)}
                        >
                          <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h2 className="text-xl font-bold mb-2 text-agrodark">{story.name}</h2>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <span className="text-sm text-gray-600">{t("age")}</span>
                          <p className="font-medium">{story.age} years</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">{t("location")}</span>
                          <p className="font-medium">{story.location}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">{t("farm_type")}</span>
                          <p className="font-medium">{story.farmType}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4 p-3 bg-agrolight rounded-md">
                        <div>
                          <span className="text-sm text-gray-600 block">{t("before")}</span>
                          <span className="font-medium">{story.earningBefore}</span>
                        </div>
                        <div className="text-2xl">→</div>
                        <div>
                          <span className="text-sm text-gray-600 block">{t("after")}</span>
                          <span className="font-bold text-agrodark">{story.earningAfter}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 line-clamp-4">{story.story}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe 
                src={activeVideo} 
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Farmer Success Story"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
