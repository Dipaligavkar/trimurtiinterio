import { placeholderBrands, productCategories } from "@/lib/content/placeholders";

export function getHomeData() {
  return {
    settings: {
      heroTitle: "Trimurti Interio",
      heroTagline: "The Perfect Experience Center | Build Your Perfect Heaven",
      primaryColor: "#f97316",
    },
    brands: placeholderBrands.map((name) => ({ name, logoUrl: "" })),
    categories: productCategories.map((c) => ({
      name: c.title,
      description: c.desc,
      imageUrl: "",
    })),
    festival: null as null | { title: string; type: "image" | "video"; url: string },
    business: null,
  };
}
