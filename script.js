
const wordList =
{
  'Unit 1': [
    {
      name: 'Morning', pronounce: '/ˈmɔː.nɪŋ/', meaning: 'Buổi sáng', type: 'noun (danh từ)', example: 'She works in the morning. \n(Cô ấy làm việc vào buổi sáng.)'
    }, {
      name: "Good morning", pronounce: "/ˌɡʊd ˈmɔː.nɪŋ/", meaning: "Chào buổi sáng", type: "Phr (Cụm từ)", example: "Good morning! \n(Chào buổi sáng!)",
    }, {
      name: "Afternoon", pronounce: "/ˌæftərˈnuːn/", meaning: "Buổi chiều", type: "Noun  Danh từ)", example: "I have a meeting in the afternoon. \n(Tôi có cuộc họp vào buổi chiều.)",
    }, {
      name: "Good afternoon", pronounce: "/ˌɡʊd ˌɑːf.təˈnuːn/", meaning: "Chào buổi chiều", type: "Phr (Cụm từ)", example: "Good afternoon! \n(Chào buổi chiều!)",
    }, {
      name: "Evening", pronounce: "/ˈiːvnɪŋ/", meaning: "Buổi tối", type: "Noun (Danh từ)", example: "We will meet in the evening. \n(Chúng ta sẽ gặp vào buổi tối.)",
    }, {
      name: "Good evening", pronounce: "/ˌɡʊd ˈiːv.nɪŋ/", meaning: "Chào buổi tối", type: "Phr (Cụm từ)", example: "Good evening! \n(Chào buổi tối!)",
    }, {
      name: "Night", pronounce: "/naɪt/", meaning: "Buổi đêm", type: "Noun (Danh từ)", example: "She likes walking at night. \n(Cô ấy thích đi dạo vào buổi đêm.)",
    }, {
      name: "Good night", pronounce: "/ɡʊd naɪt/", meaning: "Chúc ngủ ngon", type: "Phr (Cụm từ)", example: "Good night! \n(Chúc ngủ ngon!)",
    }, {
      name: "Midnight", pronounce: "/ˈmɪdnaɪt/", meaning: "Nửa đêm", type: "Noun (Danh từ)", example: "He arrived at midnight. \n(Anh ấy đến vào nửa đêm.)",
    }, {
      name: "Tomorrow", pronounce: "/təˈmɑːrəʊ/", meaning: "Ngày mai", type: "Noun (Danh từ)", example: "I will see you tomorrow. \n(Tôi sẽ gặp bạn vào ngày mai.)",
    }, {
      name: "Later", pronounce: "/ˈleɪtər/", meaning: "Sau đó", type: "Adv (Trạng từ)", example: "See you later! \n(Gặp bạn sau!)",
    }, {
      name: "Again", pronounce: "/əˈɡeɪn/", meaning: "Lại, lần nữa", type: "Adv (Trạng từ)", example: "Let's try again. \n(Hãy thử lại lần nữa.)",
    }, {
      name: "Greeting", pronounce: "/ˈɡriːtɪŋ/", meaning: "Lời chào", type: "Noun (Danh từ)", example: "She sent a greeting to everyone. \n(Cô ấy gửi lời chào đến mọi người.)",
    }, {
      name: "Goodbye", pronounce: "/ˌɡʊdˈbaɪ/", meaning: "Chào tạm biệt", type: "Noun (Danh từ)", example: "Goodbye! \n(Chào tạm biệt!)"
    }
  ],
  'Unit 2': [
    {
      name: "Nation", pronounce: "/ˈneɪʃn/", meaning: "Quốc gia", type: "Noun (Danh từ)", example: "The nation celebrated its independence day."
    },
    { name: "Nationality", pronounce: "/ˌnæʃəˈnæləti/", meaning: "Quốc tịch", type: "Noun (Danh từ)", example: "She asked for my nationality." },
    { name: "Country", pronounce: "/ˈkʌntri/", meaning: "Đất nước", type: "Noun (Danh từ)", example: "They are traveling to another country." },
    { name: "England", pronounce: "/ˈɪŋɡlənd/", meaning: "Nước Anh", type: "Noun (Danh từ)", example: "England is part of the United Kingdom." },
    { name: "English", pronounce: "/ˈɪŋɡlɪʃ/", meaning: "Người Anh, tiếng Anh", type: "Noun (Danh từ)", example: "He speaks English fluently." },
    { name: "America", pronounce: "/əˈmer.ɪ.kə/", meaning: "Nước Mỹ", type: "Noun (Danh từ)", example: "America is known for its diverse culture." },
    { name: "American", pronounce: "/əˈmerɪkən/", meaning: "Người Mỹ", type: "Noun (Danh từ)", example: "She is an American citizen." },
    { name: "Japan", pronounce: "/dʒəˈpæn/", meaning: "Nước Nhật Bản", type: "Noun (Danh từ)", example: "Japan is famous for its technology." },
    { name: "Japanese", pronounce: "/ˌdʒæpəˈniːz/", meaning: "Người Nhật, tiếng Nhật", type: "Noun (Danh từ)", example: "They studied Japanese in school." },
    { name: "Malaysia", pronounce: "/məˈleɪʒə/", meaning: "Nước Mã Lai", type: "Noun (Danh từ)", example: "Malaysia has beautiful beaches." },
    { name: "Malaysian", pronounce: "/məˈleɪʒn/", meaning: "Tiếng Mã Lai, người Mã Lai", type: "Noun (Danh từ)", example: "He is a Malaysian student." },
    { name: "Vietnam", pronounce: "/ˌvjetˈnæm/", meaning: "Nước Việt Nam", type: "Noun (Danh từ)", example: "Vietnam is known for its rich history." },
    { name: "Vietnamese", pronounce: "/ˌvjet.nəˈmiːz/", meaning: "Tiếng Việt, người Việt", type: "Noun (Danh từ)", example: "They enjoy Vietnamese food." },
  ],
  'Unit 3': [{ name: "Today", Pronounce: "/təˈdeɪ/", meaning: "Hôm nay", type: "Noun (Danh từ)", example: "Today is a beautiful day." },
  { name: "Day", Pronounce: "/deɪ/", meaning: "Ngày", type: "Noun (Danh từ)", example: "I have a busy day ahead." },
  { name: "Week", Pronounce: "/wiːk/", meaning: "Tuần", type: "Noun (Danh từ)", example: "This week is going by quickly." },
  { name: "Weekend", Pronounce: "/ˈwiːkend/", meaning: "Cuối tuần", type: "Noun (Danh từ)", example: "I’m looking forward to the weekend." },
  { name: "Monday", Pronounce: "/ˈmʌndeɪ/", meaning: "Thứ Hai", type: "Noun (Danh từ)", example: "Monday is the start of the work week." },
  { name: "Tuesday", Pronounce: "/ˈtuːzdeɪ/", meaning: "Thứ Ba", type: "Noun (Danh từ)", example: "I have a meeting on Tuesday." },
  { name: "Wednesday", Pronounce: "/ˈwenzdeɪ/", meaning: "Thứ Tư", type: "Noun (Danh từ)", example: "Wednesday is the middle of the week." },
  { name: "Thursday", Pronounce: "/ˈθɜːrzdeɪ/", meaning: "Thứ Năm", type: "Noun (Danh từ)", example: "I have a class every Thursday." },
  { name: "Friday", Pronounce: "/ˈfraɪdeɪ/", meaning: "Thứ Sáu", type: "Noun (Danh từ)", example: "Friday is my favorite day of the week." },
  { name: "Saturday", Pronounce: "/ˈsætərdeɪ/", meaning: "Thứ Bảy", type: "Noun (Danh từ)", example: "We usually go out on Saturday." },
  { name: "Sunday", Pronounce: "/ˈsʌndeɪ/", meaning: "Chủ nhật", type: "Noun (Danh từ)", example: "Sunday is a day for rest." },
  ],
  'Unit 4': [{ name: "Month", pronounce: "/mʌnθ/", meaning: "Tháng", type: "Noun (Danh từ)", example: "There are twelve months in a year." },
  { name: "Year", pronounce: "/jɪr/", meaning: "Năm", type: "Noun (Danh từ)", example: "This year has been very eventful." },
  { name: "Birthday", pronounce: "/ˈbɜːrθdeɪ/", meaning: "Sinh nhật, ngày sinh", type: "Noun (Danh từ)", example: "Happy Birthday! (Chúc mừng sinh nhật!)" },
  { name: "January", pronounce: "/ˈdʒænjuəri/", meaning: "Tháng Một", type: "Noun (Danh từ)", example: "January is the first month of the year." },
  { name: "February", pronounce: "/ˈfebrueri/", meaning: "Tháng Hai", type: "Noun (Danh từ)", example: "February is known for Valentine's Day." },
  { name: "March", pronounce: "/mɑːrtʃ/", meaning: "Tháng Ba", type: "Noun (Danh từ)", example: "March often brings the beginning of spring." },
  { name: "April", pronounce: "/ˈeɪprəl/", meaning: "Tháng Tư", type: "Noun (Danh từ)", example: "April showers bring May flowers." },
  { name: "May", pronounce: "/meɪ/", meaning: "Tháng Năm", type: "Noun (Danh từ)", example: "May is known for its beautiful weather." },
  { name: "June", pronounce: "/dʒuːn/", meaning: "Tháng Sáu", type: "Noun (Danh từ)", example: "June marks the start of summer." },
  { name: "July", pronounce: "/dʒuˈlaɪ/", meaning: "Tháng Bảy", type: "Noun (Danh từ)", example: "July is often a popular month for vacations." },
  { name: "August", pronounce: "/ɔːˈɡʌst/", meaning: "Tháng Tám", type: "Noun (Danh từ)", example: "August can be quite hot in many places." },
  { name: "September", pronounce: "/sepˈtembər/", meaning: "Tháng Chín", type: "Noun (Danh từ)", example: "September marks the beginning of autumn." },
  { name: "October", pronounce: "/ɑːkˈtəʊbər/", meaning: "Tháng Mười", type: "Noun (Danh từ)", example: "October is known for Halloween." },
  { name: "November", pronounce: "/nəʊˈvembər/", meaning: "Tháng Mười một", type: "Noun (Danh từ)", example: "November is a month for Thanksgiving in the U.S." },
  { name: "December", pronounce: "/dɪˈsembər/", meaning: "Tháng Mười hai", type: "Noun (Danh từ)", example: "December is celebrated for Christmas and New Year." },
  ],
  'Unit 5': [{ name: "Can", pronounce: "/kæn/", meaning: "Có thể (có khả năng làm gì đó)", type: "Verb (Động từ)", example: "I can swim well." },
  { name: "Swim", pronounce: "/swɪm/", meaning: "Bơi", type: "Verb (Động từ)", example: "She likes to swim in the pool." },
  { name: "Go swimming", pronounce: "/ɡəʊˈswɪmɪŋ/", meaning: "Đi bơi", type: "Verb (Động từ)", example: "We go swimming every weekend." },
  { name: "Draw", pronounce: "/drɔː/", meaning: "Vẽ", type: "Verb (Động từ)", example: "He loves to draw landscapes." },
  { name: "Sing", pronounce: "/sɪŋ/", meaning: "Hát", type: "Verb (Động từ)", example: "She can sing beautifully." },
  { name: "Swing", pronounce: "/swɪŋ/", meaning: "Đu đưa", type: "Verb (Động từ)", example: "The children like to swing in the park." },
  { name: "Dance", pronounce: "/dæns/", meaning: "Khiêu vũ", type: "Verb (Động từ)", example: "They enjoy dancing at parties." },
  { name: "Ride", pronounce: "/raɪd/", meaning: "Lái xe", type: "Verb (Động từ)", example: "He rides his bike to school." },
  { name: "Cook", pronounce: "/kʊk/", meaning: "Nấu ăn", type: "Verb (Động từ)", example: "She loves to cook Italian food." },
  { name: "Skate", pronounce: "/skeɪt/", meaning: "Trượt băng", type: "Verb (Động từ)", example: "They go skating at the rink." },
  { name: "Skip", pronounce: "/skɪp/", meaning: "Nhảy dây", type: "Verb (Động từ)", example: "Skipping rope is good exercise." },
  { name: "Play", pronounce: "/pleɪ/", meaning: "Chơi", type: "Verb (Động từ)", example: "The kids play in the backyard." },
  { name: "Guitar", pronounce: "/ɡɪˈtɑːr/", meaning: "Đàn ghi ta", type: "Noun (Danh từ)", example: "He plays the guitar in a band." },
  { name: "Piano", pronounce: "/piˈænəʊ/", meaning: "Đàn piano", type: "Noun (Danh từ)", example: "She takes piano lessons every week." },
  { name: "Volleyball", pronounce: "/ˈvɑːlibɔːl/", meaning: "Bóng chuyền", type: "Noun (Danh từ)", example: "They play volleyball on the beach." },
  { name: "Tennis", pronounce: "/ˈtenɪs/", meaning: "Quần vợt", type: "Noun (Danh từ)", example: "He is training for a tennis match." },
  { name: "Chess", pronounce: "/tʃes/", meaning: "Cờ vua", type: "Noun (Danh từ)", example: "They enjoy playing chess together." },
  ],
  'Unit 6': [{ name: "School", pronounce: "/skuːl/", meaning: "Trường học", type: "Noun (Danh từ)", example: "The school is closed on weekends." },
  { name: "Class", pronounce: "/klæs/", meaning: "Lớp học", type: "Noun (Danh từ)", example: "Our class starts at 8 AM." },
  { name: "Student", pronounce: "/ˈstuːdnt/", meaning: "Học sinh", type: "Noun (Danh từ)", example: "The student is studying for exams." },
  { name: "Classroom", pronounce: "/ˈklæsruːm/", meaning: "Phòng học", type: "Noun (Danh từ)", example: "The classroom is equipped with new technology." },
  { name: "Study", pronounce: "/ˈstʌdi/", meaning: "Học", type: "Verb (Động từ)", example: "She needs to study for her final exams." },
  { name: "Address", pronounce: "/əˈdres/", meaning: "Địa chỉ", type: "Noun (Danh từ)", example: "Please write your address on the form." },
  { name: "Street", pronounce: "/striːt/", meaning: "Đường, phố", type: "Noun (Danh từ)", example: "The street is lined with trees." },
  { name: "Road", pronounce: "/rəʊd/", meaning: "Con đường", type: "Noun (Danh từ)", example: "The road is under construction." },
  { name: "Village", pronounce: "/ˈvɪlɪdʒ/", meaning: "Ngôi làng", type: "Noun (Danh từ)", example: "The village is known for its historical sites." },
  { name: "District", pronounce: "/ˈdɪstrɪkt/", meaning: "Quận", type: "Noun (Danh từ)", example: "The district is famous for its cultural festivals." },
  ],
  'Unit 7': [{ name: "Welcome", pronounce: "/ˈwel.kəm/", meaning: "Hoan nghênh", type: "Noun (Danh từ)", example: "Welcome to our home!" },
  { name: "Hobby", pronounce: "/ˈhɑːbi/", meaning: "Sở thích", type: "Noun (Danh từ)", example: "Reading is my favorite hobby." },
  { name: "Reading", pronounce: "/ˈriː.dɪŋ/", meaning: "Đọc sách", type: "Noun (Danh từ)", example: "She enjoys reading novels." },
  { name: "Collecting stamps", pronounce: "/kəˈlek.tɪŋ stæmps/", meaning: "Sưu tầm tem", type: "Phrase (Cụm từ)", example: "Collecting stamps is a popular hobby." },
  { name: "Riding a bike", pronounce: "/ˈraɪdɪŋ ə baɪk/", meaning: "Đạp xe", type: "Phrase (Cụm từ)", example: "Riding a bike is a great way to exercise." },
  { name: "Playing badminton", pronounce: "/ˈpleɪɪŋ ˈbæd.mɪn.tən/", meaning: "Chơi cầu lông", type: "Phrase (Cụm từ)", example: "They spent the afternoon playing badminton." },
  { name: "Flying a kite", pronounce: "/ˈflaɪɪŋ ə kaɪt/", meaning: "Thả diều", type: "Phrase (Cụm từ)", example: "Flying a kite is fun on a windy day." },
  { name: "Taking photographs", pronounce: "/ˈteɪkɪŋ ˈfəʊ.tə.græfs/", meaning: "Chụp ảnh", type: "Phrase (Cụm từ)", example: "Taking photographs is a great way to capture memories." },
  { name: "Watching TV", pronounce: "/ˈwɒtʃɪŋ ˈtiːˈviː/", meaning: "Xem tivi", type: "Phrase (Cụm từ)", example: "Watching TV is a relaxing way to spend the evening." },
  ],
  'Unit 8': [{ name: "Timetable", pronounce: "/ˈtaɪmˌteɪ.bəl/", meaning: "Thời khóa biểu", type: "Noun (Danh từ)", example: "I need to check my timetable for the next class." },
  { name: "Subject", pronounce: "/ˈsʌbdʒɪkt/", meaning: "Môn học", type: "Noun (Danh từ)", example: "Math is my favorite subject." },
  { name: "Maths", pronounce: "/mæθs/", meaning: "Môn toán", type: "Noun (Danh từ)", example: "He has a math exam tomorrow." },
  { name: "Music", pronounce: "/ˈmjuːzɪk/", meaning: "Môn âm nhạc", type: "Noun (Danh từ)", example: "She enjoys studying music theory." },
  { name: "Art", pronounce: "/ɑːrt/", meaning: "Môn Mỹ thuật", type: "Noun (Danh từ)", example: "Art class allows for creative expression." },
  { name: "Science", pronounce: "/ˈsaɪəns/", meaning: "Môn khoa học", type: "Noun (Danh từ)", example: "Science experiments are fascinating." },
  { name: "Vietnamese", pronounce: "/ˌviːetnəˈmiːz/", meaning: "Môn tiếng Việt", type: "Adjective/Noun (Tính từ/Danh từ)", example: "Learning Vietnamese helps with understanding the culture." },
  { name: "Physical Education", pronounce: "/ˈfɪzɪkəl ˌɛdʒʊˈkeɪʃən/", meaning: "Môn Thể dục", type: "Noun (Danh từ)", example: "PE class includes various sports and exercises." },
  { name: "History", pronounce: "/ˈhɪstri/", meaning: "Môn Lịch sử", type: "Noun (Danh từ)", example: "History lessons cover events from the past." },
  { name: "Information Technology", pronounce: "/ˌɪnfərˈmeɪʃən tɛkˈnɒlədʒi/", meaning: "Môn Tin học", type: "Noun (Danh từ)", example: "IT class involves learning about computers and programming." },
  ],
  'Unit 9': [{ name: "Listen to music", pronounce: "/ˈlɪsn tu ˈmjuːzɪk/", meaning: "Nghe nhạc", type: "Verb (Động từ)", example: "I like to listen to music while studying." },
  { name: "Read", pronounce: "/riːd/", meaning: "Đọc", type: "Verb (Động từ)", example: "She reads a book every evening." },
  { name: "Write", pronounce: "/raɪt/", meaning: "Viết", type: "Verb (Động từ)", example: "He needs to write a letter to his friend." },
  { name: "Dictation", pronounce: "/dɪkˈteɪʃn/", meaning: "Chính tả", type: "Noun (Danh từ)", example: "Dictation helps improve spelling skills." },
  { name: "Write a dictation", pronounce: "/raɪt ə dɪkˈteɪʃn/", meaning: "Viết bài chính tả", type: "Verb/Noun (Động từ/Danh từ)", example: "We will write a dictation in class tomorrow." },
  { name: "Pain", pronounce: "/peɪn/", meaning: "Đau", type: "Noun (Danh từ)", example: "He felt a sharp pain in his arm." },
  { name: "Watch", pronounce: "/wɑːtʃ/", meaning: "Xem", type: "Verb (Động từ)", example: "They like to watch movies on weekends." },
  { name: "Text", pronounce: "/tekst/", meaning: "Nhắn tin", type: "Noun (Danh từ)", example: "She sent a text to her friend." },
  { name: "Mask", pronounce: "/mæsk/", meaning: "Mặt nạ", type: "Noun (Danh từ)", example: "He wore a mask to protect himself from the dust." },
  { name: "Puppet", pronounce: "/ˈpʌpɪt/", meaning: "Con rối", type: "Noun (Danh từ)", example: "The puppet show was very entertaining." },
  { name: "Exercise", pronounce: "/ˈeksərsaɪz/", meaning: "Bài tập", type: "Noun (Danh từ)", example: "She completed her exercise routine in the morning." },
  ],
  'Unit 10': [{ name: "Yesterday", pronounce: "/ˈjestərdeɪ/", meaning: "Hôm qua", type: "Noun (Danh từ)", example: "Yesterday was a sunny day." },
  { name: "Library", pronounce: "/ˈlaɪ.brər.i/", meaning: "Thư viện", type: "Noun (Danh từ)", example: "She borrowed a book from the library." },
  { name: "In the school library", pronounce: "/ɪn ðə skuːl ˈlaɪ.brər.i/", meaning: "Trong thư viện trường học", type: "Preposition (Giới từ)", example: "We study in the school library during free periods." },
  { name: "At home", pronounce: "/æt həʊm/", meaning: "Ở nhà", type: "Preposition (Giới từ)", example: "I usually relax at home after school." },
  { name: "At the zoo", pronounce: "/æt ðə zuː/", meaning: "Ở vườn bách thú", type: "Preposition (Giới từ)", example: "We saw many animals at the zoo." },
  { name: "At school", pronounce: "/æt skuːl/", meaning: "Ở trường", type: "Preposition (Giới từ)", example: "She is at school right now." },
  { name: "On the beach", pronounce: "/ɒn ðə biːtʃ/", meaning: "Trên bãi biển", type: "Preposition (Giới từ)", example: "They enjoyed building sandcastles on the beach." },
  { name: "Water", pronounce: "/ˈwɔːtər/", meaning: "Nước", type: "Noun (Danh từ)", example: "It's important to drink plenty of water." }
  ],
  'Unit 11': [
    { name: "Get up", pronounce: "/ɡet ʌp/", meaning: "Thức dậy", type: "Verb (Động từ)", example: "I usually get up at 6 A.M." },
    { name: "Go to school", pronounce: "/ɡəʊ tə skuːl/", meaning: "Đi học", type: "Verb (Động từ)", example: "The children go to school by bus." },
    { name: "Go to bed", pronounce: "/ɡəʊ tə bed/", meaning: "Đi ngủ", type: "Verb (Động từ)", example: "He goes to bed early on weekdays." },
    { name: "Breakfast", pronounce: "/ˈbrek.fəst/", meaning: "Bữa sáng", type: "Noun (Danh từ)", example: "I had toast for breakfast." },
    { name: "Lunch", pronounce: "/lʌntʃ/", meaning: "Bữa trưa", type: "Noun (Danh từ)", example: "We had pasta for lunch." },
    { name: "Dinner", pronounce: "/ˈdɪn.ər/", meaning: "Bữa tối", type: "Noun (Danh từ)", example: "They invited us for dinner." },
    { name: "At noon", pronounce: "/ət nuːn/", meaning: "Vào buổi trưa", type: "Phrase (Cụm từ)", example: "We will meet at noon." },
    { name: "A.M (ante meridiem)", pronounce: "/æm/", meaning: "Buổi sáng", type: "Phrase (Cụm từ)", example: "I woke up at 7 A.M." },
    { name: "P.M (post meridiem)", pronounce: "/ˌpiːˈem/", meaning: "Buổi chiều tối", type: "Phrase (Cụm từ)", example: "The event starts at 6 P.M." },
    { name: "O’clock", pronounce: "/əˈklɒk/", meaning: "Giờ", type: "Phrase (Cụm từ)", example: "The meeting is at 3 o’clock." },
    { name: "Go home", pronounce: "/ɡəʊ həʊm/", meaning: "Về nhà", type: "Verb (Động từ)", example: "After school, they go home to rest." },
    { name: "Go to bed", pronounce: "/ɡəʊ tə bed/", meaning: "Đi ngủ", type: "Verb (Động từ)", example: "She goes to bed at 10 P.M. every night." },

  ],
  'Unit 12': [
    { name: "Job", pronounce: "/dʒɒb/", meaning: "Công việc", type: "Noun (Danh từ)", example: "She enjoys her job as a teacher." },
    { name: "Occupation", pronounce: "/ˌɒkjʊˈpeɪʃn/", meaning: "Nghề nghiệp", type: "Noun (Danh từ)", example: "His occupation is a software engineer." },
    { name: "Career", pronounce: "/kəˈrɪər/", meaning: "Sự nghiệp", type: "Noun (Danh từ)", example: "She is focusing on building her career." },
    { name: "Employee", pronounce: "/ɪmˈplɔɪ.iː/", meaning: "Nhân viên", type: "Noun (Danh từ)", example: "The company has many dedicated employees." },
    { name: "Employer", pronounce: "/ɪmˈplɔɪər/", meaning: "Người sử dụng lao động", type: "Noun (Danh từ)", example: "The employer is responsible for workplace safety." },
    { name: "Work", pronounce: "/wɜːk/", meaning: "Công việc, lao động", type: "Noun (Danh từ)", example: "He has a lot of work to do today." },
    { name: "Workplace", pronounce: "/ˈwɜːk.pleɪs/", meaning: "Nơi làm việc", type: "Noun (Danh từ)", example: "The workplace environment is very professional." },
    { name: "Salary", pronounce: "/ˈsæləri/", meaning: "Lương", type: "Noun (Danh từ)", example: "Her salary is reviewed annually." },
    { name: "Wage", pronounce: "/weɪdʒ/", meaning: "Lương", type: "Noun (Danh từ)", example: "The workers receive a weekly wage." },
    { name: "Payment", pronounce: "/ˈpeɪmənt/", meaning: "Thanh toán, tiền lương", type: "Noun (Danh từ)", example: "Payment will be made at the end of the month." },
    { name: "Part-time", pronounce: "/ˌpɑːt ˈtaɪm/", meaning: "Bán thời gian", type: "Adjective (Tính từ)", example: "She works part-time while studying." },
    { name: "Full-time", pronounce: "/ˌfʊl ˈtaɪm/", meaning: "Toàn thời gian", type: "Adjective (Tính từ)", example: "He recently got a full-time job." },
    { name: "Promotion", pronounce: "/prəˈməʊʃn/", meaning: "Sự thăng chức", type: "Noun (Danh từ)", example: "She is hoping for a promotion soon." },
    { name: "Manager", pronounce: "/ˈmænɪdʒər/", meaning: "Quản lý", type: "Noun (Danh từ)", example: "The manager oversees the entire team." },
    { name: "Supervisor", pronounce: "/ˈsuːpəvaɪzər/", meaning: "Người giám sát", type: "Noun (Danh từ)", example: "The supervisor ensures that all tasks are completed." },
    { name: "Colleague", pronounce: "/ˈkɒliːɡ/", meaning: "Đồng nghiệp", type: "Noun (Danh từ)", example: "I have a good relationship with my colleagues." },
    { name: "Interview", pronounce: "/ˈɪntəvjuː/", meaning: "Phỏng vấn", type: "Noun (Danh từ)", example: "She is preparing for her job interview." },
    { name: "Resume", pronounce: "/ˈrezəmeɪ/", meaning: "Sơ yếu lý lịch", type: "Noun (Danh từ)", example: "Make sure your resume is up to date." },
    { name: "CV (Curriculum Vitae)", pronounce: "/ˌkʌrɪkjʊləm ˈviːtaɪ/", meaning: "Sơ yếu lý lịch", type: "Noun (Danh từ)", example: "He sent his CV to several companies." },
    { name: "Qualification", pronounce: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "Trình độ, bằng cấp", type: "Noun (Danh từ)", example: "Her qualifications make her a strong candidate for the job." },
    { name: "Experience", pronounce: "/ɪkˈspɪəriəns/", meaning: "Kinh nghiệm", type: "Noun (Danh từ)", example: "He has over 10 years of experience in his field." },
    { name: "Skills", pronounce: "/skɪlz/", meaning: "Kỹ năng", type: "Noun (Danh từ)", example: "Good communication skills are essential for this role." },
    { name: "Training", pronounce: "/ˈtreɪnɪŋ/", meaning: "Đào tạo", type: "Noun (Danh từ)", example: "The company provides training for new employees." },
    { name: "Contract", pronounce: "/ˈkɒntrækt/", meaning: "Hợp đồng", type: "Noun (Danh từ)", example: "They signed a two-year contract." },
    { name: "Deadline", pronounce: "/ˈdedlaɪn/", meaning: "Hạn cuối", type: "Noun (Danh từ)", example: "The project deadline is next week." },
    { name: "Office", pronounce: "/ˈɒfɪs/", meaning: "Văn phòng", type: "Noun (Danh từ)", example: "She works in a spacious office." },
    { name: "Company", pronounce: "/ˈkʌmpəni/", meaning: "Công ty", type: "Noun (Danh từ)", example: "The company is expanding its operations." },
    { name: "Corporation", pronounce: "/ˌkɔːpəˈreɪʃn/", meaning: "Tập đoàn", type: "Noun (Danh từ)", example: "He works for a large corporation." },
    { name: "Entrepreneur", pronounce: "/ˌɒn.trə.prəˈnɜːr/", meaning: "Doanh nhân", type: "Noun (Danh từ)", example: "She is a successful entrepreneur." },
    { name: "Career development", pronounce: "/kəˈrɪər dɪˈveləpmənt/", meaning: "Phát triển sự nghiệp", type: "Noun (Danh từ)", example: "Career development is important for personal growth." },
    { name: "Retirement", pronounce: "/rɪˈtaɪəmənt/", meaning: "Nghỉ hưu", type: "Noun (Danh từ)", example: "He is planning for his retirement next year." },
    { name: "Teacher", pronounce: "/ˈtiː.tʃər/", meaning: "Giáo viên", type: "Noun (Danh từ)", example: "The teacher explained the lesson clearly." },
    { name: "Student", pronounce: "/ˈstjuː.dənt/", meaning: "Học sinh", type: "Noun (Danh từ)", example: "The student is preparing for the final exam." },
    { name: "Driver", pronounce: "/ˈdraɪ.vər/", meaning: "Tài xế", type: "Noun (Danh từ)", example: "The driver picked us up from the airport." },
    { name: "Clerk", pronounce: "/klɑːk/", meaning: "Nhân viên văn phòng", type: "Noun (Danh từ)", example: "The clerk filed all the necessary documents." },
    { name: "Worker", pronounce: "/ˈwɜːrkər/", meaning: "Công nhân", type: "Noun (Danh từ)", example: "The worker operates the machinery in the factory." },
    { name: "Farmer", pronounce: "/ˈfɑː.mər/", meaning: "Nông dân", type: "Noun (Danh từ)", example: "The farmer works in the fields every day." },
    { name: "Hospital", pronounce: "/ˈhɒs.pɪ.təl/", meaning: "Bệnh viện", type: "Noun (Danh từ)", example: "She was admitted to the hospital for treatment." },
    { name: "Nurse", pronounce: "/nɜːs/", meaning: "Y tá", type: "Noun (Danh từ)", example: "The nurse took care of the patient." },
    { name: "Factory", pronounce: "/ˈfæk.tər.i/", meaning: "Nhà máy", type: "Noun (Danh từ)", example: "The factory produces electronics." },
    { name: 'Office', pronounce: '/ˈɒf.ɪs/', meaning: 'Văn phòng', type: 'Noun (Danh từ)' },
    { name: 'Field', pronounce: '/fiːld/', meaning: 'Noun (Danh từ)', type: 'Cánh đồng' }

  ]
};

// Từ cần ghép cho màn hiện tại
let countFalse = 0;
let isCorrect = false;
let currentWord = '';
let scene = '';

let lettersContainer = document.getElementById('lettersContainer');
let inputBox = document.getElementById('inputBox');
let message = document.getElementById('message');
let submitButton = document.getElementById('submitWord');
let textClass = document.getElementById('class');
let textPronounce = document.getElementById('pronounce');
let textExample = document.getElementById('example');
let textMeaning = document.getElementById('meaning');
let textType = document.getElementById('type');
let nextButton = document.getElementById('next');
let textNumber = document.getElementById('number');
let textAnswer = document.getElementById('answer');
let tmp;
// Hàm khởi tạo game
function initGame() {
  textExample.innerText = '';
  textAnswer.innerText = '';
  textAnswer.style.display = 'none';
  example.style.display = 'none';
  isCorrect = false;
  nextButton.style.display = 'none';
  //scene = getSequentialSceneAndWord().name;
  tmp = getSequentialSceneAndWord();
  currentWord = tmp.name;
  textMeaning.innerText = 'Dịch nghĩa: ' + tmp.meaning;
  textType.innerText = 'Từ loại: ' + tmp.type;
  textPronounce.innerText = 'Phiên âm: ' + tmp.pronounce;
  displayLetters(currentWord);
  message.innerText = '';
}


/* Hàm lấy từ ngẫu nhiên từ danh sách từ
function getRandomScene() {
  const regions = Object.keys(wordList);

  // Chọn ngẫu nhiên 1 vùng
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  textClass.innerText = randomRegion;
  return randomRegion;
}
*/

let currentSceneIndex = 0; // Biến để theo dõi chỉ số cảnh hiện tại
let currentIndex = 0; // Biến để theo dõi chỉ số từ hiện tại trong cảnh


// Hàm lấy từ lần lượt từ từng cảnh trong danh sách
function getSequentialSceneAndWord() {

  const sceneList = Object.keys(wordList);  
  const currentScene = sceneList[currentSceneIndex]; // Lấy cảnh hiện tại dựa trên chỉ số
  const regions = wordList[currentScene]; // Lấy danh sách từ của cảnh hiện tại
  textClass.innerText = currentScene;
  // Lấy từ dựa trên chỉ số từ hiện tại
  const selectedWord = regions[currentIndex];

  // Tăng chỉ số từ lên để chuẩn bị cho lần chọn tiếp theo
  currentIndex++;
  textNumber.innerText = 'Câu: ' + currentIndex + '/' + regions.length;
  // Nếu chỉ số từ vượt quá độ dài của mảng từ, đặt lại chỉ số từ về 0 và chuyển sang cảnh tiếp theo
  if (currentIndex >= regions.length) {
    currentIndex = 0;
    currentSceneIndex++; // Tăng chỉ số cảnh để chuyển cảnh

    // Nếu chỉ số cảnh vượt quá độ dài của sceneList, đặt lại chỉ số cảnh về 0
    if (currentSceneIndex >= sceneList.length) {
      currentSceneIndex = 0; // Quay lại cảnh đầu tiên
    }
  }
  return selectedWord;
}



// Hàm xử lý khi nhấp chuột vào ký tự trong ô ghép từ (đưa trở lại ô từ)
function handleClickInInputBox(e) {
  if (isCorrect) return;

  let letter = e.target.innerText;

  // Tạo một div mới để đưa ký tự trở lại ô từ
  let letterDiv = document.createElement('div');
  letterDiv.innerText = letter;
  letterDiv.draggable = true;
  letterDiv.addEventListener('dragstart', handleDragStart);
  letterDiv.addEventListener('click', handleClick); // Thêm sự kiện nhấp chuột
  lettersContainer.appendChild(letterDiv); // Thêm ký tự trở lại ô từ

  // Xóa ký tự khỏi ô ghép từ
  e.target.remove();
}


// Hàm trộn ký tự ngẫu nhiên
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Xử lý khi nhấp chuột vào ký tự trong bảng ký tự
function handleClick(e) {
  let letter = e.target.innerText;

  // Kiểm tra nếu ký tự đã tồn tại trong ô ghép từ, không thêm ký tự mới
  let existingLetterDivs = Array.from(inputBox.children + 1);
  let isAlreadyInInputBox = existingLetterDivs.some(div => div.innerText === letter);

  if (!isAlreadyInInputBox) {
    let letterDiv = document.createElement('div');
    letterDiv.innerText = letter;
    letterDiv.draggable = true;
    letterDiv.addEventListener('dragstart', handleDragStart);
    letterDiv.addEventListener('dragover', handleDragOver);
    letterDiv.addEventListener('drop', handleDrop);
    letterDiv.addEventListener('click', handleClickInInputBox);
    inputBox.appendChild(letterDiv);

    // Xóa ký tự khỏi bảng ký tự
    e.target.remove();
  }
}

function handleInputBoxLetterClick(e) {
  let clickedLetter = e.target;

  // Nếu có một ký tự đang được chọn để hoán đổi
  if (selectedLetter) {
    // Hoán đổi nội dung của hai ký tự
    let tempText = selectedLetter.innerText;
    selectedLetter.innerText = clickedLetter.innerText;
    clickedLetter.innerText = tempText;

    selectedLetter.classList.remove('selected'); // Bỏ chọn ký tự cũ
    selectedLetter = null; // Đặt lại ký tự đã chọn
  } else {
    // Chọn ký tự để hoán đổi
    selectedLetter = clickedLetter;
    selectedLetter.classList.add('selected'); // Thêm class để hiển thị đã chọn
  }
}

// Xử lý kéo và thả ký tự từ bảng ký tự vào khung ghép từ
function handleDragStart(e) {
  e.dataTransfer.setData('text', e.target.innerText);
  e.target.classList.add('dragging'); // Thêm class để nhận biết phần tử đang kéo
}

inputBox.addEventListener('dragover', function (e) {
  e.preventDefault();
});

inputBox.addEventListener('drop', function (e) {
  e.preventDefault();

  // Lấy ký tự được kéo từ bảng ký tự
  let letter = e.dataTransfer.getData('text');

  // Kiểm tra xem ký tự đã tồn tại trong khung ghép từ hay chưa
  let existingLetterDivs = Array.from(inputBox.children);
  let isAlreadyInInputBox = existingLetterDivs.some(div => div.innerText === letter);

  // Nếu ký tự chưa có trong khung ghép, thêm nó vào
  if (!isAlreadyInInputBox) {
    let letterDiv = document.createElement('div');
    letterDiv.innerText = letter;
    letterDiv.draggable = true;
    letterDiv.addEventListener('dragstart', handleDragStart);
    letterDiv.addEventListener('dragover', handleDragOver);
    letterDiv.addEventListener('drop', handleDrop);
    letterDiv.addEventListener('click', handleClick);
    inputBox.appendChild(letterDiv);

    // Chỉ xóa ký tự sau khi đã thêm thành công vào khung ghép từ
    let draggedLetter = document.querySelector('.dragging');
    if (draggedLetter) {
      draggedLetter.remove(); // Xóa phần tử đã kéo ra khỏi bảng ký tự
    }
  }

  // Xóa class 'dragging' sau khi hoàn thành thao tác kéo thả
  let draggedLetter = document.querySelector('.dragging');
  if (draggedLetter) {
    draggedLetter.classList.remove('dragging');
  }
});

// Xử lý kéo thả trong khung ghép từ (hoán đổi vị trí)
function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {

  e.preventDefault();
  if (isCorrect) return;
  let draggedLetter = document.querySelector('.dragging'); // Phần tử đang kéo
  let targetLetter = e.target;  // Phần tử mà người chơi thả vào (trong khung ghép)

  // Kiểm tra xem người chơi thả vào một phần tử có thực sự chứa ký tự (div)
  if (draggedLetter && targetLetter && targetLetter !== draggedLetter) {
    // Hoán đổi văn bản của hai phần tử
    let tempText = draggedLetter.innerText;
    draggedLetter.innerText = targetLetter.innerText;
    targetLetter.innerText = tempText;
  }

  // Xóa class 'dragging' khi hoàn thành hoán đổi
  draggedLetter.classList.remove('dragging');
}



let originalLetters = []; // Mảng để lưu trữ các ký tự gốc

// Hàm hiển thị các ký tự trong từ
function displayLetters(word) {
  lettersContainer.innerHTML = ''; // Xóa các ký tự cũ
  inputBox.innerHTML = ''; // Xóa từ trong hộp ghép
  let letters = word.split('');

  originalLetters = [...letters]; // Lưu trữ các ký tự gốc để reset nếu sai
  shuffle(letters); // Trộn các ký tự

  letters.forEach(letter => {
    let letterDiv = document.createElement('div');
    letterDiv.innerText = letter;
    letterDiv.draggable = true;
    letterDiv.addEventListener('dragstart', handleDragStart);
    letterDiv.addEventListener('click', handleClick);
    lettersContainer.appendChild(letterDiv);
  });
}

// Khi nhấn nút "Kiểm tra từ"
submitButton.addEventListener('click', function () {
  let word = '';
  let letters = inputBox.querySelectorAll('div');
  letters.forEach(letter => {
    if (letter.innerText == '') {
      word += " ";
    } else {
      word += letter.innerText;
    }
  });

  if (word === currentWord) {
    isCorrect = true;
    countFalse = 0;
    textAnswer.innerText = "Đáp án: " + tmp.name;
    //message.style.display = 'block';
    message.innerText = 'Chính xác! Bạn đã ghép đúng!';
    textExample.innerText = 'Ví dụ: ' + tmp.example;
    nextButton.style.display = 'block';
    textAnswer.style.display = 'block';
    textExample.style.display = 'block';
    lettersContainer.style.display = 'none';
  } else {
    isCorrect = false;
    countFalse++;
    //message.style.display = 'block';
    message.innerText = 'Sai rồi, thử lại!';
    setTimeout(() => {

      resetInputBox(); // Reset các ký tự trong khung ghép từ
      resetLettersContainer(); // Khôi phục lại ký tự trong bảng ký tự          
    }, 1000);


  }
});
nextButton.addEventListener('click', function () {
  loadNextScene();
})

// Hàm reset các ký tự trong khung ghép từ
function resetInputBox() {
  //message.style.display = 'none';
  message.innerText = '';
  inputBox.innerHTML = ''; // Xóa toàn bộ ký tự trong khung ghép
}

// Khôi phục lại các ký tự gốc trong bảng ký tự
function resetLettersContainer() {
  if(countFalse <= 3 ){

    displayLetters(tmp.name);
  } else {
    textAnswer.innerText = "Đáp án: " + tmp.name;
    lettersContainer.innerHTML = ''; // Xóa ký tự trong bảng ký tự
    originalLetters.forEach(letter => {
      let letterDiv = document.createElement('div');
      letterDiv.innerText = letter;
      letterDiv.draggable = true;
      letterDiv.addEventListener('dragstart', handleDragStart);
      letterDiv.addEventListener('dragover', handleDragOver);
      letterDiv.addEventListener('drop', handleDrop);
      letterDiv.addEventListener('click', handleClick); // Thêm sự kiện click vào ký tự
      lettersContainer.appendChild(letterDiv);
    });
  }
}


// Chuyển sang cảnh tiếp theo
function loadNextScene() {
  // Ví dụ đơn giản là nạp lại từ mới của cảnh hiện tại
  //message.style.display = 'none';
  lettersContainer.style.display = 'flex';
  initGame();
}

// Khởi động game
initGame();
