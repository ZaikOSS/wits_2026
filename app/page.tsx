import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon-mapper";
import Image from "next/image";
import Link from "next/link";
import { getHomeData } from "@/lib/data";
import { ConferenceHighlightsSlider } from "@/components/ConferenceHighlightsSlider";

export default async function HomePage() {
  const data = await getHomeData();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Background layers - removed dot pattern if you want exact match */}
        <div
          className="absolute inset-0 bg-[url('/1.png')] bg-cover bg-center opacity-40"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient overlay matching nav bar transparency */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

        <div className="relative container mx-auto px-4 py-32 md:py-40">
          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 text-sm font-medium backdrop-blur-sm"
              >
                {data.hero.badge}
              </Badge>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
                  {data.hero.title}
                </h1>
                <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
                  {data.hero.subtitle}
                </p>
              </div>

              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                {data.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Link href="/registration">Register Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:border-slate-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 bg-transparent"
              >
                <Link href="/call-for-papers">Submit Paper</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Important Dates
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Mark your calendar for these key milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.importantDates.map((item: any, index: number) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/70 backdrop-blur-sm group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                    <Icon name={item.icon} className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-medium">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Conference Information
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Everything you need to know about WITS 2026
            </p>
          </div>

          {/* Organized by USMBA in Card */}
          <div className="max-w-md mx-auto mb-16 relative">
            {/* Background layer with increased opacity */}
            <div
              className="absolute inset-0 bg-[url('/1.png')] bg-cover bg-center opacity-30 rounded-xl"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Card className="bg-slate-900/60 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/70 backdrop-blur-sm relative z-10">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 w-full flex justify-center">
                  <Image
                    src="/logo_usmba.png"
                    alt="USMBA Logo"
                    width={1300}
                    height={1100}
                    className="h-auto w-full max-w-[180px] md:max-w-[1220px]"
                    priority
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <span className="text-slate-300 font-medium text-center text-lg">
                  Organized by USMBA
                </span>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.quickLinks.map((item: any, index: number) => (
              <Link key={index} href={item.href}>
                <Card className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/50 backdrop-blur-sm h-full group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                      <Icon
                        name={item.icon}
                        className="w-8 h-8 text-slate-300"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Sponsors
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Proudly supported by leading organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.sponsors.map((sponsor: any, index: number) => (
              <div
                key={index}
                className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900/50 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm group flex items-center justify-center"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="w-full h-16 object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview with Slide Effect */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Conference Highlights
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              Moments from previous WITS conferences
            </p>
          </div>

          <ConferenceHighlightsSlider highlights={data.conferenceHighlights} />
        </div>
      </section>
    </div>
  );
}