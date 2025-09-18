import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Processors', slug: 'processors', description: 'CPUs and microprocessors', productCount: 12 },
  { id: '2', name: 'Memory', slug: 'memory', description: 'RAM, ROM, and storage solutions', productCount: 8 },
  { id: '3', name: 'Development Boards', slug: 'dev-boards', description: 'Arduino, Raspberry Pi, and more', productCount: 15 },
  { id: '4', name: 'Sensors', slug: 'sensors', description: 'Temperature, motion, and environmental sensors', productCount: 20 },
  { id: '5', name: 'Components', slug: 'components', description: 'Resistors, capacitors, and electronic parts', productCount: 45 },
  { id: '6', name: 'Power Supply', slug: 'power', description: 'Batteries, chargers, and power management', productCount: 18 }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Intel Core i9-13900K',
    brand: 'Intel',
    category: 'processors',
    price: 589.99,
    originalPrice: 649.99,
    description: 'High-performance 24-core processor for gaming and content creation with Intel Thread Director technology.',
    specifications: {
      'Cores': '24 (8P + 16E)',
      'Threads': '32',
      'Base Clock': '3.0 GHz',
      'Boost Clock': '5.8 GHz',
      'Cache': '36 MB',
      'TDP': '125W',
      'Socket': 'LGA 1700'
    },
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    ],
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviewCount: 127,
    features: ['Intel Thread Director', 'DDR5 Support', 'PCIe 5.0', 'Overclocking Ready']
  },
  {
    id: '2',
    name: 'Corsair Vengeance LPX 32GB DDR4',
    brand: 'Corsair',
    category: 'memory',
    price: 129.99,
    description: 'High-performance DDR4 memory kit optimized for Intel and AMD platforms with heat spreader design.',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': 'DDR4-3200',
      'Latency': 'CL16',
      'Voltage': '1.35V',
      'Form Factor': 'DIMM'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg'
    ],
    inStock: true,
    stockCount: 23,
    rating: 4.6,
    reviewCount: 89,
    features: ['XMP 2.0 Support', 'Heat Spreader', 'Low Profile Design', 'Lifetime Warranty']
  },
  {
    id: '3',
    name: 'Raspberry Pi 4 Model B',
    brand: 'Raspberry Pi Foundation',
    category: 'dev-boards',
    price: 89.99,
    description: 'Complete single-board computer perfect for IoT projects, learning, and prototyping.',
    specifications: {
      'CPU': 'Quad-core ARM Cortex-A72',
      'RAM': '8GB LPDDR4',
      'Storage': 'MicroSD',
      'Connectivity': 'Wi-Fi, Bluetooth, Ethernet',
      'GPIO': '40-pin header',
      'Video': 'Dual 4K HDMI'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg'
    ],
    inStock: true,
    stockCount: 34,
    rating: 4.9,
    reviewCount: 203,
    features: ['Dual 4K HDMI', 'Wi-Fi 802.11ac', 'Bluetooth 5.0', 'USB 3.0 Ports']
  },
  {
    id: '4',
    name: 'Arduino Uno R3',
    brand: 'Arduino',
    category: 'dev-boards',
    price: 27.99,
    description: 'The classic Arduino board perfect for beginners and prototyping electronic projects.',
    specifications: {
      'Microcontroller': 'ATmega328P',
      'Operating Voltage': '5V',
      'Digital I/O Pins': '14',
      'Analog Input Pins': '6',
      'Flash Memory': '32 KB',
      'SRAM': '2 KB'
    },
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    ],
    inStock: true,
    stockCount: 67,
    rating: 4.7,
    reviewCount: 156,
    features: ['USB Interface', 'Easy Programming', 'Open Source', 'Extensive Community']
  },
  {
    id: '5',
    name: 'DHT22 Temperature & Humidity Sensor',
    brand: 'Adafruit',
    category: 'sensors',
    price: 9.99,
    description: 'Precision digital temperature and humidity sensor with calibrated output.',
    specifications: {
      'Temperature Range': '-40°C to 80°C',
      'Humidity Range': '0-100% RH',
      'Accuracy': '±0.5°C, ±1% RH',
      'Interface': 'Digital',
      'Supply Voltage': '3.3-6V',
      'Response Time': '1-2s'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg'
    ],
    inStock: true,
    stockCount: 89,
    rating: 4.5,
    reviewCount: 78,
    features: ['High Precision', 'Calibrated Output', 'Long-term Stability', 'Wide Operating Range']
  },
  {
    id: '6',
    name: 'NVIDIA RTX 4080 Graphics Card',
    brand: 'NVIDIA',
    category: 'processors',
    price: 1199.99,
    description: 'Cutting-edge graphics card with Ada Lovelace architecture for gaming and AI workloads.',
    specifications: {
      'CUDA Cores': '9728',
      'RT Cores': '76 (3rd gen)',
      'Tensor Cores': '304 (4th gen)',
      'Base Clock': '2205 MHz',
      'Memory': '16GB GDDR6X',
      'Memory Bus': '256-bit',
      'TGP': '320W'
    },
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    ],
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewCount: 234,
    features: ['Ada Lovelace Architecture', 'DLSS 3', 'Ray Tracing', 'AV1 Encoding']
  },
  {
    id: '7',
    name: 'ESP32 Development Board',
    brand: 'Espressif',
    category: 'dev-boards',
    price: 19.99,
    description: 'Powerful microcontroller with built-in Wi-Fi and Bluetooth for IoT applications.',
    specifications: {
      'CPU': 'Dual-core Xtensa LX6',
      'Clock Speed': '240 MHz',
      'Flash': '4MB',
      'RAM': '520KB',
      'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'v4.2 BR/EDR and BLE'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg'
    ],
    inStock: true,
    stockCount: 45,
    rating: 4.7,
    reviewCount: 312,
    features: ['Built-in Wi-Fi', 'Bluetooth Support', 'Low Power', 'Arduino Compatible']
  },
  {
    id: '8',
    name: 'Ultrasonic Distance Sensor HC-SR04',
    brand: 'Generic',
    category: 'sensors',
    price: 4.99,
    description: 'Reliable ultrasonic distance sensor for robotics and automation projects.',
    specifications: {
      'Detection Range': '2cm - 400cm',
      'Accuracy': '±3mm',
      'Operating Voltage': '5V DC',
      'Operating Current': '15mA',
      'Operating Frequency': '40Hz',
      'Trigger Input': '10µS TTL pulse'
    },
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
    images: [
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
    ],
    inStock: true,
    stockCount: 156,
    rating: 4.3,
    reviewCount: 92,
    features: ['Non-contact Measurement', 'High Accuracy', 'Easy Integration', 'Wide Detection Angle']
  }
];