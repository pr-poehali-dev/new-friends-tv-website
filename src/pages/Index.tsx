import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const programs = [
    { id: 1, title: 'Доброе утро', time: '06:00', type: 'Шоу', image: 'https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/f19a67b5-0c31-4252-bd07-c4eda9efb358.jpg' },
    { id: 2, title: 'Новости дня', time: '09:00', type: 'Новости', image: 'https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/f19a67b5-0c31-4252-bd07-c4eda9efb358.jpg' },
    { id: 3, title: 'Кино и сериалы', time: '12:00', type: 'Кино', image: 'https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/f19a67b5-0c31-4252-bd07-c4eda9efb358.jpg' },
    { id: 4, title: 'Вечерний эфир', time: '18:00', type: 'Развлечения', image: 'https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/f19a67b5-0c31-4252-bd07-c4eda9efb358.jpg' },
    { id: 5, title: 'Ночное кино', time: '22:00', type: 'Кино', image: 'https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/f19a67b5-0c31-4252-bd07-c4eda9efb358.jpg' },
  ];

  const schedule = {
    '1 ноября': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Кулинарное шоу', description: 'Готовим вкусные блюда' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '19:00', title: 'Итоги недели - 1 выпуск', description: 'Премьера новой итоговой программы' },
      { time: '20:10', title: 'Супер Аватар - 1 выпуск', description: 'Премьера музыкального шоу' },
      { time: '22:00', title: 'Главное кино', description: 'Лучшие фильмы мирового проката' },
    ],
    '8 ноября': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '13:00', title: 'Большой футбол: Финал', description: 'Прямая трансляция финального матча' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '19:00', title: 'Ток-шоу "Разговор"', description: 'Откровенная беседа с гостями' },
      { time: '21:00', title: 'Главное кино', description: 'Лучшие фильмы мирового проката' },
    ],
    'Понедельник': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Кулинарное шоу', description: 'Готовим вкусные блюда' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '19:00', title: 'Ток-шоу "Разговор"', description: 'Откровенная беседа с гостями' },
      { time: '21:00', title: 'Главное кино', description: 'Лучшие фильмы мирового проката' },
    ],
    'Вторник': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Путешествия', description: 'Открываем новые места' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '20:00', title: 'Музыкальное шоу', description: 'Лучшие хиты и новинки' },
      { time: '22:00', title: 'Документальное кино', description: 'Истории, которые вдохновляют' },
    ],
    'Среда': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Здоровье', description: 'Советы врачей и экспертов' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '19:30', title: 'Спортивная арена', description: 'Все о спорте' },
      { time: '21:00', title: 'Главное кино', description: 'Лучшие фильмы мирового проката' },
    ],
    'Четверг': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Мода и стиль', description: 'Тренды и советы стилистов' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '20:00', title: 'Развлекательное шоу', description: 'Веселье и юмор' },
      { time: '22:00', title: 'Ночное кино', description: 'Фильмы для киноманов' },
    ],
    'Пятница': [
      { time: '06:00', title: 'Доброе утро', description: 'Утреннее шоу для хорошего начала дня' },
      { time: '09:00', title: 'Новости', description: 'Главные события страны и мира' },
      { time: '12:00', title: 'Детское время', description: 'Передачи для всей семьи' },
      { time: '15:00', title: 'Сериал "Новые друзья"', description: 'Продолжение истории' },
      { time: '18:00', title: 'Вечерние новости', description: 'Итоги дня' },
      { time: '19:00', title: 'Пятничное шоу', description: 'Начало выходных!' },
      { time: '21:00', title: 'Премьера фильма', description: 'Эксклюзивный показ' },
    ],
    'Суббота': [
      { time: '07:00', title: 'Утро выходного дня', description: 'Отдыхаем и развлекаемся' },
      { time: '10:00', title: 'Мультфильмы', description: 'Для детей и взрослых' },
      { time: '12:00', title: 'Кулинарное путешествие', description: 'Рецепты со всего мира' },
      { time: '15:00', title: 'Концерт', description: 'Живая музыка' },
      { time: '18:00', title: 'Новости недели', description: 'Главное за неделю' },
      { time: '20:00', title: 'Шоу талантов', description: 'Удивительные выступления' },
      { time: '22:00', title: 'Субботнее кино', description: 'Хиты кинопроката' },
    ],
    'Воскресенье': [
      { time: '07:00', title: 'Утро выходного дня', description: 'Отдыхаем и развлекаемся' },
      { time: '10:00', title: 'Семейное кино', description: 'Фильмы для всей семьи' },
      { time: '12:00', title: 'Путешествия', description: 'Самые красивые места планеты' },
      { time: '15:00', title: 'Спорт', description: 'Трансляции соревнований' },
      { time: '18:00', title: 'Итоги недели', description: 'Главные события' },
      { time: '19:00', title: 'Большое интервью', description: 'Звезды в эфире' },
      { time: '21:00', title: 'Воскресное кино', description: 'Завершаем неделю фильмом' },
    ],
  };

  const news = [
    { id: 1, title: 'Запуск нового сезона "Новые друзья"', date: '27 октября 2025', excerpt: 'С 1 ноября стартует долгожданный новый сезон главного сериала канала' },
    { id: 2, title: 'Победители конкурса "Лучший зритель"', date: '25 октября 2025', excerpt: 'Объявлены имена победителей ежегодного конкурса среди наших зрителей' },
    { id: 3, title: 'Новая студия в центре Москвы', date: '20 октября 2025', excerpt: 'Телеканал открывает современную студию для съемок развлекательных программ' },
  ];

  const shows = [
    { title: 'Доброе утро', time: 'Будни 06:00', description: 'Утреннее информационно-развлекательное шоу', type: 'Шоу' },
    { title: 'Новые друзья', time: 'Будни 15:00', description: 'Популярный сериал о современной жизни', type: 'Сериал' },
    { title: 'Вечернее шоу', time: 'Будни 19:00', description: 'Гости, интервью, развлечения', type: 'Ток-шоу' },
    { title: 'Главное кино', time: 'Ежедневно 21:00', description: 'Лучшие фильмы мирового кинематографа', type: 'Кино' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Tv" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Новые Друзья ТВ
                </h1>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {['home', 'live', 'schedule', 'about', 'shows', 'news', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'live' && 'Прямой эфир'}
                  {section === 'schedule' && 'Телепрограмма'}
                  {section === 'about' && 'О канале'}
                  {section === 'shows' && 'Передачи'}
                  {section === 'news' && 'Новости'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>

            <Button variant="default" className="hidden md:flex gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Play" size={18} />
              Смотреть онлайн
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/17136233-418e-4c97-b9f0-dc3add6e480b/files/301b272a-5761-485e-832d-44a0710a31f2.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ваш любимый телеканал
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Яркие эмоции, интересные передачи и незабываемые моменты каждый день
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2" onClick={() => scrollToSection('live')}>
              <Icon name="Play" size={20} />
              Смотреть прямой эфир
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" onClick={() => scrollToSection('schedule')}>
              Телепрограмма
            </Button>
          </div>
        </div>
      </section>

      <section id="live" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500 animate-pulse">
              <Icon name="Radio" size={16} className="mr-2" />
              В ЭФИРЕ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Прямой эфир</h2>
            <p className="text-xl text-gray-600">Смотрите наш канал прямо сейчас</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=0"
                title="Прямой эфир"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Сейчас в эфире</h3>
                  <p className="text-gray-600">Доброе утро • 06:00 - 09:00</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="lg">
                    <Icon name="Volume2" size={20} className="mr-2" />
                    Звук
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Settings" size={20} className="mr-2" />
                    Качество
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные программы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={program.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">{program.type}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {program.time}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Телепрограмма</h3>
          
          <Tabs defaultValue="1 ноября" className="w-full">
            <TabsList className="grid w-full grid-cols-9 mb-8">
              {Object.keys(schedule).map((day) => (
                <TabsTrigger key={day} value={day} className="text-xs md:text-sm">
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(schedule).map(([day, programs]) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 items-start">
                          <Badge variant="secondary" className="text-lg font-bold">
                            {program.time}
                          </Badge>
                          <div>
                            <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                            <CardDescription>{program.description}</CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Icon name="Bell" size={20} />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">О телеканале</h3>
            <p className="text-lg text-muted-foreground mb-8">
              "Новые Друзья ТВ" — это современный телеканал, который объединяет людей через качественный контент. 
              Мы создаём передачи, которые вдохновляют, развлекают и информируют нашу аудиторию.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">5M+</h4>
                <p className="text-muted-foreground">Зрителей каждый день</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Tv" size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">50+</h4>
                <p className="text-muted-foreground">Уникальных передач</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">15+</h4>
                <p className="text-muted-foreground">Наград и премий</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="shows" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные передачи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shows.map((show, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2">{show.type}</Badge>
                  <CardTitle>{show.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mb-3">
                    <Icon name="Clock" size={16} />
                    {show.time}
                  </CardDescription>
                  <p className="text-sm">{show.description}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="Info" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Новости канала</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mb-3">
                        <Icon name="Calendar" size={16} />
                        {item.date}
                      </CardDescription>
                      <p>{item.excerpt}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground">info@noviedruzia.tv</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Телевизионная, д. 10</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Напишите нам</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Новые Друзья ТВ</h4>
              <p className="text-white/80">Ваш любимый телеканал с качественным контентом</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Телепрограмма</a></li>
                <li><a href="#shows" className="hover:text-white transition-colors">Передачи</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@noviedruzia.tv</li>
                <li>г. Москва</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2025 Новые Друзья ТВ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;