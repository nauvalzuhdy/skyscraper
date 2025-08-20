import { Award, Users, MapPin, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: MapPin, label: 'Destinations', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Heart, label: 'Customer Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Skyscraper Travel</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Memberikan pengalaman perjalanan terbaik di Turki dengan layanan profesional dan pemandu berpengalaman
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="section-title text-center mb-8">Tentang Perjalanan Kami</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Skyscraper Travel adalah penyedia jasa travel profesional yang berspesialisasi dalam 
                  wisata Turki. Kami telah melayani ribuan wisatawan dari Indonesia dan seluruh dunia 
                  untuk menjelajahi keindahan dan kekayaan sejarah Turki yang menakjubkan.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dengan pengalaman lebih dari 15 tahun di industri pariwisata, kami memahami betul 
                  kebutuhan dan ekspektasi wisatawan Indonesia. Tim kami yang berpengalaman dan berlisensi 
                  resmi siap memberikan pelayanan terbaik untuk memastikan perjalanan Anda berkesan.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Dari wisata sejarah di Istanbul hingga petualangan balon udara di Cappadocia, 
                  kami menawarkan paket wisata yang dirancang khusus untuk memberikan pengalaman 
                  autentik dan tak terlupakan di negeri yang menjembatani dua benua ini.
                </p>
              </div>
              
              <div className="travel-card p-8 text-center bg-muted/30">
                <h3 className="text-xl font-semibold mb-4">Visi Kami</h3>
                <p className="text-muted-foreground italic">
                  "Menjadi jembatan budaya antara Indonesia dan Turki melalui pengalaman wisata 
                  yang berkesan dan pelayanan yang excellence."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="travel-card p-8 mb-12 bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-6 text-center">Misi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Pelayanan Prima</h3>
                <p className="text-primary-foreground/90">
                  Memberikan pelayanan wisata berkualitas tinggi dengan standar internasional, 
                  didukung oleh tim yang profesional dan berpengalaman.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Pengalaman Autentik</h3>
                <p className="text-primary-foreground/90">
                  Menghadirkan pengalaman wisata yang autentik dan mendalam, memperkenalkan 
                  kekayaan budaya, sejarah, dan keindahan alam Turki.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Keamanan & Kenyamanan</h3>
                <p className="text-primary-foreground/90">
                  Menjamin keamanan dan kenyamanan setiap wisatawan dengan sistem keamanan 
                  yang ketat dan akomodasi yang berkualitas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Harga Kompetitif</h3>
                <p className="text-primary-foreground/90">
                  Menawarkan paket wisata dengan harga yang kompetitif tanpa mengurangi 
                  kualitas pelayanan dan pengalaman wisata.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center travel-card p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
                    <Icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h2 className="section-title mb-8">Mengapa Memilih Skyscraper Travel?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Berlisensi Resmi</h3>
                <p className="text-muted-foreground text-sm">
                  Berlisensi resmi dari Kementerian Pariwisata Turki dan terdaftar di 
                  Asosiasi Agen Perjalanan Indonesia (ASITA).
                </p>
              </div>

              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Tim Berpengalaman</h3>
                <p className="text-muted-foreground text-sm">
                  Didukung oleh tim pemandu wisata lokal yang berpengalaman dan berbahasa Indonesia 
                  untuk kenyamanan komunikasi Anda.
                </p>
              </div>

              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Kepuasan Terjamin</h3>
                <p className="text-muted-foreground text-sm">
                  Komitmen penuh terhadap kepuasan pelanggan dengan layanan 24/7 dan 
                  jaminan kualitas terbaik di setiap perjalanan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;