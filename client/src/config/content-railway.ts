// EVERfor Content Configuration - Railway Version
// Update video paths, contact info, and messaging here

export const content = {
  // Company branding
  companyName: "EVERfor",
  tagline: "Their stories deserve to live forever",
  
  // Contact information
  email: "blake@everfor.family",
  calendlyUrl: "https://calendly.com/blakenolanbrown/legacy-video-discovery-call",
  
  // Video content - Static serving from /videos/
  videos: {
    founder: "/videos/founder-video.mp4",
    essential: "/videos/essential-intro.mp4", 
    signature: "/videos/signature-intro.mp4",
    eternal: "/videos/eternal-intro.mp4",
    jackClip: "/videos/jack-clip.mp4",
    nitaClip: "/videos/nita-clip.mp4"
  },
  
  // Service packages
  packages: [
    {
      name: "Essential",
      price: "$5,000",
      description: "A heartfelt 30-minute session capturing the essence of your loved one's story",
      features: [
        "30-minute filmed interview",
        "Professional single-camera setup", 
        "Basic color correction",
        "Digital delivery within 2 weeks",
        "1 revision included"
      ],
      isPopular: false
    },
    {
      name: "Signature", 
      price: "$10,000",
      description: "An immersive 60-minute experience with cinematic quality and personal artifacts",
      features: [
        "60-minute comprehensive interview",
        "Multi-camera cinematic setup",
        "Professional lighting & audio",
        "Personal photo/artifact integration", 
        "Premium color grading",
        "Digital + physical delivery",
        "3 revisions included"
      ],
      isPopular: true
    },
    {
      name: "Eternal",
      price: "$20,000", 
      description: "The complete legacy experience with multiple sessions and extended family",
      features: [
        "Multiple 90-minute sessions",
        "Full production crew",
        "Multiple locations available",
        "Extended family interviews",
        "Professional documentary editing",
        "Archive-quality preservation",
        "Custom presentation formats",
        "Unlimited revisions"
      ],
      isPopular: false
    }
  ],

  // Couples pricing
  couplesPricing: [
    {
      package: "Essential",
      individual: "$5,000",
      couples: "$7,500",
      savings: "$2,500",
      description: "Two 30-minute individual sessions"
    },
    {
      package: "Signature", 
      individual: "$10,000",
      couples: "$15,000", 
      savings: "$5,000",
      description: "Two 60-minute cinematic sessions"
    },
    {
      package: "Eternal",
      individual: "$20,000",
      couples: "$30,000",
      savings: "$10,000", 
      description: "Complete legacy documentation"
    }
  ],

  // Navigation
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" }
  ],

  // Call-to-action text
  ctaText: "Book a Legacy Session",
  
  // Footer content
  footerTagline: "Preserving the essence of those who matter most"
};