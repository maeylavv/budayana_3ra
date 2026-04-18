// A central dictionary scaling Island > Topic > Level
export const QUIZ_DATA = {
  sumatra: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/level1 sumatra.png',
          text: 'Tahukah kamu? Sumatera Barat memiliki rumah adat yang sangat indah bernama Rumah Gadang. Ciri khas utama rumah ini adalah atapnya yang runcing menjulang ke atas seperti tanduk kerbau, yang disebut dengan Gonjong. Zaman dahulu, atap ini dibuat dari bahan alami bernama Ijuk agar bagian dalam rumah tetap terasa sejuk. Selain itu, Rumah Gadang dibangun berbentuk panggung dengan tiang yang tinggi untuk melindungi penghuninya dari banjir dan gangguan hewan liar di hutan.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Sumatera Barat yang memiliki atap runcing seperti tanduk kerbau?',
            options: ['Rumah Joglo', 'Rumah Gadang', 'Rumah Honai', 'Rumah Limas'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan bentuk atap "Gonjong" (tanduk kerbau) yang benar!',
            options: [
              { text: 'Atap Limas',   emoji: '', image: '/assets/budayana/islands/atap limas.png' },
              { text: 'Atap Runcing', emoji: '', image: '/assets/budayana/islands/atap runcing.png' },
              { text: 'Atap Datar',   emoji: '', image: '/assets/budayana/islands/atap datar.png' },
              { text: 'Atap Kubah',   emoji: '', image: '/assets/budayana/islands/atap kubah.png' }
            ],
            correctIndex: 1, // B - Atap Runcing (Gonjong)
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat atap Rumah Gadang pada zaman dahulu?',
            options: ['Ijuk', 'Seng', 'Genteng', 'Jerami'],
            correctIndex: 0, // A
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang dibuat berbentuk panggung dengan tiang yang tinggi?',
            options: ['Terlihat mewah', 'Menjemur pakaian', 'Terhindar banjir & hewan', 'Udara dingin'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, berapa jumlah minimal lengkungan atap (gonjong) yang biasanya ada pada Rumah Gadang?',
            options: ['2', '4', '6', '8'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/level2 sumatra.png', // Updated image link dynamically targeting Level 2's specific graphic!
          text: 'Rumah Gadang tidak hanya indah, tetapi juga sangat pintar desainnya. Rumah ini dibangun tanpa menggunakan paku besi sama sekali. Sebagai gantinya, para leluhur menggunakan pasak kayu untuk menyambungkan tiang-tiangnya.\n\nMengapa demikian?\nTernyata, sambungan kayu ini membuat bangunan menjadi lentur dan tidak mudah roboh saat terjadi gempa bumi.\n\nSelain itu, setiap ukiran bunga pada dinding rumah melambangkan kekayaan alam Sumatera Barat, sementara atap runcingnya melambangkan kemenangan dan semangat masyarakatnya.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Gadang dari yang paling bawah hingga paling atas!',
            draggables: [
              { id: 'd1', text: 'Batu Sandi', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Panggung', color: '#dbe0fd' },
              { id: 'd3', text: 'Atap Gonjong', color: '#ffb2d8' },
              { id: 'd4', text: 'Tiang Kayu', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd4', 'd2', 'd3'], // Batu Sandi -> Tiang Kayu -> Lantai Panggung -> Atap Gonjong
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membangun Rumah Gadang yang kuat, jenis kayu apa yang digunakan untuk tiang utama sesuai tradisi?',
            options: ['Kayu Sengon yang ringan', 'Kayu jati atau kayu ulin tua', 'Batang pohon kelapa', 'Papan kayu lapis (triplek)'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang disambung tanpa menggunakan paku besi sama sekali?',
            options: ['Agar atap tidak mudah bocor', 'Agar tetap lentur saat terjadi gempa', 'Supaya cahaya matahari tidak masuk', 'Agar burung tidak bisa bersarang'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Menurut teks, apa makna dari ukiran bunga pada dinding rumah?',
            options: ['Melambangkan kemenangan', 'Melambangkan kedamaian', 'Melambangkan kekayaan alam', 'Melambangkan keluhuran'],
            correctIndex: 2, 
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan simbol berikut dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Atap Runcing', color: '#FFF3B0', image: '/assets/budayana/islands/atap runcing.png' },
              { id: 'm2', text: 'Ukiran Bunga', color: '#D4DCFF', image: '/assets/budayana/islands/Ukiran bunga.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan kemenangan' },
              { id: 'z2', label: 'Melambangkan kekayaan alam' }
            ],
            correctOrder: ['m1', 'm2'], 
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/level3 sumatra.png', // Or level3 sumatra as per user, I'll use standard image source based on screenshot monkey
          text: 'Seiring berjalannya waktu, banyak Rumah Gadang yang mulai berubah. Karena ijuk semakin sulit ditemukan dan mudah bocor, banyak warga yang mengganti atapnya menggunakan seng. Selain itu, Rumah Gadang yang aslinya sangat luas kini harus dibangun di kota-kota besar yang lahannya semakin sempit.\n\nHal ini memicu perdebatan: apakah kita harus tetap mempertahankan bentuk asli sesuai tradisi, atau boleh mengubahnya agar lebih modern dan praktis?\n\nSebagai generasi penerus, kita harus bijak dalam menjaga warisan budaya ini agar tidak hilang ditelan zaman.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membangun Rumah Gadang di kota besar, apakah kamu tetap harus membuat tangga di bagian luar?',
            opinions: [
              { id: 'op1', text: 'Tetap Harus' },
              { id: 'op2', text: 'Boleh Diubah' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena tangga luar adalah ciri khas untuk menyambut tamu sesuai tradisi' },
              { id: 'r2', text: 'B. Agar menghemat tempat namun tetap menggunakan ukiran khas di pintu' },
              { id: 'r3', text: 'C. Supaya rumah terlihat unik dibandingkan rumah tetangga' },
              { id: 'r4', text: 'D. Agar orang lain tidak mudah masuk ke dalam rumah' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, mengganti atap ijuk menjadi atap seng pada Rumah Gadang adalah tindakan yang...',
            opinions: [
              { id: 'op1', text: 'Tepat' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena atap seng lebih tahan lama dan tidak mudah bocor' },
              { id: 'r2', text: 'B. Karena kehilangan keaslian dan ciri khas budaya lokal' },
              { id: 'r3', text: 'C. Agar lebih menghemat biaya perawatan setiap tahunnya' },
              { id: 'r4', text: 'D. Supaya rumah terlihat lebih modern seperti rumah di kota' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op1', reasonId: 'r3' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan ajakan untuk temanmu agar mau menjaga kebersihan Rumah Gadang!',
            draggables: [
              { id: 'w1', text: 'menjaga',       color: '#f6bad3ff' },
              { id: 'w2', text: 'Rumah Gadang',  color: '#99AAEF' },
              { id: 'w3', text: 'warisan budaya', color: '#FFC7B1' },
              { id: 'w4', text: 'sebagai',       color: '#a5ec93ff' },
              { id: 'w5', text: 'Ayo kita',      color: '#f5f199ff' },
              { id: 'w6', text: 'kebersihan',    color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w5', 'w1', 'w6', 'w2', 'w4', 'w3'],
            xp: 40
          }
        ]
      }
    }
  }
}
