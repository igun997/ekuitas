"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  ChevronRight,
  Star,
  Zap,
  Target,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CollegeProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Logo Universitas"
                  width={60}
                  height={60}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${
                    scrollY > 50 ? "text-[#192f59]" : "text-white"
                  } hover:text-orange-500 transition-colors duration-300`}>
                  Universitas Ekuitas
                </h1>
                <p className="text-sm text-warm-600 font-medium">Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Beranda", "Tentang", "Program Studi", "Berita", "Kontak"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`relative font-medium transition-all duration-300 group animate-fade-in ${
                    scrollY > 50 ? "text-[#192f59]" : "text-white"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                scrollY > 50 ? "bg-[#192f59] text-white" : "bg-white text-[#192f59]"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-xl animate-slide-up">
              <nav className="flex flex-col space-y-4">
                {["Beranda", "Tentang", "Program Studi", "Berita", "Kontak"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#192f59] hover:text-orange-500 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#192f59] opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-warm-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6 animate-fade-in">
                <Star className="h-4 w-4 mr-2 text-orange-300" />
                <span className="text-sm font-medium">Terakreditasi A - Terdepan dalam Inovasi</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Membangun Masa Depan Melalui
                <span className="block text-orange-300 animate-pulse-slow">Pendidikan Berkualitas</span>
              </h2>

              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Universitas Ekuitas berkomitmen memberikan pendidikan tinggi yang unggul, menghasilkan lulusan yang
                kompeten dan siap menghadapi tantangan global dengan inovasi berkelanjutan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#192f59] hover:bg-orange-50 hover:text-orange-600 font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Daftar Sekarang
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#192f59] bg-[#192f59] text-white hover:bg-white hover:text-[#192f59] font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Kampus Universitas Ekuitas"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#192f59]/20 rounded-3xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#192f59]">Akreditasi A</p>
                      <p className="text-sm text-warm-600">Kualitas Terjamin</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#192f59] rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#192f59]">5,000+</p>
                      <p className="text-sm text-warm-600">Mahasiswa Aktif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Tahun Pengalaman", icon: Target },
              { number: "5,000+", label: "Mahasiswa Aktif", icon: Users },
              { number: "12", label: "Program Studi", icon: BookOpen },
              { number: "200+", label: "Dosen Berkualitas", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#192f59] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#192f59] mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-warm-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Tentang Universitas Ekuitas"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
                <div className="absolute inset-0 bg-[#192f59]/10 rounded-3xl"></div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#192f59] rounded-full opacity-20 animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 mb-6">
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">Tentang Kami</span>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-[#192f59] leading-tight">
                Universitas Ekuitas
                <span className="block text-orange-500">Pilihan Terdepan</span>
              </h2>

              <p className="text-warm-700 mb-6 leading-relaxed text-lg">
                Universitas Ekuitas adalah institusi pendidikan tinggi yang berdedikasi untuk menghasilkan lulusan yang
                berkualitas dan siap bersaing di era global. Dengan pengalaman lebih dari 15 tahun, kami telah
                membuktikan komitmen dalam memberikan pendidikan terbaik.
              </p>

              <p className="text-warm-700 mb-8 leading-relaxed text-lg">
                Kami menawarkan berbagai program studi yang relevan dengan kebutuhan industri, didukung oleh fasilitas
                modern dan tenaga pengajar yang berpengalaman. Visi kami adalah menjadi universitas terdepan dalam
                menghasilkan sumber daya manusia yang unggul dan berkarakter.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, text: "Terakreditasi A", color: "bg-orange-500" },
                  { icon: Users, text: "Dosen Berpengalaman", color: "bg-[#192f59]" },
                  { icon: BookOpen, text: "Kurikulum Modern", color: "bg-warm-500" },
                  { icon: Globe, text: "Jaringan Global", color: "bg-orange-400" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[#192f59] font-semibold group-hover:text-orange-600 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program-studi" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-[#192f59]/10 rounded-full text-[#192f59] mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Program Studi</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-[#192f59]">Program Studi Unggulan</h2>
            <p className="text-warm-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Pilih program studi yang sesuai dengan minat dan bakat Anda. Semua program dirancang untuk mempersiapkan
              Anda menghadapi tantangan dunia kerja dengan kurikulum yang selalu update.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Teknik Informatika",
                level: "S1",
                description:
                  "Program studi yang fokus pada pengembangan teknologi informasi dan sistem komputer modern.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-blue-500",
                popular: true,
              },
              {
                title: "Manajemen",
                level: "S1",
                description: "Mempelajari strategi bisnis, kepemimpinan, dan pengelolaan organisasi di era digital.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-orange-500",
              },
              {
                title: "Akuntansi",
                level: "S1",
                description:
                  "Program yang mempersiapkan ahli akuntansi dan keuangan yang profesional dan berintegritas.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-green-600",
              },
              {
                title: "Sistem Informasi",
                level: "S1",
                description: "Menggabungkan teknologi informasi dengan proses bisnis untuk solusi optimal perusahaan.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-purple-500",
              },
              {
                title: "Desain Komunikasi Visual",
                level: "S1",
                description: "Mengembangkan kreativitas dalam desain grafis dan komunikasi visual yang impactful.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-pink-500",
              },
              {
                title: "Psikologi",
                level: "S1",
                description: "Mempelajari perilaku manusia dan aplikasinya dalam berbagai bidang kehidupan.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-[#192f59]",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 ${program.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                  ></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-[#192f59] font-semibold px-3 py-1 shadow-lg">{program.level}</Badge>
                  </div>

                  {program.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white font-semibold px-3 py-1 shadow-lg animate-pulse">
                        Populer
                      </Badge>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-[#192f59] hover:bg-orange-50 font-semibold px-6 py-3 rounded-xl shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Lihat Detail
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-[#192f59] group-hover:text-orange-600 transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-warm-700 mb-4 leading-relaxed">{program.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#192f59]/20 text-[#192f59] hover:bg-[#192f59] hover:text-white hover:border-[#192f59] font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  >
                    Pelajari Lebih Lanjut
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="berita" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Berita & Pengumuman</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-[#192f59]">Berita Terkini</h2>
            <p className="text-warm-700 max-w-2xl mx-auto text-lg">
              Ikuti perkembangan terbaru dari Universitas Ekuitas dan raih kesempatan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Penerimaan Mahasiswa Baru 2024/2025",
                date: "15 Januari 2024",
                category: "Pengumuman",
                excerpt:
                  "Pendaftaran mahasiswa baru telah dibuka dengan berbagai program beasiswa menarik dan fasilitas terdepan.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-orange-500",
              },
              {
                title: "Seminar Nasional Teknologi Digital",
                date: "10 Januari 2024",
                category: "Acara",
                excerpt:
                  "Menghadirkan pembicara ahli dari berbagai universitas terkemuka dan industri teknologi global.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-[#192f59]",
              },
              {
                title: "Prestasi Mahasiswa di Kompetisi Nasional",
                date: "5 Januari 2024",
                category: "Prestasi",
                excerpt:
                  "Tim robotika Universitas Ekuitas meraih juara 1 dalam kompetisi robotika nasional tingkat universitas.",
                image: "/placeholder.svg?height=250&width=400",
                color: "bg-green-600",
              },
            ].map((news, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className={`${news.color} text-white font-semibold px-3 py-1 shadow-lg`}>
                      {news.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {news.date}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-[#192f59] group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                    {news.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-warm-700 mb-4 leading-relaxed">{news.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-orange-600 hover:text-[#192f59] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Baca Selengkapnya
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-[#192f59]/10 rounded-full text-[#192f59] mb-6">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Hubungi Kami</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-[#192f59]">Mari Terhubung</h2>
            <p className="text-warm-700 max-w-2xl mx-auto text-lg">
              Kami siap membantu Anda dengan informasi yang dibutuhkan untuk masa depan yang cerah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-8 text-[#192f59]">Informasi Kontak</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Alamat",
                    content: ["Jl. PH.H. Mustofa No. 31", "Bandung, Jawa Barat 40124", "Indonesia"],
                    color: "bg-orange-500",
                  },
                  {
                    icon: Phone,
                    title: "Telepon",
                    content: ["+62 22 2013 163"],
                    color: "bg-[#192f59]",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: ["info@ekuitas.ac.id"],
                    color: "bg-green-600",
                  },
                  {
                    icon: Globe,
                    title: "Website",
                    content: ["www.ekuitas.ac.id"],
                    color: "bg-purple-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-[#192f59] text-lg">{contact.title}</h4>
                      {contact.content.map((line, i) => (
                        <p key={i} className="text-warm-700 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-[#192f59]">Kirim Pesan</CardTitle>
                  <CardDescription className="text-warm-600 text-lg">
                    Isi form di bawah ini untuk mengirim pesan kepada kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-[#192f59]">Nama Depan</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                          placeholder="Masukkan nama depan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-[#192f59]">Nama Belakang</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                          placeholder="Masukkan nama belakang"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-[#192f59]">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="nama@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-[#192f59]">Subjek</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="Subjek pesan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-[#192f59]">Pesan</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#192f59] hover:bg-orange-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Kirim Pesan
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#192f59] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="font-bold text-xl">Universitas Ekuitas</h3>
                  <p className="text-orange-300 text-sm font-medium">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Membangun masa depan melalui pendidikan berkualitas dan inovasi berkelanjutan untuk generasi unggul.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, name: "Facebook" },
                  { icon: Twitter, name: "Twitter" },
                  { icon: Instagram, name: "Instagram" },
                  { icon: Linkedin, name: "LinkedIn" },
                ].map((social) => (
                  <div
                    key={social.name}
                    className="w-10 h-10 bg-orange-500 hover:bg-orange-400 rounded-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-bold mb-6 text-lg text-orange-300">Program Studi</h4>
              <ul className="space-y-3">
                {["Teknik Informatika", "Manajemen", "Akuntansi", "Sistem Informasi", "DKV", "Psikologi"].map(
                  (program) => (
                    <li key={program}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-orange-300 transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {program}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-bold mb-6 text-lg text-orange-300">Layanan</h4>
              <ul className="space-y-3">
                {[
                  "Pendaftaran Online",
                  "Portal Mahasiswa",
                  "E-Learning",
                  "Perpustakaan Digital",
                  "Konseling Akademik",
                  "Beasiswa",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-orange-300 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-bold mb-6 text-lg text-orange-300">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <p>Jl. PH.H. Mustofa No. 31</p>
                    <p>Bandung, Jawa Barat 40124</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+62 22 2013 163</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">info@ekuitas.ac.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Universitas Ekuitas. Semua hak cipta dilindungi.
              <span className="text-orange-300 font-medium"> Dibuat dengan ❤️ untuk masa depan yang cerah.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
