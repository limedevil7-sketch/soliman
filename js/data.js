/**
 * Soliman Nightmares — Data Layer
 * Structured content for easy future expansion / CMS / API replacement
 */

const VIDEOS = [
  {
    id: 'v1',
    title: 'الخوارزمية التي تراقبك في الظلام',
    description: 'نظام مراقبة بالذكاء الاصطناعي يتعلم من مخاوفك ويتنبأ بتحركاتك.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'DARK TECHNOLOGY',
    duration: '18:42',
    date: '2026-08-15',
    featured: true
  },
  {
    id: 'v2',
    title: 'القصة التي اختفت من الإنترنت',
    description: 'ملف رُفع ثم اختفى خلال ساعات. من كان يراقبه؟',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'MYSTERY',
    duration: '14:20',
    date: '2026-08-10',
    featured: false
  },
  {
    id: 'v3',
    title: 'الذكاء الاصطناعي الذي حلم بالكوابيس',
    description: 'عندما درّب الباحثون نموذجًا على بيانات الأحلام المظلمة.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'AI HORROR',
    duration: '22:05',
    date: '2026-08-05',
    featured: false
  },
  {
    id: 'v4',
    title: 'أساطير الدارك ويب الحقيقية',
    description: 'قصص من أعماق الشبكة لم تُروَ من قبل.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'DARK WEB',
    duration: '19:33',
    date: '2026-07-28',
    featured: false
  },
  {
    id: 'v5',
    title: 'المنزل الذي يتذكر',
    description: 'في قرية نائية، منزل يحتفظ بذكريات من سكنوه... حتى بعد موتهم.',
    thumbnail: 'https://images.unsplash.com/photo-1518780664697-55e0cffa9e8e?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'HORROR',
    duration: '16:48',
    date: '2026-07-20',
    featured: false
  },
  {
    id: 'v6',
    title: 'سيناريو 2035: عندما أصبحت الشاشات أبوابًا',
    description: 'مستقبل مرعب حيث تتسرب الكيانات من الشاشات إلى الواقع.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80',
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4',
    category: 'FUTURE NIGHTMARES',
    duration: '21:10',
    date: '2026-07-12',
    featured: false
  }
];

const STORIES = [
  {
    id: 's1',
    slug: 'the-watching-algorithm',
    title: 'الخوارزمية التي تراقبك',
    description: 'نظام يتعلم من مخاوفك ويتنبأ بتحركاتك قبل أن تفكر فيها.',
    content: 'في صيف 2024، بدأت تقارير غريبة تظهر على منتديات الأمن السيبراني. مستخدمون يشتكون من أن إعلاناتهم أصبحت تعرف أشياء لم يبحثوا عنها قط.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    category: 'dark-tech',
    date: '2026-08-15',
    readingTime: 8,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  },
  {
    id: 's2',
    slug: 'vanished-file',
    title: 'الملف الذي اختفى',
    description: 'رُفع ثم اختفى خلال ساعات. من كان يراقبه؟',
    content: 'في ساعة متأخرة من ليل 12 مارس، رفع مستخدم مجهول على منتدى صغير ملفًا مضغوطًا. خلال أربع ساعات، اختفى المنشور.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    category: 'mystery',
    date: '2026-08-10',
    readingTime: 6,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  },
  {
    id: 's3',
    slug: 'ai-that-dreamed',
    title: 'الذكاء الذي حلم بالكوابيس',
    description: 'نموذج دُرّب على بيانات الأحلام المظلمة... وبدأ يُنتج أكثر مما طُلب منه.',
    content: 'في مختبر أبحاث خاص، قرر فريق تدريب نموذج لغوي على تقارير الكوابيس. النتيجة كانت مختلفة تمامًا.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'dark-tech',
    date: '2026-08-05',
    readingTime: 7,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  },
  {
    id: 's4',
    slug: 'house-that-remembers',
    title: 'المنزل الذي يتذكر',
    description: 'منزل في قرية نائية يحتفظ بذكريات من سكنوه... حتى بعد موتهم.',
    content: 'في أقصى الريف، يقع منزل حجري قديم. الجدران تهمس بأسماء. الأبواب تُفتح على غرف لم تكن موجودة.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e0cffa9e8e?w=800&q=80',
    category: 'horror',
    date: '2026-07-20',
    readingTime: 5,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  },
  {
    id: 's5',
    slug: 'screens-as-doors',
    title: 'عندما أصبحت الشاشات أبوابًا',
    description: 'سيناريو مستقبلي مرعب: كيانات تتسرب من الشاشات إلى عالمنا.',
    content: 'تخيل عام 2035. الشاشات في كل مكان. ثم بدأت التقارير عن وجوه في الشاشات المطفأة.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    category: 'future',
    date: '2026-07-12',
    readingTime: 6,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  },
  {
    id: 's6',
    slug: 'dark-web-legends',
    title: 'أساطير من أعماق الشبكة',
    description: 'قصص حقيقية من الدارك ويب... أو هكذا يُقال.',
    content: 'الدارك ويب مليء بالأساطير. بعضها مبالغ فيه. بعضها أخطر مما تتصور.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    category: 'dark-web',
    date: '2026-07-28',
    readingTime: 7,
    youtubeUrl: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4'
  }
];

const CATEGORIES = [
  { id: 'horror', name: 'HORROR', nameAr: 'قصص الرعب', image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&q=80' },
  { id: 'mystery', name: 'MYSTERY', nameAr: 'الغموض', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80' },
  { id: 'dark-tech', name: 'DARK TECHNOLOGY', nameAr: 'التكنولوجيا المظلمة', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
  { id: 'true-crime', name: 'TRUE CRIME', nameAr: 'الجرائم الغريبة', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80' },
  { id: 'dark-web', name: 'DARK WEB', nameAr: 'أسرار الإنترنت المظلم', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80' },
  { id: 'future', name: 'FUTURE NIGHTMARES', nameAr: 'كابوس المستقبل', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' }
];

const SOCIAL_LINKS = [
  { id: 'youtube', name: 'YouTube', descriptionAr: 'شاهد الكوابيس', url: 'https://youtube.com/@solimannightmares?si=w_bGt-2Zk-AxQQC4', icon: '▶' },
  { id: 'telegram', name: 'Telegram', descriptionAr: 'انضم للقناة', url: 'https://t.me/+Di-kNOxDldE0OTk0', icon: '✈' },
  { id: 'facebook-page', name: 'Facebook Page', descriptionAr: 'تابع آخر التحديثات', url: 'https://www.facebook.com/share/1ZWHfsjDSw/?mibextid=wwXIfr', icon: 'f' },
  { id: 'facebook-group', name: 'Facebook Group', descriptionAr: 'انضم للمجتمع', url: 'https://www.facebook.com/share/g/19GLRyEEYX/?mibextid=wwXIfr', icon: '👥' },
  { id: 'discord', name: 'Discord', descriptionAr: 'ادخل المجتمع', url: 'https://discord.gg/bXbSysEwa', icon: '💬' }
];

const TECH_TOPICS = [
  { id: 't1', icon: '🤖', title: 'AI Horror', description: 'عندما يتعلم الذكاء الاصطناعي الخوف... أو يُعلّمه لنا.' },
  { id: 't2', icon: '👁', title: 'Surveillance', description: 'أنظمة المراقبة التي تعرف عنك أكثر مما تعرف عن نفسك.' },
  { id: 't3', icon: '🕸', title: 'Dark Web Mysteries', description: 'أسرار وأساطير من أعماق الشبكة المظلمة.' },
  { id: 't4', icon: '📡', title: 'Digital Paranoia', description: 'الشعور بأن شخصًا ما يراقب من الشاشة.' },
  { id: 't5', icon: ' fores', title: 'Future Dystopia', description: 'سيناريوهات مستقبلية حيث تتحول التقنية إلى كابوس.' },
  { id: 't6', icon: '⚠', title: 'Technology Gone Wrong', description: 'تجارب خرجت عن السيطرة... ونتائج لم يُعلن عنها.' }
];

const MessagesStore = {
  STORAGE_KEY: 'sn_messages_v1',
  MAX_LENGTH: 280,
  RATE_LIMIT_MS: 8000,
  lastSubmit: 0,

  getAll() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return this.getDefaults();
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : this.getDefaults();
    } catch {
      return this.getDefaults();
    }
  },

  getDefaults() {
    return [
      { id: 'm1', content: 'القصة الأخيرة كانت مرعبة بشكل مش طبيعي...', createdAt: new Date(Date.now() - 7200000).toISOString(), authorName: 'شبح', avatar: '👻' },
      { id: 'm2', content: 'مين لاحظ التفاصيل اللي ظهرت في النهاية؟', createdAt: new Date(Date.now() - 5400000).toISOString(), authorName: 'شبح', avatar: '👻' },
      { id: 'm3', content: 'أنا مستني الحلقة الجاية 🔥', createdAt: new Date(Date.now() - 3600000).toISOString(), authorName: 'شبح', avatar: '👻' },
      { id: 'm4', content: 'الدارك ويب مش زي ما الناس تتخيل... أسوأ.', createdAt: new Date(Date.now() - 1800000).toISOString(), authorName: 'شبح', avatar: '👻' }
    ];
  },

  save(messages) {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages)); } catch (e) {}
  },

  sanitize(text) {
    if (typeof text !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim().slice(0, this.MAX_LENGTH);
  },

  canSubmit() {
    return Date.now() - this.lastSubmit >= this.RATE_LIMIT_MS;
  },

  add(content) {
    const cleaned = this.sanitize(content);
    if (!cleaned || cleaned.length < 2) return { ok: false, error: 'الرسالة قصيرة جدًا' };
    if (!this.canSubmit()) return { ok: false, error: 'انتظر قليلًا قبل إرسال رسالة أخرى' };
    const messages = this.getAll();
    const newMsg = {
      id: 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      content: cleaned,
      createdAt: new Date().toISOString(),
      authorName: 'شبح',
      avatar: '👻'
    };
    messages.push(newMsg);
    if (messages.length > 100) messages.splice(0, messages.length - 100);
    this.save(messages);
    this.lastSubmit = Date.now();
    return { ok: true, message: newMsg };
  }
};
