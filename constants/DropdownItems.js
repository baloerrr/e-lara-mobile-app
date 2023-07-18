const semesterItems = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
]

const jurusanItems = [
  // Fakultas Kedokteran
  { label: 'Kedokteran', value: 'kedokteran' },
  { label: 'Kedokteran Gigi', value: 'kedokteran gigi' },
  { label: 'Kedokteran Hewan', value: 'kedokteran hewan' },
  { label: 'Kesehatan Masyarakat', value: 'kesehatan masyarakat' },
  { label: 'Kesehatan Lingkungan', value: 'kesehatan lingkungan' },
  { label: 'Ilmu Gizi', value: 'ilmu gizi' },
  {
    label: 'Keselamatan dan Kesehatan Kerja',
    value: 'keselamatan dan kesehatan kerja',
  },
  { label: 'Ilmu Keperawatan', value: 'ilmu keperawatan' },
  { label: 'Farmasi', value: 'farmasi' },
  {
    label: 'Nutrisi dan Teknologi Pangan',
    value: 'nutrisi dan teknologi pangan',
  },
  { label: 'Kebidanan', value: 'kebidanan' },
  { label: 'Fisioterapi', value: 'fisioterapi' },
  { label: 'Ilmu Keolahragaan', value: 'ilmu keolahragaan' },
  {
    label: 'Teknik Rasiodiagnostik dan Radioterapi',
    value: 'teknik rasiodiagnostik dan radioterapi',
  },
  {
    label: 'Manajemen Pelayanan Rumah Sakit',
    value: 'manajemen pelayanan rumah sakit',
  },

  // Fakultas Matematika dan IPA (MIPA)
  { label: 'Matematika', value: 'matematika' },
  { label: 'Kimia', value: 'kimia' },
  { label: 'Fisika', value: 'fisika' },
  { label: 'Biologi', value: 'biologi' },
  { label: 'Statistika', value: 'statistika' },
  { label: 'Astronomi', value: 'astronomi' },
  { label: 'Bioteknologi', value: 'bioteknologi' },
  { label: 'Geofisika', value: 'geofisika' },
  { label: 'Meteorologi', value: 'meteorologi' },
  { label: 'Geografi', value: 'geografi' },
  { label: 'Biokimia', value: 'biokimia' },
  { label: 'Metrologi', value: 'metrologi' },
  { label: 'Aktuaria', value: 'aktuaria' },
  { label: 'Statistika Terapan', value: 'statistika terapan' },
  { label: 'Mikrobiologi', value: 'mikrobiologi' },
  { label: 'Bioentrepeneurship', value: 'bioentrepeneurship' },
  { label: 'Ilmu Pangan', value: 'ilmu pangan' },
  { label: 'Matematika Bisnis', value: 'matematika bisnis' },
  { label: 'Fisika Medis', value: 'fisika medis' },
  {
    label: 'Kartografi dan Penginderaan',
    value: 'kartografi dan penginderaan',
  },
  {
    label: 'Pengelolaan dan Pemberdayaan SDA dan Lingkungan',
    value: 'pengelolaan dan pemberdayaan sda dan lingkungan',
  },

  // Fakultas Ilmu Sosial dan Ilmu Politik
  { label: 'Ilmu Politik', value: 'ilmu politik' },
  { label: 'Filsafat', value: 'filsafat' },
  { label: 'Kriminologi', value: 'kriminologi' },
  { label: 'Psikologi', value: 'psikologi' },
  { label: 'Ilmu Hukum', value: 'ilmu hukum' },
  { label: 'Sosiologi', value: 'sosiologi' },
  { label: 'Jurnalistik', value: 'jurnalistik' },
  { label: 'Antropologi', value: 'antropologi' },
  { label: 'Hubungan Internasional', value: 'hubungan internasional' },
  { label: 'Ilmu Kesejahteraan Sosial', value: 'ilmu kesejahteraan sosial' },
  { label: 'Ilmu Pemerintahan', value: 'ilmu pemerintahan' },
  { label: 'Administrasi Publik', value: 'administrasi publik' },
  { label: 'Administrasi Bisnis', value: 'administrasi bisnis' },
  { label: 'Ilmu Komunikasi', value: 'ilmu komunikasi' },
  { label: 'Hubungan Masyarakat', value: 'hubungan masyarakat' },
  { label: 'Marketing Communication', value: 'marketing communication' },
  { label: 'Penyiaran', value: 'penyiaran' },
  { label: 'Periklanan', value: 'periklanan' },
  { label: 'Peradilan Agama', value: 'peradilan agama' },
  { label: 'Politik Islam', value: 'politik islam' },
  {
    label: 'Pembangunan Sosial dan Kesejahteraan',
    value: 'pembangunan sosial dan kesejahteraan',
  },
  { label: 'Business Law', value: 'business law' },
  { label: 'Manajemen Komunikasi', value: 'manajemen komunikasi' },
  { label: 'Branding', value: 'branding' },
  { label: 'Kearsipan', value: 'kearsipan' },
  {
    label: 'Sains Komunikasi dan Pengembangan Masyarakat',
    value: 'sains komunikasi dan pengembangan masyarakat',
  },
  { label: 'Ilmu Keluarga dan Konsumen', value: 'ilmu keluarga dan konsumen' },
  { label: 'Manajemen Produksi Media', value: 'manajemen produksi media' },

  // Fakultas Ekonomi dan Bisnis
  { label: 'Ekonomi Internasional', value: 'ekonomi internasional' },
  { label: 'Ekonomi Publik', value: 'ekonomi publik' },
  { label: 'Ekonomi Regional', value: 'ekonomi regional' },
  { label: 'Ekonomi Moneter', value: 'ekonomi moneter' },
  {
    label: 'Ekonomi Sumber Daya Alam dan Lingkungan',
    value: 'ekonomi sumber daya alam dan lingkungan',
  },
  {
    label: 'Ekonomi Sumber Daya Manusia',
    value: 'ekonomi sumber daya manusia',
  },
  { label: 'Manajemen Pemasaran', value: 'manajemen pemasaran' },
  { label: 'Manajemen Keuangan', value: 'manajemen keuangan' },
  {
    label: 'Manajemen Sumber Daya Manusia',
    value: 'manajemen sumber daya manusia',
  },
  { label: 'Manajemen Operasional', value: 'manajemen operasional' },
  { label: 'Fakultas Akuntansi', value: 'fakultas akuntansi' },
  { label: 'Akuntansi Keuangan', value: 'akuntansi keuangan' },
  { label: 'Akuntansi Perpajakan', value: 'akuntansi perpajakan' },
  { label: 'Audit', value: 'audit' },
  { label: 'Sistem Informasi', value: 'sistem informasi' },
  { label: 'Manajemen Akuntansi', value: 'manajemen akuntansi' },

  // Fakultas Sastra dan Budaya
  { label: 'Ilmu Sejarah', value: 'ilmu sejarah' },
  { label: 'Sastra Inggris', value: 'sastra inggris' },
  { label: 'Arkeologi', value: 'arkeologi' },
  { label: 'Sastra Perancis', value: 'sastra perancis' },
  { label: 'Sastra Korea', value: 'sastra korea' },
  { label: 'Sastra Jerman', value: 'sastra jerman' },
  { label: 'Sastra Belanda', value: 'sastra belanda' },
  { label: 'Sastra Jepang', value: 'sastra jepang' },
  { label: 'Sastra Indonesia', value: 'sastra indonesia' },
  { label: 'Sastra Rusia', value: 'sastra rusia' },
  { label: 'Sastra Jawa', value: 'sastra jawa' },
  { label: 'Sastra Arab', value: 'sastra arab' },
  { label: 'Sastra Cina', value: 'sastra cina' },
  { label: 'Sastra Sunda', value: 'sastra sunda' },
  { label: 'Sastra Bali', value: 'sastra bali' },
  { label: 'Sastra Minangkabau', value: 'sastra minangkabau' },
  { label: 'Sastra Nusantara', value: 'sastra nusantara' },
  { label: 'Sastra Slavia', value: 'sastra slavia' },
  {
    label: 'Sejarah dan Kebudayaan Islam',
    value: 'sejarah dan kebudayaan islam',
  },

  // Fakultas Teknologi dan Informatika
  { label: 'Teknik Informatika', value: 'teknik informatika' },
  {
    label: 'Mobile Application & Technology',
    value: 'mobile application & technology',
  },
  { label: 'Accounting Information', value: 'accounting information' },
  { label: 'Audio Engineering', value: 'audio engineering' },
  { label: 'Ilmu Komputer', value: 'ilmu komputer' },
  {
    label: 'Sistem Komputer (Teknik Komputer)',
    value: 'sistem komputer (teknik komputer)',
  },
  {
    label: 'Sistem Informasi (Manajemen Informatika)',
    value: 'sistem informasi (manajemen informatika)',
  },
  { label: 'Sistem Informasi Bisnis', value: 'sistem informasi bisnis' },
  { label: 'Software Engineering', value: 'software engineering' },
  {
    label: 'Sistem dan Teknologi Informasi',
    value: 'sistem dan teknologi informasi',
  },
  { label: 'Teknologi Game', value: 'teknologi game' },
  { label: 'Ilmu Komputasi', value: 'ilmu komputasi' },
  { label: 'Cyber Security', value: 'cyber security' },
  { label: 'Bioinformatika', value: 'bioinformatika' },
  { label: 'Computerized Accounting', value: 'computerized accounting' },
  { label: 'Information Systems Audit', value: 'information systems audit' },
  { label: 'Human Computer Interaction', value: 'human computer interaction' },

  // Fakultas Ilmu Pendidikan
  {
    label: 'Pendidikan Guru Sekolah Dasar (PGSD)',
    value: 'pendidikan guru sekolah dasar (pgsd)',
  },
  { label: 'Manajemen Pendidikan', value: 'manajemen pendidikan' },
  { label: 'Pendidikan Bahasa Arab', value: 'pendidikan bahasa arab' },
  { label: 'Pendidikan Bahasa Inggris', value: 'pendidikan bahasa inggris' },
  {
    label: 'Pendidikan Kepelatihan Olahraga',
    value: 'pendidikan kepelatihan olahraga',
  },
  {
    label: 'Pendidikan Jasmani Kesehatan dan Rekreasi',
    value: 'pendidikan jasmani kesehatan dan rekreasi',
  },
  {
    label: 'Pendidikan Ilmu Pengetahuan Alam',
    value: 'pendidikan ilmu pengetahuan alam',
  },
  {
    label: 'Kurikulum dan Teknologi Pendidikan',
    value: 'kurikulum dan teknologi pendidikan',
  },
  { label: 'Pendidikan Luar Sekolah', value: 'pendidikan luar sekolah' },
  {
    label: 'Pendidikan Luar Biasa (PLB)',
    value: 'pendidikan luar biasa (plb)',
  },
  { label: 'Teologi', value: 'teologi' },
  { label: 'Pendidikan Kependudukan', value: 'pendidikan kependudukan' },
  { label: 'Manajemen Pendidikan Islam', value: 'manajemen pendidikan islam' },
  {
    label: 'Pendidikan Anak Usia Dini (PAUD)',
    value: 'pendidikan anak usia dini (paud)',
  },
  { label: 'Administrasi Pendidikan', value: 'administrasi pendidikan' },
  {
    label: 'Pendidikan Bimbingan Konseling',
    value: 'pendidikan bimbingan konseling',
  },
  { label: 'Ilmu Perpustakaan', value: 'ilmu perpustakaan' },
  { label: 'Pendidikan Geografi', value: 'pendidikan geografi' },
  { label: 'Tafsir Hadits', value: 'tafsir hadits' },
  {
    label: 'Pendidikan Pancasila dan Kewarganegaraan',
    value: 'pendidikan pancasila dan kewarganegaraan',
  },
  { label: 'Pendidikan Agama Islam', value: 'pendidikan agama islam' },
  { label: 'Pendidikan Sejarah', value: 'pendidikan sejarah' },
  { label: 'Pendidikan Matematika', value: 'pendidikan matematika' },
  {
    label: 'Pendidikan Bahasa dan Sastra Indonesia',
    value: 'pendidikan bahasa dan sastra indonesia',
  },

  // Fakultas Pertanian
  { label: 'Agronomi dan Hortikultura', value: 'agronomi dan hortikultura' },
  { label: 'Mikrobiologi Pertanian', value: 'mikrobiologi pertanian' },
  { label: 'Teknologi Pasca Panen', value: 'teknologi pasca panen' },
  { label: 'Teknologi Industri Benih', value: 'teknologi industri benih' },
  { label: 'Ilmu Kelautan', value: 'ilmu kelautan' },
  {
    label: 'Agribisnis (Sosial Ekonomi Pertanian)',
    value: 'agribisnis (sosial ekonomi pertanian)',
  },
  { label: 'Agroteknologi', value: 'agroteknologi' },
  { label: 'Teknologi Pangan', value: 'teknologi pangan' },
  { label: 'Peternakan', value: 'peternakan' },
  { label: 'Agroeteknologi', value: 'agroeteknologi' },
  { label: 'Kehutanan', value: 'kehutanan' },
  {
    label: 'Budidaya Perairan (Akuakultur)',
    value: 'budidaya perairan (akuakultur)',
  },
  { label: 'Produksi Ternak', value: 'produksi ternak' },
  { label: 'Teknologi Hasil Ternak', value: 'teknologi hasil ternak' },
  { label: 'Pengelolaan Hutan', value: 'pengelolaan hutan' },
  { label: 'Teknologi Hasil Hutan', value: 'teknologi hasil hutan' },
  { label: 'Silvikultur', value: 'silvikultur' },
  {
    label: 'Konservasi Sumberdaya Hutan dan Ekowisata',
    value: 'konservasi sumberdaya hutan dan ekowisata',
  },
  {
    label: 'Ilmu Hama dan Penyakit Tumbuhan (Proteksi Tanaman)',
    value: 'ilmu hama dan penyakit tumbuhan (proteksi tanaman)',
  },
  {
    label: 'Teknologi Industri Pertanian (Agroindustri)',
    value: 'teknologi industri pertanian (agroindustri)',
  },
  {
    label: 'Manajemen Sumberdaya Lahan (Ilmu Tanah)',
    value: 'manajemen sumberdaya lahan (ilmu tanah)',
  },
  { label: 'Teknologi Hasil Perikanan', value: 'teknologi hasil perikanan' },
  {
    label: 'Agrobisnis Perikanan (Sosial Ekonomi Perikanan)',
    value: 'agrobisnis perikanan (sosial ekonomi perikanan)',
  },
  { label: 'Sumber Daya Perairan', value: 'sumber daya perairan' },
  {
    label: 'Pemanfaatan Sumberdaya Perikanan',
    value: 'pemanfaatan sumberdaya perikanan',
  },
  {
    label: 'Penyuluhan dan Komunikasi Pertanian',
    value: 'penyuluhan dan komunikasi pertanian',
  },
  { label: 'Budidaya Perikanan', value: 'budidaya perikanan' },
  { label: 'Rekayasa Pertanian', value: 'rekayasa pertanian' },
  { label: 'Manajemen Hutan', value: 'manajemen hutan' },
  { label: 'Teknik Pertanian', value: 'teknik pertanian' },
  { label: 'Manajemen Bisnis Unggas', value: 'manajemen bisnis unggas' },

  // Fakultas Pariwisata dan Transportasi
  { label: 'Pariwisata', value: 'pariwisata' },
  {
    label: 'Penerbang (Pendidikan Pilot)',
    value: 'penerbang (pendidikan pilot)',
  },
  { label: 'Pendidikan Intelijen', value: 'pendidikan intelijen' },
  { label: 'Komunikasi Penerbangan', value: 'komunikasi penerbangan' },
  { label: 'Pendidikan Kepolisian', value: 'pendidikan kepolisian' },
  { label: 'Pendidikan Militer', value: 'pendidikan militer' },
  { label: 'Lalu Lintas Udara', value: 'lalu lintas udara' },
  { label: 'Manajemen Logistik', value: 'manajemen logistik' },

  // Fakultas Seni
  { label: 'Desain Interior', value: 'desain interior' },
  { label: 'Desain Produk', value: 'desain produk' },
  { label: 'Animasi', value: 'animasi' },
  { label: 'DKV New Media', value: 'dkv new media' },
  { label: 'DKV Creative Advertising', value: 'dkv creative advertising' },
  { label: 'Furniture Design', value: 'furniture design' },
  { label: 'Tata Boga', value: 'tata boga' },
  { label: 'Desain Grafis', value: 'desain grafis' },

  // Fakultas Teknik
  { label: 'Teknik Pertambangan', value: 'teknik pertambangan' },
  { label: 'Teknik Kelautan', value: 'teknik kelautan' },
  { label: 'Teknik Lingkungan', value: 'teknik lingkungan' },
  { label: 'Rekayasa Hayati', value: 'rekayasa hayati' },
  {
    label: 'Manajemen Rekayasa Industri',
    value: 'manajemen rekayasa industri',
  },
  {
    label: 'Teknik Perencanaan Wilayah dan Kota (Planologi)',
    value: 'teknik perencanaan wilayah dan kota (planologi)',
  },
  {
    label: 'Teknik Penerbangan (Aeronautika dan Astronautika)',
    value: 'teknik penerbangan (aeronautika dan astronautika)',
  },
  { label: 'Teknik Metalurgi', value: 'teknik metalurgi' },
  { label: 'Teknik Sipil', value: 'teknik sipil' },
  { label: 'Arsitektur', value: 'arsitektur' },
  { label: 'Teknik Geodesi', value: 'teknik geodesi' },
  { label: 'Teknik Elektro', value: 'teknik elektro' },
  { label: 'Teknik Mesin', value: 'teknik mesin' },
  { label: 'Teknik Industri', value: 'teknik industri' },
  { label: 'Teknik Perkapalan', value: 'teknik perkapalan' },
  { label: 'Teknik Otomotif', value: 'teknik otomotif' },
  { label: 'Teknobiomedik', value: 'teknobiomedik' },
  { label: 'Oseanografi', value: 'oseanografi' },
  { label: 'Teknik Nuklir', value: 'teknik nuklir' },
  { label: 'Teknik Geologi', value: 'teknik geologi' },
  {
    label: 'Teknik Refrigerasi dan Tata Udara',
    value: 'teknik refrigerasi dan tata udara',
  },
  { label: 'Teknik Telekomunikasi', value: 'teknik telekomunikasi' },
  {
    label: 'Teknik Perancangan Jalan dan Jembatan',
    value: 'teknik perancangan jalan dan jembatan',
  },
  {
    label: 'Teknik Otomasi Manufaktur dan Mekatronika',
    value: 'teknik otomasi manufaktur dan mekatronika',
  },
  { label: 'Teknologi Bioproses', value: 'teknologi bioproses' },
  { label: 'Teknik Grafika', value: 'teknik grafika' },
  { label: 'Transportasi Laut', value: 'transportasi laut' },
  { label: 'Teknik Fisika', value: 'teknik fisika' },
  { label: 'Teknik Geomatika', value: 'teknik geomatika' },
  { label: 'Teknik Perminyakan', value: 'teknik perminyakan' },
  { label: 'Teknik Material', value: 'teknik material' },
  {
    label: 'Automotive and Robotics Engineering',
    value: 'automotive and robotics engineering',
  },
  { label: 'Teknik Tenaga Listrik', value: 'teknik tenaga listrik' },
  { label: 'Teknik Sistem Komputer', value: 'teknik sistem komputer' },
  { label: 'Arsitektur Lanskap', value: 'arsitektur lanskap' },
  { label: 'Teknik Konversi Energi', value: 'teknik konversi energi' },
  {
    label: 'Teknik Bioenergi dan Kemurgi',
    value: 'teknik bioenergi dan kemurgi',
  },
  { label: 'Industrial Robotics Design', value: 'industrial robotics design' },
  { label: 'Teknik Kimia', value: 'teknik kimia' },
  { label: 'Teknik Perpipaan', value: 'teknik perpipaan' },
  {
    label: 'Teknik Bangunan dan Landasan',
    value: 'teknik bangunan dan landasan',
  },
  { label: 'Teknik Listrik Bandara', value: 'teknik listrik bandara' },
  { label: 'Teknik Alat Berat', value: 'teknik alat berat' },
  {
    label: 'Rekayasa Infrastruktur Lingkungan',
    value: 'rekayasa infrastruktur lingkungan',
  },
  { label: 'Teknik Pesawat Udara', value: 'teknik pesawat udara' },
  {
    label: 'Teknik Telekomunikasi dan Navigasi Udara',
    value: 'teknik telekomunikasi dan navigasi udara',
  },
  {
    label: 'Teknik Pengairan (Sumber Daya Air)',
    value: 'teknik pengairan (sumber daya air)',
  },
  { label: 'Meteorologi Terapan', value: 'meteorologi terapan' },
  {
    label: 'Teknik Ekonomi Konstruksi (Quantity Surveyor)',
    value: 'teknik ekonomi konstruksi (quantity surveyor)',
  },
  { label: 'Teknik Sistem Perkapalan', value: 'teknik sistem perkapalan' },

  // Fakultas Ilmu Olahraga
  {
    label: 'Pendidikan Jasmani, Kesehatan, dan Rekreasi',
    value: 'pendidikan jasmani, kesehatan, dan rekreasi',
  },
  {
    label: 'Pendidikan Kepelatihan Keolahragaan',
    value: 'pendidikan kepelatihan keolahragaan',
  },
  { label: 'Olahraga Rekreasi', value: 'olahraga rekreasi' },
  {
    label: 'Kepelatihan Kecabangan Olahraga',
    value: 'kepelatihan kecabangan olahraga',
  },
]

const tipePendanaanItems = [
  { label: 'Fully Funded', value: 'fully funded' },
  { label: 'Partial Funded', value: 'partial funded' },
]

const jenjangItems = [
  { label: 'S1', value: 's1' },
  { label: 'S2', value: 's2' },
  { label: 'S3', value: 's3' },
  { label: 'D3', value: 'd3' },
  { label: 'D4', value: 'd4' },
]

const rangeUangSakuItems = [
  { label: '1.000.000-2.000.000', value: '1000000-2000000' },
  { label: '4.000.000-5.000.000', value: '4000000-5000000' },
]

export {
  semesterItems,
  jurusanItems,
  tipePendanaanItems,
  jenjangItems,
  rangeUangSakuItems,
}
