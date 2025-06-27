import { Brush, Scissors, Zap } from "lucide-react"

export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
  },
  {
    id: 5,
    name: "USB-C Hub Adapter",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
  },
];

export const features = [
  {
    id: 1,
    icon: Brush,
    title: "Premium Wig Care Solutions",
    description:
      "Taking care of your wig is as important as wearing it. Our premium wig care products will help you maintain that beautiful look, so you always feel confident and ready for any occasion.",
    color: "from-custom-primary to-custom-primary-light",
    delay: "0ms",
  },
  {
    id: 2,
    icon: Scissors,
    title: "Trendy Hair & Wig Styles",
    description:
      "Whether you're looking for a sleek, everyday look or a bold style statement, our collection offers a variety of trendy wigs that keep you at the forefront of fashion.",
    color: "from-custom-primary-light to-pink-400",
    delay: "200ms",
    hasImage: true,
  },
  {
    id: 3,
    icon: Zap,
    title: "Expert Styling Tools",
    description:
      "Achieve your dream look with our professional-grade styling tools. From brushes to heat protectors, we provide everything you need to style your wig like a pro.",
    color: "from-pink-400 to-custom-primary",
    delay: "400ms",
  },
];