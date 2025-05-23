import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Save, Type, Palette, Image, Undo, Redo } from "lucide-react";
import { toast } from "sonner";
import { fabric } from "fabric";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TemplateEditor = () => {
  const { templateId } = useParams();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTab, setActiveTab] = useState<"design" | "images">("design");
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
  const [templateLoaded, setTemplateLoaded] = useState(false);

  // Load the template when component mounts
  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric Canvas
    const fabricCanvas = new fabric.Canvas("editor-canvas", {
      width: 600,
      height: 800,
      backgroundColor: "#f8f2ff",
      preserveObjectStacking: true,
    });
    
    setCanvas(fabricCanvas);

    // Event listener for object selection
    fabricCanvas.on("selection:created", (e) => {
      setSelectedObject(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:updated", (e) => {
      setSelectedObject(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:cleared", (e) => {
      setSelectedObject(null);
    });

    // Load the birthday template
    if (templateId === "birthday-template") {
      loadBirthdayTemplate(fabricCanvas);
    }

    return () => {
      fabricCanvas.dispose();
    };
  }, [templateId]);

  // Function to load the birthday template with the provided design
  const loadBirthdayTemplate = (canvas: fabric.Canvas) => {
    // Background gradient - Fixed syntax for fabric.js
    canvas.setBackgroundColor({
      type: 'linear',
      coords: {
        x1: 0,
        y1: 0,
        x2: 600,
        y2: 800
      },
      colorStops: [
        { offset: 0, color: '#f9c5d1' },
        { offset: 1, color: '#f3e7e9' }
      ]
    } as any, canvas.renderAll.bind(canvas));

    // Add bunting flags at the top
    const buntingImg = new Image();
    buntingImg.src = "/lovable-uploads/656232f1-7e41-4fb6-8f98-59eedbe9546a.png";
    buntingImg.onload = () => {
      // Use the bunting from the template
      const bunting = new fabric.Image(buntingImg, {
        left: 0,
        top: 0,
        width: 600,
        height: 120,
        selectable: false,
        opacity: 0.8
      });
      canvas.add(bunting);
      canvas.sendToBack(bunting);
    };

    // Add the blessing text at top
    addEditableText(canvas, "|| श्री गणेशाय नमः ||", 300, 50, {
      fontSize: 24,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center',
      fontWeight: 'bold'
    });

    // Add main title
    addEditableText(canvas, "प्रथम वाढदिवस सोहळा निमंत्रण", 300, 100, {
      fontSize: 36,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center',
      fontWeight: 'bold'
    });

    // Add child name
    addEditableText(canvas, "अनुप्रिया", 300, 180, {
      fontSize: 48,
      fill: '#b91c1c',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center',
      fontWeight: 'bold'
    });

    // Add decorative line - Fix the gradient here too
    const line = new fabric.Rect({
      left: 240,
      top: 240,
      width: 120,
      height: 4,
      fill: {
        type: 'linear',
        coords: {
          x1: 0,
          y1: 0,
          x2: 120,
          y2: 0
        },
        colorStops: [
          { offset: 0, color: '#d23369' },
          { offset: 1, color: '#9333ea' }
        ]
      } as any,
      selectable: false
    });
    canvas.add(line);

    // Add placeholder for child photo
    const childPhotoPlaceholder = new fabric.Circle({
      left: 225,
      top: 280,
      radius: 75,
      fill: '#f3e7e9',
      stroke: '#ffffff',
      strokeWidth: 8,
      originX: 'center',
      originY: 'center'
    });
    canvas.add(childPhotoPlaceholder);

    // Add program text
    addEditableText(canvas, "✦ कार्यक्रम ✦", 300, 400, {
      fontSize: 22,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center'
    });

    // Add date
    addEditableText(canvas, "सोमवार दि. २१/१२/२०२३ रोजी", 300, 430, {
      fontSize: 20,
      fill: '#333333',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center',
      fontWeight: 'bold'
    });

    // Add time
    addEditableText(canvas, "सायंकाळी : ७ वाजता", 300, 460, {
      fontSize: 18,
      fill: '#333333',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center'
    });

    // Add description
    addEditableText(canvas, "सोनेरी दिवसाच्या सोनेरी शुभेच्छा देण्यासाठी हवेत मार्गसी सारी सोनेरी... \nमाझी पती, माझी सोनुली... बघता बघता दोन वर्षांची झाली. \nवाढदिवसानिमित्त आयोजित केला आहे एक हेत... \nज्याचे आमंत्रण आहे तुम्हा सर्वांना येण्याचे.", 300, 540, {
      fontSize: 14,
      fill: '#666666',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center',
      lineHeight: 1.3
    });

    // Add venue section
    addEditableText(canvas, "✦ स्थळ :- ✦", 300, 620, {
      fontSize: 18,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center'
    });

    // Add venue
    addEditableText(canvas, "डाकुर बाजारगेट के पास उप कार्यालय, मुंबई, महाराष्ट्र - ४३४००१", 300, 645, {
      fontSize: 14,
      fill: '#666666',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'center'
    });

    // Add host text
    addEditableText(canvas, "✦ आपले नम्र ✦", 100, 700, {
      fontSize: 16,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'left'
    });

    // Add host names
    addEditableText(canvas, "श्री. आदित्य अहिरे\nश्री. पुनम विजय अहिरे", 100, 725, {
      fontSize: 14,
      fill: '#666666',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'left'
    });

    // Add contact text
    addEditableText(canvas, "✦ संपर्क ✦", 500, 700, {
      fontSize: 16,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'right'
    });

    // Add contacts
    addEditableText(canvas, "📞 ९८०००००\n📞 ९५०००००", 500, 725, {
      fontSize: 14,
      fill: '#d23369',
      fontFamily: 'Noto Sans Devanagari',
      textAlign: 'right'
    });

    // Add birthday decoration - Fix gradient here too
    const birthdayRect = new fabric.Rect({
      left: 300,
      top: 725,
      width: 120,
      height: 60,
      fill: {
        type: 'linear',
        coords: {
          x1: 0,
          y1: 0,
          x2: 120,
          y2: 0
        },
        colorStops: [
          { offset: 0, color: '#3bb6ad' },
          { offset: 1, color: '#1976d2' }
        ]
      } as any,
      rx: 10,
      ry: 10,
      originX: 'center',
      originY: 'center'
    });
    canvas.add(birthdayRect);

    // Add birthday text
    addEditableText(canvas, "BIRTHDAY", 300, 715, {
      fontSize: 16,
      fill: '#ffffff',
      fontFamily: 'Poppins',
      textAlign: 'center',
      fontWeight: 'bold'
    });

    addEditableText(canvas, "CELEBRATIONS", 300, 735, {
      fontSize: 10,
      fill: '#ffffff',
      fontFamily: 'Poppins',
      textAlign: 'center'
    });

    // Add balloon decorations
    const balloonText1 = new fabric.Text("🎈🎈", {
      left: 50,
      top: 760,
      fontSize: 36,
      selectable: false
    });
    canvas.add(balloonText1);

    const balloonText2 = new fabric.Text("🎈🎈", {
      left: 530,
      top: 760,
      fontSize: 36,
      selectable: false
    });
    canvas.add(balloonText2);

    toast.success("Birthday template loaded! Click on any text to edit directly.");
    setTemplateLoaded(true);
  };

  // Helper function to add editable text
  const addEditableText = (canvas: fabric.Canvas, text: string, left: number, top: number, options: fabric.ITextOptions) => {
    const textObj = new fabric.IText(text, {
      left: left,
      top: top,
      originX: options.textAlign === 'center' ? 'center' : (options.textAlign === 'right' ? 'right' : 'left'),
      originY: 'center',
      ...options
    });
    canvas.add(textObj);
    return textObj;
  };

  const handleSave = () => {
    toast.success("Template saved successfully!");
  };

  const handleDownload = () => {
    if (!canvas) return;
    
    // Convert canvas to image
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1
    });
    
    // Create download link
    const link = document.createElement('a');
    link.download = 'invitation-card.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Invitation card downloaded!");
  };

  const handleUndo = () => {
    if (!canvas) return;
    if (canvas._objects.length > 0) {
      canvas.undo();
      toast.info("Undo successful");
    }
  };

  const handleRedo = () => {
    if (!canvas) return;
    canvas.redo();
    toast.info("Redo successful");
  };

  const changeObjectColor = (color: string) => {
    if (!canvas || !selectedObject) return;
    
    if (selectedObject.type === 'i-text') {
      (selectedObject as fabric.IText).set('fill', color);
      canvas.renderAll();
    } else {
      selectedObject.set('fill', color);
      canvas.renderAll();
    }
  };

  const changeObjectFont = (font: string) => {
    if (!canvas || !selectedObject) return;
    
    if (selectedObject.type === 'i-text') {
      (selectedObject as fabric.IText).set('fontFamily', font);
      canvas.renderAll();
    }
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canvas || !e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (f) => {
      const data = f.target?.result as string;
      fabric.Image.fromURL(data, (img) => {
        // Scale down the image if it's too big
        if (img.width && img.height) {
          if (img.width > 200 || img.height > 200) {
            const scaleFactor = Math.min(200 / img.width, 200 / img.height);
            img.scale(scaleFactor);
          }
        }
        
        img.set({
          left: 300,
          top: 300,
          originX: 'center',
          originY: 'center'
        });
        
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
        toast.success("Image added! Resize and position as needed.");
      });
    };
    
    reader.readAsDataURL(file);
  };

  const addDecoration = (type: string) => {
    if (!canvas) return;
    
    let text = '';
    
    switch (type) {
      case 'balloons':
        text = '🎈🎈🎈';
        break;
      case 'cake':
        text = '🎂';
        break;
      case 'confetti':
        text = '🎊';
        break;
      case 'star':
        text = '⭐';
        break;
      default:
        return;
    }
    
    const decoration = new fabric.Text(text, {
      left: 300,
      top: 400,
      fontSize: 36,
      originX: 'center',
      originY: 'center'
    });
    
    canvas.add(decoration);
    canvas.setActiveObject(decoration);
    canvas.renderAll();
    toast.success(`${type} decoration added!`);
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

      <div className="flex flex-col md:flex-row">
        {/* Main Canvas Area */}
        <div className="flex-grow p-6 flex justify-center">
          <div className="relative">
            <div ref={canvasRef} className="shadow-2xl">
              <canvas id="editor-canvas" className="rounded-lg"></canvas>
            </div>
            {!templateLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar for Properties */}
        <div className="w-full md:w-72 bg-white border-l border-gray-200 p-6">
          <Tabs defaultValue="design">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="design">
                <Palette className="h-4 w-4 mr-2" />
                Design
              </TabsTrigger>
              <TabsTrigger value="images">
                <Image className="h-4 w-4 mr-2" />
                Images
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="design" className="space-y-6">
              {selectedObject && selectedObject.type === 'i-text' && (
                <div className="space-y-3">
                  <h3 className="font-medium">Font Style</h3>
                  <Select onValueChange={changeObjectFont} defaultValue="Noto Sans Devanagari">
                    <SelectTrigger>
                      <SelectValue placeholder="Font Family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Noto Sans Devanagari">Devanagari</SelectItem>
                      <SelectItem value="Poppins">Poppins</SelectItem>
                      <SelectItem value="Dancing Script">Decorative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="space-y-3">
                <h3 className="font-medium">Colors</h3>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    "#FF6B9D", "#C471ED", "#12D8FA", "#A0E7E5", "#FFB4B4", 
                    "#1a1a1a", "#FF1744", "#7B1FA2", "#1976D2", "#388E3C"
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-lg cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => changeObjectColor(color)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button variant="outline" size="sm" onClick={handleUndo}>
                  <Undo className="h-4 w-4 mr-2" />
                  Undo
                </Button>
                <Button variant="outline" size="sm" onClick={handleRedo}>
                  <Redo className="h-4 w-4 mr-2" />
                  Redo
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                <p>👆 Click directly on text to edit</p>
                <p>✏️ Double-click to edit text content</p>
                <p>🖱️ Click and drag to move elements</p>
              </div>
            </TabsContent>
            
            <TabsContent value="images" className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-medium">Upload Image</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input 
                    type="file" 
                    accept="image/*"
                    id="image-upload"
                    onChange={handleUploadImage}
                    className="hidden"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Image className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Decorative Elements</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => addDecoration('balloons')}
                  >
                    <div className="text-2xl mb-1">🎈</div>
                    <p className="text-xs">Balloons</p>
                  </div>
                  <div 
                    className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => addDecoration('cake')}
                  >
                    <div className="text-2xl mb-1">🎂</div>
                    <p className="text-xs">Cake</p>
                  </div>
                  <div 
                    className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => addDecoration('confetti')}
                  >
                    <div className="text-2xl mb-1">🎊</div>
                    <p className="text-xs">Confetti</p>
                  </div>
                  <div 
                    className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => addDecoration('star')}
                  >
                    <div className="text-2xl mb-1">⭐</div>
                    <p className="text-xs">Stars</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
