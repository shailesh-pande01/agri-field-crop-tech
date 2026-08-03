import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, PhoneCall, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { companyInfo } from "@/data/company";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.englishName} | ${companyInfo.name}`,
    description: product.description,
    openGraph: {
      title: `${product.englishName} - ${product.marathiName}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.englishName,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/#products" className="inline-flex items-center text-agri-green hover:text-agri-dark font-medium mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            मागे जा (Back to Products)
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Product Image Section */}
              <div className="bg-agri-cream p-12 flex items-center justify-center relative min-h-[400px] lg:min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-agri-green/10 to-transparent" />
                <div className="relative w-full h-full max-w-md aspect-square">
                  <Image
                    src={product.image}
                    alt={product.englishName}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Product Details Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-black text-agri-dark font-poppins mb-2">
                    {product.englishName}
                  </h1>
                  <h2 className="text-xl font-semibold text-agri-green mb-4">
                    {product.marathiName}
                  </h2>
                  <p className="text-gray-500 font-medium italic">
                    {product.subtitle}
                  </p>
                </div>

                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="leading-relaxed">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-lg font-bold text-agri-dark mb-4 border-b pb-2">मुख्य फायदे (Benefits)</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-agri-green mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-agri-dark mb-3 border-b pb-2">शिफारस केलेली पिके (Crops)</h3>
                      <p className="text-gray-700 font-medium">
                        {product.recommendedCrops.join(", ")}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-agri-dark mb-3 border-b pb-2">प्रमाण (Dosage)</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold text-agri-green">फवारणी (Spray):</span> {product.applicationMethod.spray}</p>
                        <p><span className="font-semibold text-agri-green">ठिबक (Drip):</span> {product.applicationMethod.drip}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-agri-dark mb-3 border-b pb-2">पॅकिंग (Packaging)</h3>
                      <p className="text-gray-700 font-medium inline-block bg-gray-100 px-4 py-1 rounded-full">
                        {product.packaging}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-6 border-t">
                  <a href={`tel:+91${companyInfo.phone}`} className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-agri-dark hover:bg-black text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
                    <PhoneCall className="w-5 h-5" />
                    Call Now
                  </a>
                  <a href={`https://wa.me/91${companyInfo.phone}`} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-agri-dark mb-8 text-center uppercase tracking-wider">
              इतर उत्पादने (Related Products)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.id}`} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-agri-green/20">
                  <div className="relative aspect-square w-full bg-agri-cream rounded-xl mb-4 overflow-hidden">
                    <div className="relative w-2/3 h-2/3 mx-auto top-1/2 -translate-y-1/2 transform group-hover:scale-110 transition-transform duration-500">
                      <Image src={rp.image} alt={rp.englishName} fill className="object-contain" />
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-agri-dark font-poppins">{rp.englishName}</h4>
                  <p className="text-agri-green font-semibold text-sm mb-2 line-clamp-1">{rp.marathiName}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
