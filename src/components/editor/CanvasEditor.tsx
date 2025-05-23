
import { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import { toast } from "sonner";

interface CanvasEditorProps {
  templateId: string | undefined;
  onCanvasReady: (canvas: fabric.Canvas) => void;
  onObjectSelected: (object: fabric.Object | null) => void;
  onTemplateLoaded: () => void;
}

export const CanvasEditor = ({ 
  templateId, 
  onCanvasReady, 
  onObjectSelected,
  onTemplateLoaded 
}: CanvasEditorProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric Canvas
    const fabricCanvas = new fabric.Canvas("editor-canvas", {
      width: 600,
      height: 800,
      backgroundColor: "#f8f2ff",
      preserveObjectStacking: true,
    });
    
    onCanvasReady(fabricCanvas);

    // Event listener for object selection
    fabricCanvas.on("selection:created", (e) => {
      onObjectSelected(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:updated", (e) => {
      onObjectSelected(fabricCanvas.getActiveObject());
    });

    fabricCanvas.on("selection:cleared", (e) => {
      onObjectSelected(null);
    });

    // Load the birthday template
    if (templateId === "birthday-template") {
      loadBirthdayTemplate(fabricCanvas);
    }

    return () => {
      fabricCanvas.dispose();
    };
  }, [templateId, onCanvasReady, onObjectSelected]);

  // Function to load the birthday template with the provided design
  const loadBirthdayTemplate = (canvas: fabric.Canvas) => {
    // Background gradient
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
    const buntingImg = document.createElement('img');
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

    // Add decorative line
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

    // Add birthday decoration
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
    onTemplateLoaded();
    setLoading(false);
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

  return (
    <div className="relative">
      <div ref={canvasRef} className="shadow-2xl">
        <canvas id="editor-canvas" className="rounded-lg"></canvas>
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
