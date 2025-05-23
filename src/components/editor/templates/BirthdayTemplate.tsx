
import { Canvas, ITextOptions, Rect, Circle, Text } from 'fabric';
import { addEditableText } from '@/utils/canvasUtils';

export const loadBirthdayTemplate = (canvas: Canvas) => {
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
  const line = new Rect({
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
  const childPhotoPlaceholder = new Circle({
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
  const birthdayRect = new Rect({
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
  const balloonText1 = new Text("🎈🎈", {
    left: 50,
    top: 760,
    fontSize: 36,
    selectable: false
  });
  canvas.add(balloonText1);

  const balloonText2 = new Text("🎈🎈", {
    left: 530,
    top: 760,
    fontSize: 36,
    selectable: false
  });
  canvas.add(balloonText2);
};
