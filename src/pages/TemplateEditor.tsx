
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, ImageIcon } from "lucide-react";

// Import our components
import { CanvasEditor } from "@/components/editor/CanvasEditor";
import { DesignPanel } from "@/components/editor/DesignPanel";
import { ImagesPanel } from "@/components/editor/ImagesPanel";
import { EditorHeader } from "@/components/editor/EditorHeader";

const TemplateEditor = () => {
  const { templateId } = useParams();
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTab, setActiveTab] = useState<"design" | "images">("design");
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
  const [templateLoaded, setTemplateLoaded] = useState(false);

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
    link.download = `${templateId || 'invitation-card'}.png`;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Invitation card downloaded!");
  };

  const handleUndo = () => {
    if (!canvas) return;
    if (canvas._objects && canvas._objects.length > 0) {
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
      <EditorHeader onSave={handleSave} onDownload={handleDownload} />

      <div className="flex flex-col md:flex-row">
        {/* Main Canvas Area */}
        <div className="flex-grow p-6 flex justify-center">
          <CanvasEditor
            templateId={templateId}
            onCanvasReady={setCanvas}
            onObjectSelected={setSelectedObject}
            onTemplateLoaded={() => setTemplateLoaded(true)}
          />
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
                <ImageIcon className="h-4 w-4 mr-2" />
                Images
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="design">
              <DesignPanel
                selectedObject={selectedObject}
                onFontChange={changeObjectFont}
                onColorChange={changeObjectColor}
                onUndo={handleUndo}
                onRedo={handleRedo}
              />
            </TabsContent>
            
            <TabsContent value="images">
              <ImagesPanel
                onImageUpload={handleUploadImage}
                onDecorationAdd={addDecoration}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
