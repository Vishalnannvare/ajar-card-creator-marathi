
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Save, Type, Palette, Image, Undo, Redo } from "lucide-react";
import { toast } from "sonner";

const TemplateEditor = () => {
  const { templateId } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [templateData, setTemplateData] = useState({
    title: "अनुप्रिया",
    subtitle: "प्रथम वाढदिवस सोहळा निमंत्रण",
    date: "सोमवार दि. २१/१२/२०२३ रोजी",
    time: "सायंकाळी : ७ वाजता",
    venue: "डाकुर बाजारगेट के पास उप कार्यालय, मुंबई, महाराष्ट्र - ४३४००१",
    description: "सोनेरी दिवसाच्या सोनेरी शुभेच्छा देण्यासाठी हवेत मार्गसी सारी सोनेरी... माझी पती, माझी सोनुली... बघता बघता दोन वर्षांची झाली. वाढदिवसानिमित्त आयोजित केला आहे एक हेत... ज्याचे आमंत्रण आहे तुम्हा सर्वांना येण्याचे.",
    hostNames: "श्री. आदित्य अहिरे\nश्री. पुनम विजय अहिरे",
    contact1: "९८०००००",
    contact2: "९५०००००"
  });

  const [activeTab, setActiveTab] = useState<"text" | "design" | "images">("text");

  const fontOptions = [
    { value: "marathi", label: "Noto Sans Devanagari", className: "font-marathi" },
    { value: "english", label: "Poppins", className: "font-english" },
    { value: "decorative", label: "Dancing Script", className: "font-decorative" }
  ];

  useEffect(() => {
    // Initialize canvas or template rendering
    if (templateId === "birthday-template") {
      toast.success("Birthday template loaded! Start customizing your invitation.");
    }
  }, [templateId]);

  const handleTextChange = (field: string, value: string) => {
    setTemplateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download the image
    toast.success("Downloading your invitation card...");
  };

  const handleSave = () => {
    toast.success("Template saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Templates
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-800">Template Editor</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button size="sm" onClick={handleDownload} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
          <div className="p-6">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab("text")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "text" 
                    ? "bg-white text-purple-600 shadow-sm" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Type className="h-4 w-4 mx-auto mb-1" />
                Text
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "design" 
                    ? "bg-white text-purple-600 shadow-sm" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Palette className="h-4 w-4 mx-auto mb-1" />
                Design
              </button>
              <button
                onClick={() => setActiveTab("images")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "images" 
                    ? "bg-white text-purple-600 shadow-sm" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Image className="h-4 w-4 mx-auto mb-1" />
                Images
              </button>
            </div>

            {/* Text Editing Panel */}
            {activeTab === "text" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="title">Child Name (बालाचे नाव)</Label>
                  <Input
                    id="title"
                    value={templateData.title}
                    onChange={(e) => handleTextChange("title", e.target.value)}
                    className="font-marathi text-lg"
                    placeholder="अनुप्रिया"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subtitle">Event Title (कार्यक्रमाचे शीर्षक)</Label>
                  <Input
                    id="subtitle"
                    value={templateData.subtitle}
                    onChange={(e) => handleTextChange("subtitle", e.target.value)}
                    className="font-marathi"
                    placeholder="प्रथम वाढदिवस सोहळा निमंत्रण"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="date">Date (दिनांक)</Label>
                  <Input
                    id="date"
                    value={templateData.date}
                    onChange={(e) => handleTextChange("date", e.target.value)}
                    className="font-marathi"
                    placeholder="सोमवार दि. २१/१२/२०२३ रोजी"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="time">Time (वेळ)</Label>
                  <Input
                    id="time"
                    value={templateData.time}
                    onChange={(e) => handleTextChange("time", e.target.value)}
                    className="font-marathi"
                    placeholder="सायंकाळी : ७ वाजता"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="venue">Venue (ठिकाण)</Label>
                  <Input
                    id="venue"
                    value={templateData.venue}
                    onChange={(e) => handleTextChange("venue", e.target.value)}
                    className="font-marathi"
                    placeholder="कार्यक्रमाचे ठिकाण"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="hostNames">Host Names (आयोजक)</Label>
                  <textarea
                    id="hostNames"
                    value={templateData.hostNames}
                    onChange={(e) => handleTextChange("hostNames", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md font-marathi"
                    rows={3}
                    placeholder="श्री. आदित्य अहिरे"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="contact1">Contact 1</Label>
                    <Input
                      id="contact1"
                      value={templateData.contact1}
                      onChange={(e) => handleTextChange("contact1", e.target.value)}
                      placeholder="९८०००००"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact2">Contact 2</Label>
                    <Input
                      id="contact2"
                      value={templateData.contact2}
                      onChange={(e) => handleTextChange("contact2", e.target.value)}
                      placeholder="९५०००००"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Design Panel */}
            {activeTab === "design" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Font Family</Label>
                  <Select defaultValue="marathi">
                    <SelectTrigger>
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontOptions.map((font) => (
                        <SelectItem key={font.value} value={font.value}>
                          <span className={font.className}>{font.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Background Colors</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {["#FF6B9D", "#C471ED", "#12D8FA", "#A0E7E5", "#FFB4B4", "#FFEAA7"].map((color) => (
                      <div
                        key={color}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                        onClick={() => toast.info(`Background changed to ${color}`)}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Text Colors</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {["#1a1a1a", "#FF1744", "#7B1FA2", "#1976D2", "#388E3C", "#F57C00"].map((color) => (
                      <div
                        key={color}
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                        onClick={() => toast.info(`Text color changed to ${color}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Images Panel */}
            {activeTab === "images" && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Upload Child Photo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Image className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Decorative Elements</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="text-2xl mb-1">🎈</div>
                      <p className="text-xs">Balloons</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="text-2xl mb-1">🎂</div>
                      <p className="text-xs">Cake</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="text-2xl mb-1">🎊</div>
                      <p className="text-xs">Confetti</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="text-2xl mb-1">⭐</div>
                      <p className="text-xs">Stars</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 p-6">
          <Card className="mx-auto max-w-4xl shadow-2xl">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-lg overflow-hidden">
                {/* Template Preview */}
                <div className="aspect-[3/4] p-8 relative">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20"></div>
                  
                  {/* Header with blessing */}
                  <div className="text-center mb-6">
                    <p className="text-red-600 font-marathi text-lg mb-4">|| श्री गणेशाय नमः ||</p>
                    <h1 className="text-4xl font-bold text-pink-600 font-marathi mb-2">{templateData.subtitle}</h1>
                  </div>

                  {/* Child name */}
                  <div className="text-center mb-8">
                    <h2 className="text-6xl font-bold text-pink-700 font-marathi">{templateData.title}</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
                  </div>

                  {/* Child photo placeholder */}
                  <div className="flex justify-center mb-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full border-8 border-white shadow-xl flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/a50baf31-1b08-447c-86c7-fb9e7dc31728.png" 
                        alt="Child photo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Event details */}
                  <div className="text-center mb-8 font-marathi">
                    <p className="text-lg mb-2">✦ कार्यक्रम ✦</p>
                    <p className="text-xl font-semibold mb-4">{templateData.date}</p>
                    <p className="text-lg">{templateData.time}</p>
                  </div>

                  {/* Description */}
                  <div className="text-center mb-8">
                    <p className="font-marathi text-sm leading-relaxed text-gray-700 max-w-2xl mx-auto">
                      {templateData.description}
                    </p>
                  </div>

                  {/* Venue */}
                  <div className="text-center mb-8">
                    <p className="text-red-600 font-marathi mb-2">✦ स्थळ :- </p>
                    <p className="font-marathi text-sm text-gray-700">{templateData.venue}</p>
                  </div>

                  {/* Bottom section with hosts and contacts */}
                  <div className="flex justify-between items-end">
                    <div className="text-left">
                      <p className="text-red-600 font-marathi mb-2">✦ आपले नम्र ✦</p>
                      <p className="font-marathi text-sm whitespace-pre-line">{templateData.hostNames}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg text-white mb-4">
                        <p className="font-bold text-xl">BIRTHDAY</p>
                        <p className="text-sm">CELEBRATIONS</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-red-600 font-marathi mb-2">✦ संपर्क ✦</p>
                      <p className="text-pink-600 text-sm">📞 {templateData.contact1}</p>
                      <p className="text-pink-600 text-sm">📞 {templateData.contact2}</p>
                    </div>
                  </div>

                  {/* Decorative balloons */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl">🎈🎈</div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="text-4xl">🎈🎈</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <Button variant="outline" size="sm">
              <Undo className="h-4 w-4 mr-2" />
              Undo
            </Button>
            <Button variant="outline" size="sm">
              <Redo className="h-4 w-4 mr-2" />
              Redo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
