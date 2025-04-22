
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
      name: "Rajesh Kumar",
      age: 28,
      location: "Haryana",
      farmType: t("dairy"),
      earningBefore: "₹12,000/month",
      earningAfter: "₹42,000/month",
      story: "After completing my training, I set up my dairy farm with 6 high-yield cows. The initial months were challenging, but with the support from the AgroEdge team, I quickly learned how to optimize my operations. Now I'm earning more than triple what I used to make as a factory worker. The best part is that I'm my own boss and can spend more time with my family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video URL
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 32,
      location: "Punjab",
      farmType: t("dairy"),
      earningBefore: "₹8,000/month",
      earningAfter: "₹35,000/month",
      story: "As a woman, I faced many challenges when I decided to start farming. AgroEdge not only provided financial support but also gave me the confidence to succeed. The comprehensive training covered everything from cattle management to financial planning. Today, I run a successful dairy farm and have inspired three other women in my village to join the program.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" // Example video URL
    },
    {
      id: 3,
      name: "Amit Patel",
      age: 25,
      location: "Gujarat",
      farmType: t("biofloc"),
      earningBefore: "₹15,000/month",
      earningAfter: "₹38,000/month",
      story: "I was skeptical about biofloc farming initially, but the science behind it made sense during the training. The setup was quick, and within three months, I had my first harvest. The demand for fish in my region is high, and I'm able to sell everything I produce. The biofloc system requires less land than traditional fish farming, which was perfect for me.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      hasVideo: false,
      videoUrl: ""
    },
    {
      id: 4,
      name: "Sunita Devi",
      age: 30,
      location: "Bihar",
      farmType: t("dairy"),
      earningBefore: "₹10,000/month",
      earningAfter: "₹40,000/month",
      story: "I joined the program after my husband fell ill and couldn't continue working. The zero upfront cost was what attracted me since we had limited savings. The AgroEdge team helped me set up everything from scratch. Now, not only am I earning enough to support my family but also saving for my children's education. The regular veterinary support from the program ensures my cattle stay healthy.",
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
