export interface Product {
  id: string;
  englishName: string;
  marathiName: string;
  subtitle: string;
  image: string;
  description: string;
  benefits: string[];
  recommendedCrops: string[];
  applicationMethod: {
    spray: string;
    drip: string;
  };
  packaging: string;
  slogan: string;
}

export const products: Product[] = [
  {
    id: "calciplex-11",
    englishName: "CALCIPLEX-11",
    subtitle: "Liquid Calcium -11%, 100% Water Soluble Fertilizer",
    marathiName: "कॅल्शियमची कमतरता दूर... पिकांचा दर्जा भरपूर !",
    image: "/products/calciplex11-new.png",
    description: "कॅल्शियमयुक्त संतुलित पोषणासाठी CALCIPLEX-11 हे एक उत्कृष्ट उत्पादन आहे. हे फळांची गुणवत्ता सुधारते आणि पिकांचा दर्जा वाढवते.",
    benefits: [
      "फळांची गुणवत्ता सुधारते",
      "फुलगळ कमी होते",
      "फळ फुटणे / क्रॅकिंग कमी होते",
      "मुळांची वाढ चांगली होते",
      "कॅल्शियमची कमतरता भरून निघते"
    ],
    recommendedCrops: ["मिरची", "टोमॅटो", "द्राक्ष", "डाळिंब", "कापूस", "इतर पिके"],
    applicationMethod: {
      spray: "2 ते 3 ml प्रति लिटर पाणी (15 दिवसांच्या अंतराने फवारणी करावी)",
      drip: "250 ते 500 ml प्रति एकर (पिकांनुसार मात्रा बदलू शकते)"
    },
    packaging: "500 ml",
    slogan: "कॅल्शियमयुक्त संतुलित पोषणासाठी... निवडा CALCIPLEX-11"
  },
  {
    id: "mg-pro",
    englishName: "MG-PRO",
    subtitle: "Calcium Nitrate fortified with Magnesium (Suspension), 100% Water Soluble Fertilizer",
    marathiName: "कॅल्शियम व मॅग्नेशियम युक्त... पिकांचा दर्जा भरपूर !",
    image: "/products/mgpro-new.png",
    description: "कॅल्शियम व मॅग्नेशियमयुक्त संपूर्ण पोषणासाठी MG-PRO उपयुक्त आहे. यामुळे पिकांची वाढ चांगली होऊन उत्कृष्ट उत्पादन मिळते.",
    benefits: [
      "फळांची गुणवत्ता सुधारते",
      "फुलगळ कमी होते",
      "फळ फुटणे / क्रॅकिंग कमी होते",
      "मुळांची वाढ चांगली होते",
      "कॅल्शियम व मॅग्नेशियमची कमतरता भरून काढते"
    ],
    recommendedCrops: ["मिरची", "टोमॅटो", "द्राक्ष", "डाळिंब", "कापूस", "इतर पिके"],
    applicationMethod: {
      spray: "2 ते 3 ml प्रति लिटर पाणी (15 दिवसांच्या अंतराने फवारणी करावी)",
      drip: "250 ते 500 ml प्रति एकर (पिकांनुसार मात्रा बदलू शकते)"
    },
    packaging: "250 ml",
    slogan: "कॅल्शियम व मॅग्नेशियमयुक्त संपूर्ण पोषणासाठी... निवडा MG-PRO"
  },
  {
    id: "phyto-zinc",
    englishName: "PHYTO ZINC",
    subtitle: "Zinc Oxide Suspension Concentrate (39.5% Zinc), 100% Water Soluble Fertilizer",
    marathiName: "झिंकची संपूर्ण पूर्तता... पिकांचा दर्जा भरपूर !",
    image: "/products/phytozinc-new.png",
    description: "पिकांमधील झिंकची कमतरता दूर करण्यासाठी PHYTO ZINC अत्यंत प्रभावी आहे. यामुळे पिकांची प्रकाशसंश्लेषण क्षमता वाढते.",
    benefits: [
      "झिंकची कमतरता दूर करते",
      "वनस्पतीची वाढ सुधारते",
      "फुलधारणा व फळधारणा वाढते",
      "क्लोरोसिस (पिवळे पडणे) कमी करते",
      "प्रकाशसंश्लेषण क्षमता वाढवते"
    ],
    recommendedCrops: ["मिरची", "टोमॅटो", "द्राक्ष", "डाळिंब", "कापूस", "इतर पिके"],
    applicationMethod: {
      spray: "2 ते 3 ml प्रति लिटर पाणी (15 दिवसांच्या अंतराने फवारणी करावी)",
      drip: "250 ते 500 ml प्रति एकर (पिकांनुसार मात्रा बदलू शकते)"
    },
    packaging: "250 ml",
    slogan: "झिंकची संपूर्ण पूर्तता... निरोगी पिके, भरघोस उत्पादन ! PHYTO ZINC"
  },
  {
    id: "nutri-plus",
    englishName: "NUTRI PLUS",
    subtitle: "COMPLETE WATER SOLUBLE LIQUID MULTI MICRONUTRIENT FERTILIZER",
    marathiName: "संपूर्ण पोषण... निरोगी पीक, भरघोस उत्पादन !",
    image: "/products/nutriplus-new.png",
    description: "सर्व सूक्ष्म अन्नद्रव्यांचा संतुलित पुरवठा करून पिकांचे संपूर्ण पोषण करण्यासाठी NUTRI PLUS तयार करण्यात आले आहे.",
    benefits: [
      "पिकांची वाढ व विकास सुधारते",
      "पोषक तत्त्वांची कमतरता दूर करते",
      "अन्नद्रव्ये शोषण क्षमता वाढवते",
      "उत्पादन व गुणवत्ता वाढवते",
      "सर्व सूक्ष्म अन्नद्रव्यांचा संतुलित पुरवठा",
      "पीक तणाव सहनशीलता वाढवते"
    ],
    recommendedCrops: ["मिरची", "टोमॅटो", "द्राक्ष", "डाळिंब", "कापूस", "इतर पिके"],
    applicationMethod: {
      spray: "2 ते 3 ml प्रति लिटर पाणी (15 दिवसांच्या अंतराने फवारणी करावी)",
      drip: "250 ते 500 ml प्रति एकर (ठिबकद्वारे मातीमधून द्यावे)"
    },
    packaging: "500 ml",
    slogan: "संपूर्ण पोषण... निरोगी पीक, भरघोस उत्पादन ! निवडा NUTRI PLUS"
  }
];
