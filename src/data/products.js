// Product catalogue. Edit prices / add items here - the whole store updates automatically.
// Prices are in USD. Change CURRENCY and format in App.js if you want PKR, GBP, etc.

export const CATEGORIES = [
  { id: "all", label: "All", icon: "🛒" },
  { id: "gaming-pc", label: "Gaming PCs", icon: "🎮" },
  { id: "workstation", label: "Workstations", icon: "🖥️" },
  { id: "cpu", label: "Processors", icon: "🧠" },
  { id: "gpu", label: "Graphics Cards", icon: "🎞️" },
  { id: "motherboard", label: "Motherboards", icon: "🔌" },
  { id: "ram", label: "Memory (RAM)", icon: "💾" },
  { id: "storage", label: "Storage", icon: "💽" },
  { id: "psu", label: "Power Supplies", icon: "⚡" },
  { id: "case", label: "Cases", icon: "🗄️" },
  { id: "cooling", label: "Cooling", icon: "❄️" },
  { id: "monitor", label: "Monitors", icon: "📺" },
  { id: "peripheral", label: "Peripherals", icon: "⌨️" },
  { id: "network", label: "Networking", icon: "📡" },
  { id: "accessory", label: "Accessories & Cables", icon: "🔧" },
];

const products = [
  // ---------- Gaming PCs ----------
  { id: 1, name: "Titan X Ultra Gaming PC", brand: "NovaBuild", category: "gaming-pc", price: 3299, rating: 4.9, stock: 4, badge: "Best Seller",
    specs: ["Ryzen 9 9950X", "RTX 5080 16GB", "64GB DDR5-6000", "2TB NVMe Gen5", "360mm AIO"], added: 18 },
  { id: 2, name: "Falcon Pro Gaming PC", brand: "NovaBuild", category: "gaming-pc", price: 1899, rating: 4.7, stock: 9, badge: "",
    specs: ["Core i7-14700F", "RTX 5070 12GB", "32GB DDR5-5600", "1TB NVMe", "240mm AIO"], added: 15 },
  { id: 3, name: "Rookie Starter Gaming PC", brand: "PixelForge", category: "gaming-pc", price: 899, rating: 4.4, stock: 15, badge: "Value",
    specs: ["Ryzen 5 7500F", "RTX 5060 8GB", "16GB DDR5", "512GB NVMe", "Air cooler"], added: 10 },
  { id: 4, name: "Stealth Mini ITX Gaming PC", brand: "PixelForge", category: "gaming-pc", price: 1499, rating: 4.6, stock: 6, badge: "",
    specs: ["Core i5-14600K", "RTX 5070 12GB", "32GB DDR5", "1TB NVMe", "SFX 750W Gold"], added: 20 },
  { id: 5, name: "Inferno RGB Gaming PC", brand: "Cyberion", category: "gaming-pc", price: 2299, rating: 4.8, stock: 0, badge: "",
    specs: ["Ryzen 7 9800X3D", "RTX 5070 Ti 16GB", "32GB DDR5-6000", "2TB NVMe", "Liquid cooled"], added: 22 },

  // ---------- Workstations ----------
  { id: 6, name: "Creator Pro Workstation", brand: "Cyberion", category: "workstation", price: 4499, rating: 4.8, stock: 3, badge: "Pro",
    specs: ["Threadripper 7960X", "RTX 5000 Ada 32GB", "128GB ECC DDR5", "4TB NVMe RAID", "1000W Platinum"], added: 12 },
  { id: 7, name: "Studio Edit Workstation", brand: "NovaBuild", category: "workstation", price: 2699, rating: 4.6, stock: 7, badge: "",
    specs: ["Core i9-14900K", "RTX 5070 Ti", "64GB DDR5", "2TB NVMe + 4TB HDD", "360mm AIO"], added: 9 },

  // ---------- CPUs ----------
  { id: 8, name: "Ryzen 9 9950X", brand: "AMD", category: "cpu", price: 549, rating: 4.8, stock: 20, badge: "",
    specs: ["16 cores / 32 threads", "Up to 5.7GHz", "AM5", "170W TDP"], added: 21 },
  { id: 9, name: "Ryzen 7 9800X3D", brand: "AMD", category: "cpu", price: 479, rating: 4.9, stock: 8, badge: "Top Gaming CPU",
    specs: ["8 cores / 16 threads", "3D V-Cache", "AM5", "120W TDP"], added: 23 },
  { id: 10, name: "Ryzen 5 7500F", brand: "AMD", category: "cpu", price: 149, rating: 4.5, stock: 40, badge: "Value",
    specs: ["6 cores / 12 threads", "Up to 5.0GHz", "AM5", "65W TDP"], added: 8 },
  { id: 11, name: "Core i9-14900K", brand: "Intel", category: "cpu", price: 519, rating: 4.5, stock: 14, badge: "",
    specs: ["24 cores (8P+16E)", "Up to 6.0GHz", "LGA1700", "125W base"], added: 14 },
  { id: 12, name: "Core i7-14700F", brand: "Intel", category: "cpu", price: 329, rating: 4.6, stock: 22, badge: "",
    specs: ["20 cores (8P+12E)", "Up to 5.4GHz", "LGA1700", "65W base"], added: 13 },
  { id: 13, name: "Core i5-14600K", brand: "Intel", category: "cpu", price: 279, rating: 4.6, stock: 25, badge: "",
    specs: ["14 cores (6P+8E)", "Up to 5.3GHz", "LGA1700", "125W base"], added: 13 },

  // ---------- GPUs ----------
  { id: 14, name: "GeForce RTX 5080 16GB", brand: "NVIDIA", category: "gpu", price: 1199, rating: 4.8, stock: 5, badge: "",
    specs: ["16GB GDDR7", "DLSS 4", "PCIe 5.0", "360W"], added: 24 },
  { id: 15, name: "GeForce RTX 5070 Ti 16GB", brand: "NVIDIA", category: "gpu", price: 799, rating: 4.7, stock: 10, badge: "Popular",
    specs: ["16GB GDDR7", "DLSS 4", "PCIe 5.0", "300W"], added: 24 },
  { id: 16, name: "GeForce RTX 5070 12GB", brand: "NVIDIA", category: "gpu", price: 569, rating: 4.6, stock: 18, badge: "",
    specs: ["12GB GDDR7", "DLSS 4", "PCIe 5.0", "250W"], added: 23 },
  { id: 17, name: "GeForce RTX 5060 8GB", brand: "NVIDIA", category: "gpu", price: 299, rating: 4.3, stock: 30, badge: "Value",
    specs: ["8GB GDDR7", "DLSS 4", "PCIe 5.0", "145W"], added: 20 },
  { id: 18, name: "Radeon RX 9070 XT 16GB", brand: "AMD", category: "gpu", price: 649, rating: 4.7, stock: 11, badge: "",
    specs: ["16GB GDDR6", "FSR 4", "PCIe 5.0", "304W"], added: 22 },
  { id: 19, name: "Radeon RX 9060 XT 16GB", brand: "AMD", category: "gpu", price: 369, rating: 4.5, stock: 17, badge: "",
    specs: ["16GB GDDR6", "FSR 4", "PCIe 5.0", "160W"], added: 19 },

  // ---------- Motherboards ----------
  { id: 20, name: "ROG Crosshair X870E Hero", brand: "ASUS", category: "motherboard", price: 699, rating: 4.7, stock: 6, badge: "",
    specs: ["AM5", "X870E", "DDR5", "WiFi 7", "PCIe 5.0"], added: 17 },
  { id: 21, name: "MAG B850 Tomahawk WiFi", brand: "MSI", category: "motherboard", price: 229, rating: 4.6, stock: 16, badge: "Popular",
    specs: ["AM5", "B850", "DDR5", "WiFi 7", "ATX"], added: 16 },
  { id: 22, name: "Z790 AORUS Elite AX", brand: "Gigabyte", category: "motherboard", price: 259, rating: 4.5, stock: 12, badge: "",
    specs: ["LGA1700", "Z790", "DDR5", "WiFi 6E", "ATX"], added: 11 },
  { id: 23, name: "B650M Pro RS", brand: "ASRock", category: "motherboard", price: 119, rating: 4.3, stock: 28, badge: "Value",
    specs: ["AM5", "B650", "DDR5", "mATX"], added: 9 },

  // ---------- RAM ----------
  { id: 24, name: "Vengeance RGB 32GB (2x16) DDR5-6000", brand: "Corsair", category: "ram", price: 119, rating: 4.7, stock: 35, badge: "",
    specs: ["32GB kit", "DDR5-6000", "CL30", "RGB"], added: 14 },
  { id: 25, name: "Trident Z5 64GB (2x32) DDR5-6400", brand: "G.Skill", category: "ram", price: 249, rating: 4.8, stock: 13, badge: "",
    specs: ["64GB kit", "DDR5-6400", "CL32", "RGB"], added: 15 },
  { id: 26, name: "Fury Beast 16GB DDR5-5600", brand: "Kingston", category: "ram", price: 59, rating: 4.4, stock: 50, badge: "Value",
    specs: ["16GB single", "DDR5-5600", "CL40"], added: 7 },

  // ---------- Storage ----------
  { id: 27, name: "990 Pro 2TB NVMe Gen4", brand: "Samsung", category: "storage", price: 159, rating: 4.8, stock: 30, badge: "Popular",
    specs: ["2TB", "7450MB/s read", "PCIe 4.0 NVMe"], added: 12 },
  { id: 28, name: "T700 2TB NVMe Gen5", brand: "Crucial", category: "storage", price: 219, rating: 4.7, stock: 12, badge: "",
    specs: ["2TB", "12400MB/s read", "PCIe 5.0 NVMe"], added: 18 },
  { id: 29, name: "SN850X 1TB NVMe", brand: "WD", category: "storage", price: 89, rating: 4.7, stock: 44, badge: "",
    specs: ["1TB", "7300MB/s read", "PCIe 4.0 NVMe"], added: 10 },
  { id: 30, name: "Barracuda 4TB HDD 7200RPM", brand: "Seagate", category: "storage", price: 89, rating: 4.3, stock: 26, badge: "",
    specs: ["4TB", "7200RPM", "SATA III"], added: 5 },
  { id: 31, name: "870 EVO 1TB SATA SSD", brand: "Samsung", category: "storage", price: 79, rating: 4.6, stock: 0, badge: "",
    specs: ["1TB", "560MB/s read", "SATA III"], added: 6 },

  // ---------- Power supplies ----------
  { id: 32, name: "RM1000x 1000W 80+ Gold", brand: "Corsair", category: "psu", price: 189, rating: 4.8, stock: 15, badge: "",
    specs: ["1000W", "80+ Gold", "Fully modular", "ATX 3.1"], added: 13 },
  { id: 33, name: "Focus GX-750 750W", brand: "Seasonic", category: "psu", price: 119, rating: 4.7, stock: 21, badge: "Popular",
    specs: ["750W", "80+ Gold", "Fully modular"], added: 11 },
  { id: 34, name: "MWE 550W Bronze", brand: "Cooler Master", category: "psu", price: 59, rating: 4.1, stock: 33, badge: "Value",
    specs: ["550W", "80+ Bronze", "Non-modular"], added: 4 },

  // ---------- Cases ----------
  { id: 35, name: "H9 Flow Dual-Chamber", brand: "NZXT", category: "case", price: 159, rating: 4.7, stock: 14, badge: "",
    specs: ["Mid tower", "Tempered glass", "4 fans incl."], added: 15 },
  { id: 36, name: "4000D Airflow", brand: "Corsair", category: "case", price: 104, rating: 4.7, stock: 25, badge: "Popular",
    specs: ["Mid tower", "High airflow", "2 fans incl."], added: 8 },
  { id: 37, name: "Meshify 2 Compact", brand: "Fractal", category: "case", price: 129, rating: 4.8, stock: 10, badge: "",
    specs: ["Mid tower", "Mesh front", "3 fans incl."], added: 9 },
  { id: 38, name: "Q300L Micro-ATX", brand: "Cooler Master", category: "case", price: 49, rating: 4.2, stock: 29, badge: "Value",
    specs: ["mATX", "Acrylic panel"], added: 3 },

  // ---------- Cooling ----------
  { id: 39, name: "Kraken Elite 360 AIO", brand: "NZXT", category: "cooling", price: 279, rating: 4.7, stock: 9, badge: "",
    specs: ["360mm radiator", "LCD display", "AM5 / LGA1700"], added: 16 },
  { id: 40, name: "Liquid Freezer III 280", brand: "Arctic", category: "cooling", price: 109, rating: 4.8, stock: 18, badge: "Best Value AIO",
    specs: ["280mm radiator", "Quiet", "AM5 / LGA1700"], added: 17 },
  { id: 41, name: "Phantom Spirit 120 SE", brand: "Thermalright", category: "cooling", price: 39, rating: 4.7, stock: 40, badge: "Value",
    specs: ["Dual tower air", "2 fans", "AM5 / LGA1700"], added: 12 },
  { id: 42, name: "Noctua NH-D15 G2", brand: "Noctua", category: "cooling", price: 149, rating: 4.9, stock: 12, badge: "",
    specs: ["Dual tower air", "Ultra quiet", "AM5 / LGA1700"], added: 14 },

  // ---------- Monitors ----------
  { id: 43, name: "Odyssey OLED G6 27\" 360Hz", brand: "Samsung", category: "monitor", price: 799, rating: 4.7, stock: 5, badge: "",
    specs: ["27\" QHD OLED", "360Hz", "0.03ms"], added: 21 },
  { id: 44, name: "MPG 321URX 32\" 4K OLED", brand: "MSI", category: "monitor", price: 899, rating: 4.6, stock: 4, badge: "",
    specs: ["32\" 4K OLED", "240Hz", "HDR"], added: 20 },
  { id: 45, name: "Optix G27 27\" 165Hz IPS", brand: "MSI", category: "monitor", price: 189, rating: 4.4, stock: 30, badge: "Value",
    specs: ["27\" QHD IPS", "165Hz", "1ms"], added: 7 },

  // ---------- Peripherals ----------
  { id: 46, name: "K70 RGB Mechanical Keyboard", brand: "Corsair", category: "peripheral", price: 169, rating: 4.7, stock: 24, badge: "",
    specs: ["Mechanical", "Hot-swap", "RGB"], added: 10 },
  { id: 47, name: "G Pro X Superlight 2", brand: "Logitech", category: "peripheral", price: 159, rating: 4.8, stock: 20, badge: "Popular",
    specs: ["Wireless mouse", "60g", "32K DPI"], added: 16 },
  { id: 48, name: "Arctis Nova 7 Headset", brand: "SteelSeries", category: "peripheral", price: 179, rating: 4.6, stock: 15, badge: "",
    specs: ["Wireless", "Surround", "Mic included"], added: 11 },

  // ---------- Networking ----------
  { id: 49, name: "TUF Gaming AXE6000 Router", brand: "ASUS", category: "network", price: 219, rating: 4.5, stock: 13, badge: "",
    specs: ["WiFi 6E", "Tri-band", "2.5G port"], added: 8 },
  { id: 50, name: "WiFi 7 PCIe Adapter BE200", brand: "Intel", category: "network", price: 29, rating: 4.4, stock: 45, badge: "Value",
    specs: ["WiFi 7", "Bluetooth 5.4", "PCIe/M.2"], added: 18 },

  // ================= BUDGET RANGE (under $50) =================

  // ---------- Cooling ----------
  { id: 51, name: "MX-4 Thermal Paste 4g", brand: "Arctic", category: "cooling", price: 8, rating: 4.8, stock: 120, badge: "Best Seller",
    specs: ["4g syringe", "Non-conductive", "8.5 W/mK"], added: 6 },
  { id: 52, name: "P12 PWM PST 120mm Fan", brand: "Arctic", category: "cooling", price: 12, rating: 4.8, stock: 90, badge: "Value",
    specs: ["120mm", "PWM", "Up to 1800 RPM"], added: 9 },
  { id: 53, name: "Kryonaut Thermal Grease 1g", brand: "Thermal Grizzly", category: "cooling", price: 11, rating: 4.7, stock: 60, badge: "",
    specs: ["1g", "12.5 W/mK", "High performance"], added: 11 },
  { id: 54, name: "SE-214-XT Air Cooler", brand: "ID-Cooling", category: "cooling", price: 24, rating: 4.5, stock: 35, badge: "Value",
    specs: ["4 heatpipes", "120mm PWM fan", "AM5 / LGA1700"], added: 13 },
  { id: 55, name: "Hyper 212 Black Edition", brand: "Cooler Master", category: "cooling", price: 35, rating: 4.6, stock: 28, badge: "",
    specs: ["Tower air cooler", "4 heatpipes", "AM5 / LGA1700"], added: 10 },
  { id: 56, name: "Case Fan 3-Pack ARGB 120mm", brand: "Thermalright", category: "cooling", price: 29, rating: 4.4, stock: 40, badge: "",
    specs: ["3x 120mm", "ARGB", "Controller included"], added: 14 },

  // ---------- Accessories & cables ----------
  { id: 57, name: "DisplayPort 1.4 Cable 6ft", brand: "Cable Matters", category: "accessory", price: 12, rating: 4.7, stock: 75, badge: "",
    specs: ["8K / 4K 144Hz", "6 ft", "HDR"], added: 8 },
  { id: 58, name: "HDMI 2.1 Ultra High Speed Cable 6ft", brand: "UGREEN", category: "accessory", price: 10, rating: 4.6, stock: 80, badge: "",
    specs: ["8K 60Hz / 4K 120Hz", "6 ft", "48Gbps"], added: 9 },
  { id: 59, name: "SATA III Cable 4-Pack", brand: "Cable Matters", category: "accessory", price: 7, rating: 4.6, stock: 100, badge: "Value",
    specs: ["4 cables", "6Gbps", "Latching connectors"], added: 4 },
  { id: 60, name: "Velcro Cable Ties 50-Pack", brand: "UGREEN", category: "accessory", price: 6, rating: 4.6, stock: 150, badge: "Value",
    specs: ["50 reusable ties", "Cable management"], added: 3 },
  { id: 61, name: "Precision Screwdriver Set 54-Bit", brand: "iFixit", category: "accessory", price: 20, rating: 4.8, stock: 45, badge: "Popular",
    specs: ["54 bits", "Magnetic", "PC building ready"], added: 12 },
  { id: 62, name: "Compressed Air Duster 2-Pack", brand: "Falcon", category: "accessory", price: 15, rating: 4.5, stock: 70, badge: "",
    specs: ["2 cans", "Dust removal", "Non-flammable"], added: 5 },
  { id: 63, name: "Anti-Static Wrist Strap", brand: "iFixit", category: "accessory", price: 5, rating: 4.4, stock: 110, badge: "Value",
    specs: ["Adjustable", "1.8m cord", "ESD safe"], added: 2 },
  { id: 64, name: "5V ARGB LED Strip Kit 2m", brand: "Govee", category: "accessory", price: 14, rating: 4.4, stock: 55, badge: "",
    specs: ["2m", "5V ARGB", "Motherboard sync"], added: 15 },
  { id: 65, name: "10-Port PWM Fan Hub", brand: "EZDIY-FAB", category: "accessory", price: 13, rating: 4.5, stock: 48, badge: "",
    specs: ["10 fan ports", "PWM", "SATA powered"], added: 11 },
  { id: 66, name: "GPU Support Bracket", brand: "Thermaltake", category: "accessory", price: 12, rating: 4.5, stock: 60, badge: "",
    specs: ["Adjustable height", "Prevents GPU sag"], added: 8 },
  { id: 67, name: "USB 3.0 Hub 4-Port", brand: "UGREEN", category: "accessory", price: 13, rating: 4.6, stock: 65, badge: "",
    specs: ["4x USB 3.0", "5Gbps", "Compact"], added: 7 },

  // ---------- Peripherals ----------
  { id: 68, name: "K120 Wired Keyboard", brand: "Logitech", category: "peripheral", price: 15, rating: 4.5, stock: 90, badge: "Value",
    specs: ["Full size", "USB", "Spill resistant"], added: 4 },
  { id: 69, name: "M90 Wired Optical Mouse", brand: "Logitech", category: "peripheral", price: 9, rating: 4.4, stock: 100, badge: "Value",
    specs: ["USB", "1000 DPI", "Ambidextrous"], added: 3 },
  { id: 70, name: "QcK Large Mouse Pad", brand: "SteelSeries", category: "peripheral", price: 15, rating: 4.8, stock: 70, badge: "Popular",
    specs: ["450 x 400 mm", "Cloth surface", "Stitched edges"], added: 8 },
  { id: 71, name: "S101 Keyboard + Mouse Combo", brand: "Redragon", category: "peripheral", price: 29, rating: 4.4, stock: 40, badge: "Value",
    specs: ["Backlit keyboard", "Gaming mouse", "USB"], added: 10 },
  { id: 72, name: "Cloud Stinger Gaming Headset", brand: "HyperX", category: "peripheral", price: 39, rating: 4.4, stock: 32, badge: "",
    specs: ["Wired", "Swivel mic", "50mm drivers"], added: 9 },
  { id: 73, name: "C270 HD Webcam 720p", brand: "Logitech", category: "peripheral", price: 25, rating: 4.3, stock: 50, badge: "",
    specs: ["720p / 30fps", "Built-in mic", "USB"], added: 6 },

  // ---------- Storage ----------
  { id: 74, name: "A400 240GB SATA SSD", brand: "Kingston", category: "storage", price: 20, rating: 4.4, stock: 85, badge: "Value",
    specs: ["240GB", "500MB/s read", "SATA III"], added: 5 },
  { id: 75, name: "BX500 480GB SATA SSD", brand: "Crucial", category: "storage", price: 34, rating: 4.5, stock: 60, badge: "",
    specs: ["480GB", "540MB/s read", "SATA III"], added: 7 },
  { id: 76, name: "Ultra 64GB USB 3.0 Flash Drive", brand: "SanDisk", category: "storage", price: 9, rating: 4.6, stock: 140, badge: "Value",
    specs: ["64GB", "USB 3.0", "100MB/s read"], added: 4 },
  { id: 77, name: "Select 128GB microSD", brand: "Samsung", category: "storage", price: 14, rating: 4.7, stock: 95, badge: "",
    specs: ["128GB", "A2 / U3", "Adapter included"], added: 8 },

  // ---------- RAM ----------
  { id: 78, name: "8GB DDR4-3200 Desktop RAM", brand: "Crucial", category: "ram", price: 22, rating: 4.6, stock: 70, badge: "Value",
    specs: ["8GB single", "DDR4-3200", "CL22"], added: 6 },
  { id: 79, name: "Fury Beast 8GB DDR4-3200", brand: "Kingston", category: "ram", price: 24, rating: 4.5, stock: 55, badge: "",
    specs: ["8GB single", "DDR4-3200", "CL16"], added: 7 },

  // ---------- Networking ----------
  { id: 80, name: "TL-WN725N Nano USB WiFi Adapter", brand: "TP-Link", category: "network", price: 9, rating: 4.2, stock: 100, badge: "Value",
    specs: ["WiFi N150", "USB 2.0", "Nano size"], added: 3 },
  { id: 81, name: "Cat6 Ethernet Cable 25ft", brand: "Cable Matters", category: "network", price: 9, rating: 4.7, stock: 120, badge: "",
    specs: ["Cat6", "25 ft", "1Gbps+"], added: 4 },
  { id: 82, name: "TG-3468 Gigabit PCIe Network Card", brand: "TP-Link", category: "network", price: 15, rating: 4.5, stock: 50, badge: "",
    specs: ["1Gbps", "PCIe x1", "Low-profile bracket"], added: 6 },
  { id: 83, name: "Archer AX1500 WiFi 6 Router", brand: "TP-Link", category: "network", price: 49, rating: 4.4, stock: 25, badge: "Value",
    specs: ["WiFi 6", "AX1500", "Gigabit ports"], added: 10 },

  // ---------- Power supplies ----------
  { id: 84, name: "500 W1 500W 80+ White", brand: "EVGA", category: "psu", price: 34, rating: 4.3, stock: 45, badge: "Value",
    specs: ["500W", "80+ White", "Non-modular"], added: 3 },
  { id: 85, name: "Smart 500W Power Supply", brand: "Thermaltake", category: "psu", price: 39, rating: 4.3, stock: 38, badge: "",
    specs: ["500W", "80+ White", "120mm fan"], added: 5 },

  // ---------- Graphics & processors (entry level) ----------
  { id: 86, name: "GeForce GT 710 2GB", brand: "NVIDIA", category: "gpu", price: 39, rating: 4.0, stock: 30, badge: "Budget",
    specs: ["2GB DDR3", "HDMI / VGA / DVI", "Low profile"], added: 2 },
  { id: 87, name: "Celeron G6900", brand: "Intel", category: "cpu", price: 45, rating: 4.1, stock: 36, badge: "Budget",
    specs: ["2 cores / 2 threads", "3.4GHz", "LGA1700", "46W TDP"], added: 3 },
];

export default products;
